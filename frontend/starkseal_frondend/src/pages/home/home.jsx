export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header class="relative overflow-hidden pt-16 pb-24 hero-gradient">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Live on StarkNet
              </div>
              <h1 class="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Secure, Private, <br />
                <span class="text-primary">Unstoppable</span> <br />
                Auctions
              </h1>
              <p class="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Leveraging cryptographic Commit-Reveal mechanics on-chain for
                maximum security and absolute fairness. No front-running, no
                early reveals, just pure strategy.
              </p>
              <div class="flex flex-wrap gap-4 pt-4">
                <a href="">
                  <button class="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-3 group">
                    View Live Auctions
                    <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </a>
                <a href="commitpage.html">
                  <button class="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl text-base font-bold transition-all">
                    How it works
                  </button>
                </a>
              </div>
            </div>
            <div class="relative lg:block hidden">
              <div
                class="relative z-10 w-full aspect-square bg-cover bg-center rounded-2xl shadow-2xl border border-primary/20 overflow-hidden"
                data-alt="Abstract 3D digital artwork representing blockchain security"
                style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZbZhWRplPZ-hye1ejqR_arzeV-ok3mti4j64zVDmhJNh6bEo31r3Bex2xz1_2im9s9RVtkQyaMxPWiolV_K79aI1MCPnfO6J1TJodPVrgYLBS0ATx6YikZUxWSz2vMmMOQDJUxKGZK5VNSAXhaFscueBmiUNKERMeGXToN0rHn1L9SwFXLOYsHJREXbYhUDIpj28cjcJvKB7VnA4kfiC8Zvm80M6cNcJwiuva4X7nquSvHoLQ-irDAwhbEOrlhB9gKM-W7lLIDdw')"
              >
                <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl">
                  <div class="flex justify-between items-center">
                    <div>
                      <p class="text-xs text-primary font-bold uppercase tracking-widest mb-1">
                        Featured Genesis
                      </p>
                      <h3 class="text-xl font-bold text-white">
                        StarkSeal Pass #001
                      </h3>
                    </div>
                    <div class="text-right">
                      <p class="text-xs text-slate-400 font-medium">
                        Starting Bid
                      </p>
                      <p class="text-lg font-bold text-white">2.5 ETH</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div class="absolute -top-10 -right-10 size-64 bg-primary/10 blur-[100px] rounded-full"></div>
              <div class="absolute -bottom-10 -left-10 size-64 bg-primary/5 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </header>
      {/* Active Auctions Section  */}

      <section class="py-24 bg-background-light dark:bg-[#0a150b]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-end mb-12">
            <div>
              <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Active Auctions
              </h2>
              <p class="text-slate-600 dark:text-slate-400">
                Discover exclusive digital assets in the commit phase.
              </p>
            </div>
            <div class="flex gap-2">
              <button class="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
                <span class="material-symbols-outlined text-primary">
                  chevron_left
                </span>
              </button>
              <button class="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
                <span class="material-symbols-outlined text-primary">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Auction Card 1 */}

            <div class="group bg-background-light dark:bg-background-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div class="relative aspect-square overflow-hidden">
                <div class="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-background-dark rounded-full text-[10px] font-black tracking-widest uppercase">
                  Commit Phase
                </div>
                <div
                  class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Digital holographic artwork of a Bored Ape type character"
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE-U7pdk1hRrekahs8uxvz0Ust19Izg6ESZfZ7NI5A4JTqgi22UJ7Vgo0atfzKIcXCDTscCUXT4lgOhuOnrogE1h-LYBDMBkI0vkAc7QdiVHXKjuL2V17k13BjgQYf30wzpjT-m3ReEr9Hs62UVhB3CEuvrFKDxgIPXetrcqr19L-K7COcyWPXJL3xtCUt-aCcCey6ObwWCM0uoYwxThm8Cly-XAl1AOJuNJQcJukRQvwwMvesdJn3j68U7OQ6-XMszia5YEAOrYk')"
                ></div>
              </div>
              <div class="p-6 space-y-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      Bored Ape #123
                    </h3>
                    <p class="text-sm text-slate-500">By Yuga Labs</p>
                  </div>
                  <div class="text-right">
                    <span class="material-symbols-outlined text-slate-400 hover:text-red-500 cursor-pointer transition-colors">
                      favorite
                    </span>
                  </div>
                </div>
                <div class="bg-primary/5 rounded-xl p-4 flex justify-between items-center border border-primary/10">
                  <div>
                    <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Ends In
                    </p>
                    <p class="text-sm font-black text-primary">02h 45m 12s</p>
                  </div>
                  <div class="text-right">
                    <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Top Bid
                    </p>
                    <p class="text-sm font-black dark:text-white">Hidden</p>
                  </div>
                </div>
                <a href="commitpage.html">
                  <button class="w-full bg-primary text-background-dark py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-sm">gavel</span>
                    Place Bid
                  </button>
                </a>
              </div>
            </div>
            {/* Auction Card 2 */}

            <div class="group bg-background-light dark:bg-background-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div class="relative aspect-square overflow-hidden">
                <div class="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-background-dark rounded-full text-[10px] font-black tracking-widest uppercase">
                  Commit Phase
                </div>
                <div
                  class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="3D floating Ethereum logo in a dark void"
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIwM5bCWhCsWzZdLZ_NU9-5nh2cDpkLhA-_3LytpZryxu2RTOkE2ZfzX_a1hFdDztElyUXlQhD27ETghcmZwSH2-uH_Dh1X4dpJVJ4NGyGEGjDuijJN1QrD_IzY1DD5M9Fsb3VCMyK-oVFo1Syejl7i9ZSFGT01XmIKTnH8pbz0WiS4J5Y-iZ-pNRqP6Bn4k4T4cCx_SQpvFDU2UoHObauTZWHs9vZ3wsrOke3_CYXDz0YanVOSh-7CNeBd9j6Sc7yERFcmkjPlMk')"
                ></div>
              </div>
              <div class="p-6 space-y-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      Ethereum Domain Name
                    </h3>
                    <p class="text-sm text-slate-500">By ENS Domains</p>
                  </div>
                  <div class="text-right">
                    <span class="material-symbols-outlined text-slate-400 hover:text-red-500 cursor-pointer transition-colors">
                      favorite
                    </span>
                  </div>
                </div>
                <div class="bg-primary/5 rounded-xl p-4 flex justify-between items-center border border-primary/10">
                  <div>
                    <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Ends In
                    </p>
                    <p class="text-sm font-black text-primary">05h 12m 45s</p>
                  </div>
                  <div class="text-right">
                    <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Top Bid
                    </p>
                    <p class="text-sm font-black dark:text-white">Hidden</p>
                  </div>
                </div>
                <a href="commitpage.html">
                  <button class="w-full bg-primary text-background-dark py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-sm">gavel</span>
                    Place Bid
                  </button>
                </a>
              </div>
            </div>
            {/* Auction Card 3 */}

            <div class="group bg-background-light dark:bg-background-dark border border-white/5 rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div class="relative aspect-square overflow-hidden">
                <div class="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-background-dark rounded-full text-[10px] font-black tracking-widest uppercase">
                  Commit Phase
                </div>
                <div
                  class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Modern abstract digital geometry in neon colors"
                  style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN95S9GMZK1H9ml0Ootl9103qAcCwlvsX1V6S34_dsxE-tz4yk6_nvRs4yAJpgPEiXkWGQ5bs3gf9BdkcN8ipOti9Y7gAEjxOxnrJg_pBHn-MYwMNqp_F16hae_Gt7hxpw-8LSf_OlAD7cyEVBZGIWBfOyS245uMWjXC2-QQcQiTIsJSCojGZCDjT2fQF_1GDvo083zj1YY5ZvtrNmeu1CTOw2tf4Zj4urSsTXg3E55_Anoia3QZZaDOSMmZ0V495HNh4bVg_FfIY')"
                ></div>
              </div>
              <div class="p-6 space-y-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      Rare Digital Artifact
                    </h3>
                    <p class="text-sm text-slate-500">By Ordinals</p>
                  </div>
                  <div class="text-right">
                    <span class="material-symbols-outlined text-slate-400 hover:text-red-500 cursor-pointer transition-colors">
                      favorite
                    </span>
                  </div>
                </div>
                <div class="bg-primary/5 rounded-xl p-4 flex justify-between items-center border border-primary/10">
                  <div>
                    <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Ends In
                    </p>
                    <p class="text-sm font-black text-primary">01h 20m 05s</p>
                  </div>
                  <div class="text-right">
                    <p class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Top Bid
                    </p>
                    <p class="text-sm font-black dark:text-white">Hidden</p>
                  </div>
                </div>
                <a href="commitpage.html">
                  <button class="w-full bg-primary text-background-dark py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-sm">gavel</span>
                    Place Bid
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-16 text-center">
            <button class="text-sm font-bold text-primary hover:underline underline-offset-8">
              Explore All Auctions
            </button>
          </div>
        </div>
      </section>
      {/* Security Focus Section */}

      <section class="py-24 border-t border-primary/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-12">
            <div class="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-4">
              <div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined">lock_open</span>
              </div>
              <h3 class="text-xl font-bold">Privacy First</h3>
              <p class="text-slate-500 leading-relaxed">
                Bids are committed in hash form. No one—not even the
                platform—knows your bid until the reveal phase.
              </p>
            </div>
            <div class="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-4">
              <div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined">bolt</span>
              </div>
              <h3 class="text-xl font-bold">StarkNet Speed</h3>
              <p class="text-slate-500 leading-relaxed">
                Built on ZK-Rollup technology for ultra-low fees and
                near-instant finality for every commitment.
              </p>
            </div>
            <div class="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-4">
              <div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span class="material-symbols-outlined">verified_user</span>
              </div>
              <h3 class="text-xl font-bold">Anti-Frontrun</h3>
              <p class="text-slate-500 leading-relaxed">
                Commit-Reveal mechanics make it impossible for bots to see your
                bid and front-run the transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
