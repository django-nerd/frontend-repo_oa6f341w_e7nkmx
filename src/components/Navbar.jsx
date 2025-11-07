import { ShoppingBag, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-indigo-500 grid place-items-center text-white shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600">
              Khichik
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            <a href="#collections" className="hover:text-fuchsia-600 transition-colors">Collections</a>
            <a href="#custom" className="hover:text-fuchsia-600 transition-colors">Custom Print</a>
            <a href="#about" className="hover:text-fuchsia-600 transition-colors">About</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-semibold shadow-lg hover:scale-[1.02] active:scale-95 transition">
            <ShoppingBag className="h-4 w-4" />
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
}
