export default function Nav() {
  return (
    <div>
      {/* Navigation */}

      <nav class="sticky top-0 z-50 border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center size-10 bg-primary/10 rounded-lg">
                <img
                  src="img_20260216_203641.png.png"
                  alt="StarkSeal"
                  style="width: 100%; height: 100%; border-radius: 50%;"
                />
              </div>
              <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                StarkSeal
              </span>
            </div>
            <div class="hidden md:flex items-center gap-8">
              <a
                class="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Explore
              </a>
              <a
                class="text-sm font-medium hover:text-primary transition-colors"
                href="dashboardpage.html"
              >
                My Bids
              </a>
              <div class="h-4 w-px bg-primary/20"></div>
              <button class="bg-primary hover:bg-primary/90 text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
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
