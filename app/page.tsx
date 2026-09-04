import Categories from "@/components/Categories";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OrderProcess from "@/components/OrderProcess";
import Products from "@/components/Products";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-black">
      <Navbar />

      <Hero />

      <TrustBar />

      <Products />

      <Categories />

      <OrderProcess />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}