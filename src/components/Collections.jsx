import { motion } from "framer-motion";

const products = [
  {
    title: "Straw Hat Legacy",
    tag: "One Piece",
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1200&auto=format&fit=crop",
    price: 24.99,
  },
  {
    title: "Saiyan Vintage",
    tag: "Dragon Ball Z",
    img: "https://images.unsplash.com/photo-1618354691541-75c2d54c2b35?q=80&w=1200&auto=format&fit=crop",
    price: 24.99,
  },
  {
    title: "Demon Corps Mark",
    tag: "Demon Slayer",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop",
    price: 26.99,
  },
  {
    title: "Pastel Hearts",
    tag: "Rom-Com",
    img: "https://images.unsplash.com/photo-1620799139503-0f4c4f0c0b9e?q=80&w=1200&auto=format&fit=crop",
    price: 21.99,
  },
];

export default function Collections() {
  return (
    <section id="collections" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Featured Collections
            </h2>
            <p className="text-zinc-600 mt-2">Handpicked drops inspired by your favorite anime worlds.</p>
          </div>
          <a href="#" className="text-fuchsia-600 font-semibold hover:underline">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl bg-white shadow hover:shadow-xl transition overflow-hidden border border-zinc-100"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-zinc-500">{p.tag}</div>
                <h3 className="font-semibold text-zinc-900">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">${p.price.toFixed(2)}</span>
                  <button className="px-3 py-1.5 rounded-full bg-black text-white text-xs font-semibold hover:opacity-90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
