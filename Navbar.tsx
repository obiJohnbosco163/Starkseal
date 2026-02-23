import Logo from '@/components/Logo';
import WalletConnect from '@/components/WalletConnect';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex items-center gap-3">
                    <Logo />
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">StarkSeal</span>
                </div>
                <div className="flex items-center gap-8">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/">Explore</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/dashboard">My Bids</a>
                    <WalletConnect />
                </div>
            </div>
        </nav>
    );
}
