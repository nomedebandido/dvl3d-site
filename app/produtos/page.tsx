import type { Metadata } from "next";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Produtos | DVL3D",
  description:
    "Conheça os produtos de decoração, organização e artigos religiosos da DVL3D.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="border-b border-zinc-200 px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            Catálogo DVL3D
          </p>

          <h1 className="mt-7 max-w-5xl text-6xl font-medium leading-[0.92] tracking-[-0.06em] md:text-8xl">
            Objetos para diferentes espaços e momentos.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-600">
            Explore os produtos disponíveis e acompanhe os próximos
            lançamentos da DVL3D.
          </p>
        </div>
      </section>

      <Products />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}