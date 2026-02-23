import { pedersen } from "starknet";

// Utility to hash bid and secret using Pedersen hash
export function pedersenHash(bid: string, secret: string) {
  // Convert bid and secret to BigInt (felt)
  const bidFelt = BigInt(bid);
  const secretFelt = BigInt("0x" + Buffer.from(secret, "utf8").toString("hex"));
  return pedersen(bidFelt, secretFelt).toString();
}
