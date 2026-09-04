import Image from "next/image";

import { products, type Product } from "@/data/products";

const whatsappNumber = "5527992634978";

const productSections = [
  {
    id: "religiosa",
    label: "Linha Religiosa",
    title: "Peças para espaços de fé e significado.",
    description:
      "Objetos criados para decorar, presentear e preservar momentos importantes.",
    matches: (product: Product) =>
      product.category.toLowerCase().includes("religiosa"),
  },
  {
    id: "decoracao",
    label: "Decoração — Coleção MELT",
    title: "Objetos que transformam o ambiente.",
    description:
      "Peças esculturais e autorais criadas para levar presença, movimento e personalidade aos espaços.",
    matches: (product: Product) =>
      product.category.toLowerCase().includes("decoração"),
  },
  {
    id: "organizacao",
    label: "Organização",
    title: "Função e estética para a rotina.",
    description:
      "Objetos desenvolvidos para manter itens essenciais organizados sem abrir mão do design.",
    matches: (product: Product) =>
      product.category.toLowerCase().includes("organização"),
  },
  {
    id: "pet",
    label: "Linha Pet",
    title: "Design pensado para animais e tutores.",
    description:
      "Objetos funcionais e personalizados para fazer parte da rotina dos pets e de seus tutores.",
    matches: (product: Product) =>
      product.category.toLowerCase().includes("pet"),
  },
];

function createWhatsAppLink(productName: string) {
  const message = `Olá! Conheci a DVL3D pelo site e gostaria de saber mais sobre o ${productName}.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

function getCategoryLabel(category: string) {
  if (category.toLowerCase().includes("religiosa")) {
    return "DVL3D Religiosa";
  }

  if (category.toLowerCase().includes("decoração")) {
    return "DVL3D Melt";
  }

  if (category.toLowerCase().includes("organização")) {
    return "DVL3D Organização";
  }

  if (category.toLowerCase().includes("pet")) {
    return "DVL3D Pet";
  }

  return category;
}

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const productUrl = `/produtos/${product.slug}`;
  const categoryLabel = getCategoryLabel(product.category);

  return (
    <article className="grid overflow-hidden border-b border-zinc-200 lg:grid-cols-2">
      <a
        href={productUrl}
        aria-label={`Ver detalhes de ${product.name}`}
        className={`group/image relative isolate block min-h-[480px] cursor-pointer touch-manipulation overflow-hidden bg-zinc-100 md:min-h-[620px] ${
          index % 2 !== 0 ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`pointer-events-none object-cover ${product.imagePosition} transition-transform duration-[1200ms] group-hover/image:scale-[1.025] group-active/image:scale-[1.015]`}
        />

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="pointer-events-none absolute left-6 top-6 z-20 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-md md:left-8 md:top-8">
          Sob encomenda
        </div>

        <div className="pointer-events-none absolute bottom-7 left-7 z-20 md:bottom-9 md:left-9">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/65">
            {categoryLabel}
          </p>

          <p className="mt-2 text-xs text-white/90">{product.code}</p>
        </div>

        <div className="pointer-events-none absolute bottom-7 right-7 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg text-black shadow-lg transition-transform duration-300 group-hover/image:scale-110 group-active/image:scale-95 md:bottom-9 md:right-9">
          →
        </div>
      </a>

      <div
        className={`flex flex-col justify-between px-1 py-14 md:px-12 md:py-20 lg:px-16 ${
          index % 2 !== 0 ? "lg:order-1" : ""
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              {categoryLabel}
            </p>

            <span className="text-xs text-zinc-400">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-10 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            {product.name}
          </h3>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600">
            {product.shortDescription}
          </p>

          <div className="mt-10 grid gap-8 border-y border-zinc-200 py-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
                O que acompanha
              </p>

              <ul className="space-y-3 text-sm text-zinc-700">
                {product.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[2px] text-xs">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
                Personalização
              </p>

              <p className="text-sm leading-7 text-zinc-700">
                {product.colors}
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-500">
                Prazo e disponibilidade informados durante o atendimento.
              </p>
            </div>
          </div>

          {product.note && (
            <div className="mt-7 border-l border-zinc-300 pl-5">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                Observação
              </p>

              <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                {product.note}
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={productUrl}
            className="inline-flex touch-manipulation items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-800 active:scale-[0.98]"
          >
            Ver detalhes
            <span aria-hidden="true">→</span>
          </a>

          <a
            href={createWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex touch-manipulation items-center justify-center gap-3 rounded-full border border-zinc-300 px-7 py-4 text-sm font-medium transition-all duration-300 hover:border-black active:scale-[0.98]"
          >
            Pedir pelo WhatsApp
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section
      id="produtos"
      className="bg-white px-6 py-24 text-black md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-24 grid gap-10 border-b border-zinc-200 pb-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Produtos DVL3D
            </p>

            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Objetos para decorar, organizar e transformar espaços.
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-lg text-base leading-8 text-zinc-500">
              Peças produzidas sob encomenda, pensadas para unir significado,
              função e personalidade em diferentes ambientes.
            </p>
          </div>
        </div>

        <div className="space-y-32">
          {productSections.map((section) => {
            const sectionProducts = products.filter(section.matches);
            const isEmpty = sectionProducts.length === 0;

            return (
              <div
                id={section.id}
                key={section.id}
                className="scroll-mt-24"
              >
                <div className="mb-12 grid gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-2">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-zinc-400">
                      {section.label}
                    </p>

                    <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="flex items-end lg:justify-end">
                    <p className="max-w-lg text-base leading-8 text-zinc-500">
                      {section.description}
                    </p>
                  </div>
                </div>

                {isEmpty ? (
                  <div className="border border-zinc-200 bg-zinc-50 px-7 py-16 text-center md:px-12">
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                      Em desenvolvimento
                    </p>

                    <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">
                      Novos produtos em breve.
                    </h3>

                    <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-500">
                      Esta linha já está preparada para receber os próximos
                      lançamentos da DVL3D.
                    </p>
                  </div>
                ) : (
                  <div>
                    {sectionProducts.map((product, index) => (
                      <ProductCard
                        key={product.slug}
                        product={product}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}