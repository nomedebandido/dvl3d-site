import BrandTransition from "@/components/BrandTransition";
import Categories from "@/components/Categories";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NatalCollection from "@/components/NatalCollection";
import Navbar from "@/components/Navbar";
import OrderProcess from "@/components/OrderProcess";
import Products from "@/components/Products";
import Reveal from "@/components/Reveal";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-black">
      <Navbar />

      <Hero />

      <NatalCollection />

      <BrandTransition />

      <Reveal>
        <TrustBar />
      </Reveal>

      <Reveal>
        <Products />
      </Reveal>

      <Reveal>
        <Categories />
      </Reveal>

      <Reveal>
        <OrderProcess />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>

      <FloatingWhatsApp />
    </main>
  );
}