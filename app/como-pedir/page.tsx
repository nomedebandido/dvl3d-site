import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderProcess from "@/components/OrderProcess";

export default function HowToOrderPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 py-24 md:px-16 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            Como pedir
          </p>

          <h1 className="mt-8 max-w-6xl text-6xl font-medium leading-[0.92] tracking-[-0.06em] md:text-8xl">
            Do primeiro contato até a peça pronta.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-600">
            Escolha um produto, converse com a DVL3D e receba um orçamento de
            acordo com quantidade, cores e personalização.
          </p>
        </div>
      </section>

      <OrderProcess />
      <FAQ />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}