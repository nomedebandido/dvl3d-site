import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import ProductGallery from "@/components/ProductGallery";
import {
  getProductBySlug,
  products,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: `${product.name} | DVL3D`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Conheci a DVL3D pelo site e gostaria de saber mais sobre o ${product.name}.`,
  );

  const whatsappLink =
    `https://wa.me/5527992634978?text=${whatsappMessage}`;

  const otherProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-black">
      <Navbar />

      <section className="grid lg:grid-cols-2">
        <ProductGallery
          images={product.images}
          productName={product.name}
          imagePosition={product.imagePosition}
        />

        <div className="flex min-h-[calc(100svh-73px)] flex-col justify-between px-6 py-14 md:px-16 md:py-20">
          <div>
            <a
              href="/#produtos"
              className="inline-flex touch-manipulation items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-black"
            >
              <span aria-hidden="true">←</span>
              Voltar para os produtos
            </a>

            <div className="mt-16 flex items-center justify-between gap-6 border-b border-zinc-200 pb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                {product.category}
              </p>

              <p className="shrink-0 text-xs tracking-[0.25em] text-zinc-400">
                {product.code}
              </p>
            </div>

            <h1 className="mt-9 max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
              {product.name}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-600">
              {product.description}
            </p>

            <div className="mt-12 grid gap-10 border-y border-zinc-200 py-10 sm:grid-cols-2">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-400">
                  O que acompanha
                </p>

                <ul className="space-y-4 text-sm text-zinc-700">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[2px] text-xs">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Personalização
                </p>

                <p className="text-sm leading-7 text-zinc-700">
                  {product.colors}
                </p>
              </div>
            </div>

            {product.note && (
              <div className="mt-7 border-l border-zinc-300 pl-5">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                  Observação importante
                </p>

                <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                  {product.note}
                </p>
              </div>
            )}

            <div className="mt-10 grid gap-6 text-sm sm:grid-cols-3">
              <div className="border-l border-zinc-300 pl-4">
                <p className="text-zinc-400">
                  Produção
                </p>

                <p className="mt-2">
                  Sob encomenda
                </p>
              </div>

              <div className="border-l border-zinc-300 pl-4">
                <p className="text-zinc-400">
                  Prazo
                </p>

                <p className="mt-2">
                  Informado no atendimento
                </p>
              </div>

              <div className="border-l border-zinc-300 pl-4">
                <p className="text-zinc-400">
                  Envio
                </p>

                <p className="mt-2">
                  Calculado pelo endereço
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full touch-manipulation items-center justify-between rounded-full bg-black px-8 py-5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:bg-zinc-800 active:scale-[0.99]"
            >
              Solicitar pelo WhatsApp
              <span aria-hidden="true">↗</span>
            </a>

            <p className="mt-4 text-center text-xs text-zinc-400">
              Atendimento direto com a DVL3D
            </p>
          </div>
        </div>
      </section>

      {otherProducts.length > 0 && (
        <section className="border-t border-zinc-200 bg-zinc-100 px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1600px]">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Continue conhecendo
            </p>

            <h2 className="mb-12 max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Outros objetos da DVL3D.
            </h2>

            <div className="grid gap-px bg-zinc-200 lg:grid-cols-3">
              {otherProducts.map((item) => (
                <a
                  key={item.slug}
                  href={`/produtos/${item.slug}`}
                  className="group block touch-manipulation bg-white"
                >
                  <div className="relative min-h-[420px] overflow-hidden bg-zinc-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className={`pointer-events-none object-cover ${item.imagePosition} transition-transform duration-700 group-hover:scale-[1.03]`}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <p className="pointer-events-none absolute bottom-6 left-6 text-xs text-white/90">
                      {item.code}
                    </p>
                  </div>

                  <div className="p-7 md:p-9">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                      {item.category}
                    </p>

                    <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">
                      {item.name}
                    </h3>

                    <p className="mt-5 leading-7 text-zinc-500">
                      {item.shortDescription}
                    </p>

                    <p className="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6 text-sm">
                      Ver detalhes

                      <span className="text-xl transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}