use core::hash::HashStateTrait;
use core::poseidon::PoseidonTrait;
use starknet::ContractAddress;

#[test]
fn test_starkseal_basic() {
    // Basic smoke test — hashing only
    let _: ContractAddress = 1.try_into().unwrap();
    let _: ContractAddress = 2.try_into().unwrap();
    let _: ContractAddress = 3.try_into().unwrap();

    let a_bid: u256 = 500;
    let a_secret: felt252 = 'johnbosco';

    // Test hash computation using Poseidon
    let mut state = PoseidonTrait::new();
    state = state.update(a_bid.low.into());
    state = state.update(a_secret);
    let a_hash = state.finalize();

    assert(a_hash != 0, 'Hash should not be zero');

    let b_bid: u256 = 700;
    let b_secret: felt252 = 'arinze';

    let mut state = PoseidonTrait::new();
    state = state.update(b_bid.low.into());
    state = state.update(b_secret);
    let b_hash = state.finalize();

    assert(b_hash != 0, 'Hash should not be zero');
    assert(a_hash != b_hash, 'Hashes should be different');
}
