<<<<<<< HEAD
# StarkSeal Dapp

StarkSeal is a secure, private commit-reveal auction protocol built on Starknet. This Dapp allows users to participate in auctions using a three-phase process: Commit, Reveal, and Finalize. Built with Next.js, TypeScript, Tailwind CSS, and Starknet.js.

## Features

- Commit-reveal auction flow (commit, reveal, finalize)
- Starknet wallet integration (Braavos, ArgentX)
- Pedersen hash for bid privacy
- Slashing for non-reveal
- Dashboard for managing bids
- Modern, responsive UI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Starknet Contract

- Address: `0x03e915de50fe62d90305e41fa31d7eff8c005244311c1253dae9d74af88df1e1`
- RPC: `https://starknet-sepolia.public.blastapi.io/rpc/v0_8`
- ABI: See `src/lib/starkseal.ts`

## Project Structure

- `/src/app` - App Router pages (landing, commit, reveal, dashboard, finalize)
- `/src/components` - Reusable UI components
- `/src/lib` - Starknet contract and Pedersen hash utilities
- `/public/logo.png` - Dapp logo

## License

MIT
=======
# StarkSeal Dapp

StarkSeal is a secure, private commit-reveal auction protocol built on Starknet. This Dapp allows users to participate in auctions using a three-phase process: Commit, Reveal, and Finalize. Built with Next.js, TypeScript, Tailwind CSS, and Starknet.js.

## Features

- Commit-reveal auction flow (commit, reveal, finalize)
- Starknet wallet integration (Braavos, ArgentX)
- Pedersen hash for bid privacy
- Slashing for non-reveal
- Dashboard for managing bids
- Modern, responsive UI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Starknet Contract

- Address: `0x03e915de50fe62d90305e41fa31d7eff8c005244311c1253dae9d74af88df1e1`
- RPC: `https://starknet-sepolia.public.blastapi.io/rpc/v0_8`
- ABI: See `src/lib/starkseal.ts`

## Project Structure

- `/src/app` - App Router pages (landing, commit, reveal, dashboard, finalize)
- `/src/components` - Reusable UI components
- `/src/lib` - Starknet contract and Pedersen hash utilities
- `/public/logo.png` - Dapp logo

## License

MIT
>>>>>>> 807626699935d12e60653d05b288d191251069a3
