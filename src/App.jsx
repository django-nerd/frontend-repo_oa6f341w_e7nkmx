import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import CustomUploader from "./components/CustomUploader";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <CustomUploader />
        <CTA />
        <footer id="about" className="py-12 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
              <p>© {new Date().getFullYear()} Khichik — Your style, Your Story, Your Khichik.</p>
              <div className="flex items-center gap-6">
                <a href="#collections" className="hover:text-zinc-900">Collections</a>
                <a href="#custom" className="hover:text-zinc-900">Custom Print</a>
                <a href="#about" className="hover:text-zinc-900">About</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
