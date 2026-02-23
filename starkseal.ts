import { Contract, Provider, Account, uint256, shortString } from "starknet";
import ABI from "./StarkSealABI.json";

export const STARKSEAL_CONTRACT_ADDRESS =
  "0x03e915de50fe62d90305e41fa31d7eff8c005244311c1253dae9d74af88df1e1";
export const STARKNET_RPC =
  "https://starknet-sepolia.public.blastapi.io/rpc/v0_8";

export function getStarkSealContract(providerOrAccount: Provider | Account) {
  return new Contract(
    ABI as any,
    STARKSEAL_CONTRACT_ADDRESS,
    providerOrAccount,
  );
}

// Helper to convert string/number to u256
export function toU256(val: string | number | bigint) {
  return uint256.bnToUint256(BigInt(val));
}

// Helper to convert string to felt252 (hex)
export function toFelt(str: string) {
  // If already hex, return as is
  if (str.startsWith("0x")) return str;
  return "0x" + Buffer.from(str, "utf8").toString("hex");
}

export async function commitBid(
  auctionId: string | number | bigint,
  commitment: string,
  deposit: string | number | bigint,
  account: Account,
) {
  const contract = getStarkSealContract(account);
  return contract.commit_bid(toU256(auctionId), commitment, toU256(deposit));
}

export async function revealBid(
  auctionId: string | number | bigint,
  bid: string | number | bigint,
  secret: string,
  account: Account,
) {
  const contract = getStarkSealContract(account);
  return contract.reveal_bid(toU256(auctionId), toU256(bid), toFelt(secret));
}

export async function finalizeAuction(
  auctionId: string | number | bigint,
  account: Account,
) {
  const contract = getStarkSealContract(account);
  return contract.finalize_auction(toU256(auctionId));
}

export async function withdraw(
  auctionId: string | number | bigint,
  account: Account,
) {
  const contract = getStarkSealContract(account);
  return contract.withdraw(toU256(auctionId));
}
