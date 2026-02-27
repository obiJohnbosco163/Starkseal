import { Link } from "react-router-dom";
import { Element, Link as ScLink } from "react-scroll";
export default function Navbar({ get_balance }) {
  return (
    <div>
      {/* Navigation */}

      <nav class="sticky top-0 z-50 border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center gap-3">
              <Link to="./">
                <div class="flex items-center justify-center size-10  rounded-full">
                  <img
                    src="/images/img_20260216_203641.png.png"
                    alt="StarkSeal"
                    className="w-full h-full rounded-full"
                  />
                </div>
              </Link>

              <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                StarkSeal
              </span>
            </div>
            <div class="hidden md:flex items-center gap-8">
              <ScLink
                to="active_auction"
                smooth={true}
                duration={500}
                offset={-100}
                class="text-sm font-medium hover:text-primary transition-colors"
              >
                Explore
              </ScLink>

              <Link
                to="/dashboard"
                class="text-sm font-medium hover:text-primary transition-colors"
              >
                My Bids
              </Link>
              <div class="h-4 w-px bg-primary/20"></div>
              <button
                onClick={get_balance}
                class="bg-primary hover:bg-primary/90 text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <span class="material-symbols-outlined text-sm">
                  account_balance_wallet
                </span>
                Connect Wallet
              </button>
            </div>
            <div class="md:hidden">
              <span class="material-symbols-outlined text-slate-400">menu</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
