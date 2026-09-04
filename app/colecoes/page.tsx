import Categories from "@/components/Categories";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Manifesto from "@/components/Manifesto";
import Navbar from "@/components/Navbar";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="bg-black px-6 py-24 text-white md:px-16 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            Coleções DVL3D
          </p>

          <h1 className="mt-8 max-w-6xl text-6xl font-medium leading-[0.92] tracking-[-0.06em] md:text-8xl">
            Diferentes linhas. Uma mesma forma de criar.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400">
            Produtos organizados por função, ambiente e significado.
          </p>
        </div>
      </section>

      <Categories />
      <Manifesto />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}