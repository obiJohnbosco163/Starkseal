// use starknet::ContractAddress;
// use snforge_std::{declare, ContractClassTrait, CheatTarget, start_prank, stop_prank, start_warp,
// stop_warp};
// use stark_seal::starkseal::{IStarkSealDispatcher, IStarkSealDispatcherTrait};
// use core::poseidon::PoseidonTrait;
// use core::hash::HashStateTrait;

// #[test]
// fn integration_starkseal_flow() {
//     let owner: ContractAddress = 1.try_into().unwrap();
//     let johnbosco: ContractAddress = 2.try_into().unwrap();
//     let arinze: ContractAddress = 3.try_into().unwrap();

//     // Declare and deploy the contract
//     let contract_class = declare("StarkSeal");
//     let contract_address = contract_class.deploy(@ArrayTrait::new()).unwrap();
//     let contract = IStarkSealDispatcher { contract_address };

//     // Create auction as owner
//     start_prank(CheatTarget::One(contract_address), owner);
//     let id = contract.create_auction(100, 100);
//     stop_prank(CheatTarget::One(contract_address));

//     // Move time into commit window
//     start_warp(CheatTarget::One(contract_address), 10);

//     // Commit bids
//     let a_bid: u256 = 500;
//     let a_secret: felt252 = 'johnbosco';
//     let mut state = PoseidonTrait::new();
//     state = state.update(a_bid.low.into());
//     state = state.update(a_secret);
//     let a_hash = state.finalize();

//     start_prank(CheatTarget::One(contract_address), johnbosco);
//     contract.commit_bid(id, a_hash, 600);
//     stop_prank(CheatTarget::One(contract_address));

//     let b_bid: u256 = 700;
//     let b_secret: felt252 = 'arinze';
//     let mut state = PoseidonTrait::new();
//     state = state.update(b_bid.low.into());
//     state = state.update(b_secret);
//     let b_hash = state.finalize();

//     start_prank(CheatTarget::One(contract_address), arinze);
//     contract.commit_bid(id, b_hash, 800);
//     stop_prank(CheatTarget::One(contract_address));

//     // Move time into reveal window
//     stop_warp(CheatTarget::One(contract_address));
//     start_warp(CheatTarget::One(contract_address), 150);

//     start_prank(CheatTarget::One(contract_address), johnbosco);
//     contract.reveal_bid(id, a_bid, a_secret);
//     stop_prank(CheatTarget::One(contract_address));

//     start_prank(CheatTarget::One(contract_address), arinze);
//     contract.reveal_bid(id, b_bid, b_secret);
//     stop_prank(CheatTarget::One(contract_address));

//     // Finalize
//     stop_warp(CheatTarget::One(contract_address));
//     start_warp(CheatTarget::One(contract_address), 300);

//     start_prank(CheatTarget::One(contract_address), owner);
//     contract.finalize_auction(id);
//     stop_prank(CheatTarget::One(contract_address));

//     let winner = contract.get_winner(id);
//     assert(winner == arinze, 'Wrong winner');

//     // Withdraw
//     start_prank(CheatTarget::One(contract_address), johnbosco);
//     contract.withdraw(id);
//     stop_prank(CheatTarget::One(contract_address));

//     start_prank(CheatTarget::One(contract_address), arinze);
//     contract.withdraw(id);
//     stop_prank(CheatTarget::One(contract_address));
// }
