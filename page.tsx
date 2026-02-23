import { useState } from 'react';
import { useAccount } from '@starknet-react/core';
import { commitBid } from '@/lib/starkseal';
import { pedersenHash } from '@/lib/pedersen';

// For demo, use a fixed auctionId (should be dynamic in real app)
const AUCTION_ID = '1';

export default function CommitPage() {
    const [bid, setBid] = useState('');
    const [secret, setSecret] = useState('');
    const [status, setStatus] = useState('');
    const { account, isConnected } = useAccount();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isConnected || !account) {
            setStatus('Please connect your wallet.');
            return;
        }
        try {
            setStatus('Hashing and submitting bid...');
            const commitment = pedersenHash(bid, secret);
            // 10% deposit
            const deposit = (Number(bid) * 0.1).toFixed(2);
            await commitBid(AUCTION_ID, commitment, deposit, account);
            setStatus('Bid committed! Confirm in your wallet.');
        } catch (err: any) {
            setStatus('Error: ' + (err?.message || err));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
            <div>
                <label className="block text-sm font-bold mb-2">Bid Amount (STRK)</label>
                <input type="number" value={bid} onChange={e => setBid(e.target.value)} className="w-full bg-background-dark border-white/10 rounded-lg h-14 pl-4 pr-16 text-xl font-bold focus:ring-primary focus:border-primary" placeholder="0.00" required />
            </div>
            <div>
                <label className="block text-sm font-bold mb-2">Secret Password</label>
                <input type="password" value={secret} onChange={e => setSecret(e.target.value)} className="w-full bg-background-dark border-white/10 rounded-lg h-14 pl-4 pr-12 text-lg focus:ring-primary focus:border-primary" placeholder="Enter a strong secret..." required />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black py-4 rounded-lg text-lg uppercase tracking-widest transition-all">Commit Hashed Bid</button>
            <div className="text-xs text-slate-400 mt-2">{status}</div>
        </form>
    );
}
