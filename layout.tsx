import { ReactNode } from 'react';

export default function CommitLayout({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-black mb-6">Commit Your Bid</h1>
            {children}
        </div>
    );
}
