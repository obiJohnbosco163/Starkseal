use starknet::ContractAddress;

#[starknet::interface]
pub trait IStarkSeal<TContractState> {
    fn get_owner(self: @TContractState) -> ContractAddress;

    fn create_auction(ref self: TContractState, auctioneer: ContractAddress, commit_time: u64, reveal_time: u64) -> u256;

    fn commit_bid(ref self: TContractState, auction_id: u256, commitment: felt252, deposit: u256);

    fn reveal_bid(ref self: TContractState, auction_id: u256, bid: u256, secret: felt252);

    fn finalize_auction(ref self: TContractState, auction_id: u256);

    fn withdraw(ref self: TContractState, auction_id: u256);

    fn get_winner(self: @TContractState, auction_id: u256) -> ContractAddress;
}


#[starknet::contract]
pub mod StarkSeal {
    use starknet::storage::{Map, StorageMapReadAccess, StorageMapWriteAccess, StoragePointerReadAccess, StoragePointerWriteAccess};
    use starknet::{ContractAddress, get_caller_address, get_block_timestamp};
    use core::num::traits::Zero;
    use core::poseidon::PoseidonTrait;
    use core::hash::HashStateTrait;
    // use super::IStarkSeal;
    

    #[derive(Copy, Drop, Serde, starknet::Store, PartialEq)]
    #[allow(starknet::store_no_default_variant)]
    pub enum Phase {
        Commit,
        Reveal,
        Finalized,
        Withdraw,
        View
    }

    #[derive(Copy, Drop, Serde, starknet::Store)]
    pub struct Auction {
        owner: ContractAddress,
        commit_end: u64,
        reveal_end: u64,
        phase: Phase,
        highest_bid: u256,
        winner: ContractAddress,
    }

    #[derive(Copy, Drop, Serde, starknet::Store)]
    pub struct Bidder {
        commitment: felt252,
        deposit: u256,
        bid: u256,
        revealed: bool,
        withdrawn: bool,
    }

    #[storage]
    pub struct Storage {
        owner: ContractAddress,
        auction_count: u256,
        auctions: Map<u256, Auction>,
        bidders: Map<(u256, ContractAddress), Bidder>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {
        AuctionCreated: AuctionCreated,
        BidCommitted: BidCommitted,
        BidRevealed: BidRevealed,
        AuctionFinalized: AuctionFinalized,
        Withdrawn: Withdrawn,
    }

    #[derive(Drop, starknet::Event)]
    pub struct AuctionCreated {
        id: u256,
        owner: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    pub struct BidCommitted {
        id: u256,
        user: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    pub struct BidRevealed {
        id: u256,
        user: ContractAddress,
        bid: u256,
    }

    #[derive(Drop, starknet::Event)]
    pub struct AuctionFinalized {
        id: u256,
        winner: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    pub struct Withdrawn {
        id: u256,
        user: ContractAddress,
        amount: u256,
    }

    #[constructor]
    fn constructor(ref self: ContractState, initial_owner: ContractAddress) {
        self.owner.write(initial_owner);
    }

    #[abi(embed_v0)]
    impl StarkSealImpl of super::IStarkSeal<ContractState> {

        fn get_owner(self: @ContractState) -> ContractAddress {
            self.owner.read()
        }

        fn create_auction(ref self: ContractState, auctioneer: ContractAddress, commit_time: u64, reveal_time: u64) -> u256 {
            let auctioneer = get_caller_address();
            let now = get_block_timestamp();

            let id = self.auction_count.read() + 1;
            self.auction_count.write(id);

            let auction = Auction {
                owner: auctioneer,
                commit_end: now + commit_time,
                reveal_end: now + commit_time + reveal_time,
                phase: Phase::Commit,
                highest_bid: 0,
                winner: Zero::zero(),
            };

            self.auctions.write(id, auction);

            self.emit(Event::AuctionCreated(AuctionCreated { id, owner: auctioneer }));

            id
        }


        fn commit_bid(
            ref self: ContractState, auction_id: u256, commitment: felt252, deposit: u256,
        ) {
            let caller = get_caller_address();
            let now = get_block_timestamp();

            let auction = self.auctions.read(auction_id);

            assert(auction.phase == Phase::Commit, 'Wrong phase');
            assert(now < auction.commit_end, 'Commit closed');

            let bidder = Bidder { commitment, deposit, bid: 0, revealed: false, withdrawn: false };

            self.bidders.write((auction_id, caller), bidder);

            self.emit(Event::BidCommitted(BidCommitted { id: auction_id, user: caller }));
        }

        // ---------------- REVEAL ----------------

        fn reveal_bid(ref self: ContractState, auction_id: u256, bid: u256, secret: felt252) {
            let caller = get_caller_address();
            let now = get_block_timestamp();

            let mut auction = self.auctions.read(auction_id);

            if auction.phase == Phase::Commit {
                auction.phase = Phase::Reveal;
            }

            assert(auction.phase == Phase::Reveal, 'Wrong phase');
            assert(now < auction.reveal_end, 'Reveal closed');

            let mut bidder = self.bidders.read((auction_id, caller));

            // Compute hash of bid and secret using Poseidon
            let bid_felt: felt252 = bid.low.into();
            let mut state = PoseidonTrait::new();
            state = state.update(bid_felt);
            state = state.update(secret);
            let hash: felt252 = state.finalize();

            assert(hash == bidder.commitment, 'Invalid reveal');

            bidder.revealed = true;
            bidder.bid = bid;

            self.bidders.write((auction_id, caller), bidder);

            if bid > auction.highest_bid {
                auction.highest_bid = bid;
                auction.winner = caller;
            }

            self.auctions.write(auction_id, auction);

            self.emit(Event::BidRevealed(BidRevealed { id: auction_id, user: caller, bid }));
        }

        // ---------------- FINALIZE ----------------

        fn finalize_auction(ref self: ContractState, auction_id: u256) {
            let now = get_block_timestamp();

            let mut auction: Auction = self.auctions.read(auction_id);

            assert(now >= auction.reveal_end, 'Not finished');
            assert(auction.phase != Phase::Finalized, 'Finalized');

            auction.phase = Phase::Finalized;

            self.auctions.write(auction_id, auction);

            self
                .emit(
                    Event::AuctionFinalized(
                        AuctionFinalized { id: auction_id, winner: auction.winner },
                    ),
                );
        }

        // ---------------- WITHDRAW ----------------

        fn withdraw(ref self: ContractState, auction_id: u256) {
            let caller = get_caller_address();

            let auction: Auction = self.auctions.read(auction_id);

            assert(auction.phase == Phase::Finalized, 'Not finalized');

            let mut bidder: Bidder = self.bidders.read((auction_id, caller));

            assert(!bidder.withdrawn, 'Withdrawn');

            let mut payout: u256 = 0;

            if caller == auction.winner {
                payout = bidder.deposit - auction.highest_bid;
            } else if bidder.revealed {
                payout = bidder.deposit;
            } else {
                payout = bidder.deposit * 70 / 100;
            }

            bidder.withdrawn = true;

            self.bidders.write((auction_id, caller), bidder);

            self.emit(Event::Withdrawn(Withdrawn { id: auction_id, user: caller, amount: payout }));
        }

        // ---------------- VIEW ----------------

        fn get_winner(self: @ContractState, auction_id: u256) -> ContractAddress {
            self.auctions.read(auction_id).winner
        }
    }

}
