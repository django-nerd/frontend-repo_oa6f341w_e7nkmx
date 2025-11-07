import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-black text-white">
          <div className="absolute inset-0">
            <div className="absolute -top-10 -left-10 h-60 w-60 rounded-full bg-fuchsia-500/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-indigo-500/40 blur-3xl" />
          </div>
          <div className="relative p-10 sm:p-14 lg:p-16 grid md:grid-cols-[1.2fr,0.8fr] gap-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Join the Khichik Crew</h3>
              <p className="mt-3 text-zinc-300 max-w-prose">
                Be first to know about new drops, collabs, and exclusive early access.
              </p>
              <form className="mt-6 flex gap-3">
                <input type="email" required placeholder="your@email"
                  className="flex-1 rounded-full px-5 py-3 bg-white/10 placeholder:text-zinc-400 focus:bg-white/20 outline-none" />
                <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold">
                  <Sparkles className="h-4 w-4" /> Sign up
                </button>
              </form>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <ul className="space-y-3 text-sm text-zinc-300">
                <li>• Free returns within 15 days</li>
                <li>• COD available in select regions</li>
                <li>• Student discounts</li>
                <li>• Worldwide shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
