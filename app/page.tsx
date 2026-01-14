import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
// import About from "@/components/About"; // Removed as requested
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-kadokey-pink/30 selection:text-kadokey-navy">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
