import { useAccount, useConnect, useDisconnect } from '@starknet-react/core';

export default function WalletConnect() {
    const { address, isConnected } = useAccount();
    const { connect, connectors, isConnecting } = useConnect();
    const { disconnect } = useDisconnect();

    if (isConnected && address) {
        return (
            <button
                className="bg-primary text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                onClick={() => disconnect()}
                title={address}
            >
                {address.slice(0, 6)}...{address.slice(-4)} (Disconnect)
            </button>
        );
    }

    return (
        <button
            className="bg-primary text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            onClick={() => connect({ connector: connectors[0] })}
            disabled={isConnecting}
        >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
    );
}
