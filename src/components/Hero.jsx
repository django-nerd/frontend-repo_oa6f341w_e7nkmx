import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block rounded-full bg-black text-white px-3 py-1 text-xs font-semibold tracking-wide">
            Your style, Your Story, Your Khichik
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
            Anime-inspired tees for the Gen Z drip
          </h1>
          <p className="text-lg text-zinc-600 max-w-prose">
            From the Grand Line to the Demon Corps — rep your favorite worlds with premium cotton fits. Hand-illustrated drops inspired by One Piece, Dragon Ball Z, Demon Slayer, and more.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-white font-semibold shadow-lg hover:opacity-95 active:scale-95 transition">
              Explore Collections
            </a>
            <a href="#custom" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-zinc-800 font-semibold hover:bg-zinc-50 active:scale-95 transition">
              Upload Your Design
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-zinc-600">
            <div>
              <span className="font-bold text-zinc-900">Premium 240 GSM</span> • Soft feel
            </div>
            <div>
              <span className="font-bold text-zinc-900">Eco inks</span> • Long-lasting print
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-fuchsia-100 via-white to-indigo-100 p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="rounded-2xl bg-white shadow-md grid place-items-center p-4">
                <img src="https://images.unsplash.com/photo-1762089423685-60f5cef02cda?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI0OTMxNjZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="One Piece Tee" className="rounded-lg object-cover h-48 w-full" />
                <p className="mt-3 text-sm font-semibold">One Piece Drop</p>
              </div>
              <div className="rounded-2xl bg-white shadow-md grid place-items-center p-4">
                <img src="https://images.unsplash.com/photo-1626759292870-5813c8c647c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEQlolMjBUZWV8ZW58MHwwfHx8MTc2MjQ5MzE2N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="DBZ Tee" className="rounded-lg object-cover h-48 w-full" />
                <p className="mt-3 text-sm font-semibold">DBZ Vintage</p>
              </div>
              <div className="rounded-2xl bg-white shadow-md grid place-items-center p-4">
                <img src="https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop" alt="Demon Slayer Tee" className="rounded-lg object-cover h-48 w-full" />
                <p className="mt-3 text-sm font-semibold">Demon Corps</p>
              </div>
              <div className="rounded-2xl bg-white shadow-md grid place-items-center p-4">
                <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1200&auto=format&fit=crop" alt="Rom-com Tee" className="rounded-lg object-cover h-48 w-full" />
                <p className="mt-3 text-sm font-semibold">Cute Rom-Com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
