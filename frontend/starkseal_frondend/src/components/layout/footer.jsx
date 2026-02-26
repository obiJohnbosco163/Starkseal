export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer class="bg-[#081109] py-20 border-t border-primary/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div class="col-span-2 md:col-span-1 space-y-6">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-2xl">
                  shield_lock
                </span>
                <span class="text-xl font-bold tracking-tight text-white uppercase">
                  StarkSeal
                </span>
              </div>
              <p class="text-sm text-slate-500 leading-relaxed">
                The gold standard for secure, private auctions on Ethereum L2.
              </p>
            </div>
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-white uppercase tracking-widest">
                Platform
              </h4>
              <ul class="space-y-2 text-sm text-slate-500">
                <li>
                  <a class="hover:text-primary transition-colors" href="#">
                    Explore
                  </a>
                </li>
                <li>
                  <a class="hover:text-primary transition-colors" href="#">
                    How it Works
                  </a>
                </li>
                <li>
                  <a class="hover:text-primary transition-colors" href="#">
                    Security Audit
                  </a>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-white uppercase tracking-widest">
                Community
              </h4>
              <ul class="space-y-2 text-sm text-slate-500">
                <li>
                  <a class="hover:text-primary transition-colors" href="#">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a class="hover:text-primary transition-colors" href="#">
                    Discord
                  </a>
                </li>
                <li>
                  <a class="hover:text-primary transition-colors" href="#">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-white uppercase tracking-widest">
                Newsletter
              </h4>
              <div class="flex gap-2">
                <input
                  class="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:border-primary outline-none transition-all"
                  placeholder="Email address"
                  type="email"
                />
                <button class="bg-primary text-background-dark p-2 rounded-lg">
                  <span class="material-symbols-outlined">mail</span>
                </button>
              </div>
            </div>
          </div>
          <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-xs text-slate-600">
              © 2024 StarkSeal Protocol. All rights reserved.
            </p>
            <div class="flex gap-6 text-xs text-slate-600">
              <a class="hover:text-slate-400" href="#">
                Terms of Service
              </a>
              <a class="hover:text-slate-400" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
