export const ABI = [
  {
    type: "impl",
    name: "StarkSealImpl",
    interface_name: "stark_seal::starkseal::IStarkSeal",
  },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "interface",
    name: "stark_seal::starkseal::IStarkSeal",
    items: [
      {
        type: "function",
        name: "get_owner",
        inputs: [],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "create_auction",
        inputs: [
          {
            name: "auctioneer",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "commit_time",
            type: "core::integer::u64",
          },
          {
            name: "reveal_time",
            type: "core::integer::u64",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "commit_bid",
        inputs: [
          {
            name: "auction_id",
            type: "core::integer::u256",
          },
          {
            name: "commitment",
            type: "core::felt252",
          },
          {
            name: "deposit",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "reveal_bid",
        inputs: [
          {
            name: "auction_id",
            type: "core::integer::u256",
          },
          {
            name: "bid",
            type: "core::integer::u256",
          },
          {
            name: "secret",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "finalize_auction",
        inputs: [
          {
            name: "auction_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "withdraw",
        inputs: [
          {
            name: "auction_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_winner",
        inputs: [
          {
            name: "auction_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "initial_owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "stark_seal::starkseal::StarkSeal::AuctionCreated",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "stark_seal::starkseal::StarkSeal::BidCommitted",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "stark_seal::starkseal::StarkSeal::BidRevealed",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "bid",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "stark_seal::starkseal::StarkSeal::AuctionFinalized",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "winner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "stark_seal::starkseal::StarkSeal::Withdrawn",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "stark_seal::starkseal::StarkSeal::Event",
    kind: "enum",
    variants: [
      {
        name: "AuctionCreated",
        type: "stark_seal::starkseal::StarkSeal::AuctionCreated",
        kind: "nested",
      },
      {
        name: "BidCommitted",
        type: "stark_seal::starkseal::StarkSeal::BidCommitted",
        kind: "nested",
      },
      {
        name: "BidRevealed",
        type: "stark_seal::starkseal::StarkSeal::BidRevealed",
        kind: "nested",
      },
      {
        name: "AuctionFinalized",
        type: "stark_seal::starkseal::StarkSeal::AuctionFinalized",
        kind: "nested",
      },
      {
        name: "Withdrawn",
        type: "stark_seal::starkseal::StarkSeal::Withdrawn",
        kind: "nested",
      },
    ],
  },
];
