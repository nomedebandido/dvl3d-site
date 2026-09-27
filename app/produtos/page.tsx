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
  type Product,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const natalRecommendationSlugs = [
  "arvore-personalizada-com-nome",
  "enfeite-natal-personalizado",
  "luminaria-arvore-presente",
  "arvore-de-natal-decorativa",
  "presepio-natalino",
  "porta-guardanapos-natalinos",
];

const normalRecommendationSlugs = [
  "kit-nossa-senhora",
  "kit-sagrada-familia",
  "prateleira-melt",
  "vaso-melt",
  "bandeja-essencial",
  "comedouro-bebedouro-portatil",
];

const natalHighlights = new Set([
  "arvore-personalizada-com-nome",
  "enfeite-natal-personalizado",
  "luminaria-arvore-presente",
  "arvore-de-natal-decorativa",
]);

const snowflakes = Array.from({ length: 140 }, (_, index) => ({
  left: `${(index * 4.37) % 100}%`,
  delay: `${-(index % 18)}s`,
  duration: `${7 + (index % 7)}s`,
  size: `${3 + (index % 6)}px`,
  opacity: 0.55 + (index % 5) * 0.1,
}));

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

function getRecommendedProducts(
  product: Product,
  isNatal: boolean,
): Product[] {
  const preferredSlugs = isNatal
    ? natalRecommendationSlugs
    : normalRecommendationSlugs;

  const preferredProducts: Product[] = preferredSlugs.flatMap(
    (slug) => {
      const item = products.find(
        (candidate) => candidate.slug === slug,
      );

      if (!item || item.slug === product.slug) {
        return [];
      }

      return [item];
    },
  );

  const fallbackProducts: Product[] = products.filter((item) => {
    if (item.slug === product.slug) {
      return false;
    }

    const itemIsNatal = item.category
      .toLowerCase()
      .includes("natal");

    return isNatal ? itemIsNatal : !itemIsNatal;
  });

  return [...preferredProducts, ...fallbackProducts]
    .filter(
      (item, index, array) =>
        array.findIndex(
          (candidate) => candidate.slug === item.slug,
        ) === index,
    )
    .slice(0, 3);
}

function getIdealFor(product: Product) {
  const value =
    `${product.name} ${product.category}`.toLowerCase();

  const tags: string[] = [];

  if (
    value.includes("personaliz") ||
    value.includes("nome")
  ) {
    tags.push("Presentear");
    tags.push("Personalizar");
  }

  if (
    value.includes("guardanapo") ||
    value.includes("mesa")
  ) {
    tags.push("Mesa posta");
  }

  if (
    value.includes("lumin") ||
    value.includes("árvore") ||
    value.includes("arvore") ||
    value.includes("decor")
  ) {
    tags.push("Decoração");
  }

  if (
    value.includes("presépio") ||
    value.includes("presepio") ||
    value.includes("religiosa")
  ) {
    tags.push("Fé e significado");
  }

  if (
    value.includes("chaveiro") ||
    value.includes("enfeite")
  ) {
    tags.push("Lembrancinha");
  }

  if (tags.length === 0) {
    tags.push("Presentear");
    tags.push("Decoração");
  }

  return [...new Set(tags)].slice(0, 3);
}

function getHighlightLabel(product: Product) {
  if (product.slug === "arvore-personalizada-com-nome") {
    return "Personalizável";
  }

  if (product.slug === "enfeite-natal-personalizado") {
    return "Ótimo para presentear";
  }

  if (product.slug === "luminaria-arvore-presente") {
    return "Destaque de Natal";
  }

  if (product.slug === "arvore-de-natal-decorativa") {
    return "Destaque decoração";
  }

  return "Natal DVL3D";
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isNatal = product.category
    .toLowerCase()
    .includes("natal");

  const idealFor = isNatal
    ? getIdealFor(product)
    : [];

  const whatsappMessage = encodeURIComponent(
    `Olá! Conheci a DVL3D pelo site e gostaria de saber mais sobre o ${product.name}.`,
  );

  const whatsappLink =
    `https://wa.me/5527992634978?text=${whatsappMessage}`;

  const otherProducts = getRecommendedProducts(
    product,
    isNatal,
  );

  return (
    <main
      className={`relative min-h-screen overflow-x-clip ${
        isNatal
          ? "bg-[#5b0f1a] text-white"
          : "bg-white text-black"
      }`}
    >
      <Navbar />

      {isNatal && (
        <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden">
          {snowflakes.map((flake, index) => (
            <span
              key={index}
              className="product-snow"
              style={{
                left: flake.left,
                width: flake.size,
                height: flake.size,
                opacity: flake.opacity,
                animationDelay: flake.delay,
                animationDuration: flake.duration,
              }}
            />
          ))}
        </div>
      )}

      <section className="relative z-10 grid lg:grid-cols-2">
        <ProductGallery
          images={product.images}
          productName={product.name}
          imagePosition={product.imagePosition}
        />

        <div
          className={`flex min-h-[calc(100svh-73px)] flex-col justify-between px-6 py-14 md:px-16 md:py-20 ${
            isNatal
              ? "bg-[#5b0f1a]"
              : "bg-white"
          }`}
        >
          <div>
            <a
              href={isNatal ? "/#natal" : "/#produtos"}
              className={`inline-flex touch-manipulation items-center gap-3 text-xs uppercase tracking-[0.3em] transition-colors ${
                isNatal
                  ? "text-white/45 hover:text-white"
                  : "text-zinc-400 hover:text-black"
              }`}
            >
              <span aria-hidden="true">←</span>

              {isNatal
                ? "Voltar para o Natal"
                : "Voltar para os produtos"}
            </a>

            <div
              className={`mt-16 flex items-center justify-between gap-6 border-b pb-6 ${
                isNatal
                  ? "border-white/15"
                  : "border-zinc-200"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.3em] ${
                  isNatal
                    ? "text-white/45"
                    : "text-zinc-400"
                }`}
              >
                {product.category}
              </p>

              <p
                className={`shrink-0 text-xs tracking-[0.25em] ${
                  isNatal
                    ? "text-white/45"
                    : "text-zinc-400"
                }`}
              >
                {product.code}
              </p>
            </div>

            <h1 className="mt-9 max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
              {product.name}
            </h1>

            <p
              className={`mt-8 max-w-xl text-lg leading-9 ${
                isNatal
                  ? "text-white/70"
                  : "text-zinc-600"
              }`}
            >
              {product.description}
            </p>

            {isNatal && idealFor.length > 0 && (
              <div className="mt-9">
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Ideal para
                </p>

                <div className="flex flex-wrap gap-2">
                  {idealFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
              className={`mt-12 grid gap-10 border-y py-10 sm:grid-cols-2 ${
                isNatal
                  ? "border-white/15"
                  : "border-zinc-200"
              }`}
            >
              <div>
                <p
                  className={`mb-5 text-xs uppercase tracking-[0.3em] ${
                    isNatal
                      ? "text-white/40"
                      : "text-zinc-400"
                  }`}
                >
                  O que acompanha
                </p>

                <ul
                  className={`space-y-4 text-sm ${
                    isNatal
                      ? "text-white/75"
                      : "text-zinc-700"
                  }`}
                >
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[2px] text-xs">
                        ✦
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className={`mb-5 text-xs uppercase tracking-[0.3em] ${
                    isNatal
                      ? "text-white/40"
                      : "text-zinc-400"
                  }`}
                >
                  Personalização
                </p>

                <p
                  className={`text-sm leading-7 ${
                    isNatal
                      ? "text-white/75"
                      : "text-zinc-700"
                  }`}
                >
                  {product.colors}
                </p>
              </div>
            </div>

            {product.note && (
              <div
                className={`mt-7 border-l pl-5 ${
                  isNatal
                    ? "border-white/25"
                    : "border-zinc-300"
                }`}
              >
                <p
                  className={`mb-3 text-[10px] uppercase tracking-[0.3em] ${
                    isNatal
                      ? "text-white/40"
                      : "text-zinc-400"
                  }`}
                >
                  Observação importante
                </p>

                <p
                  className={`max-w-2xl text-sm leading-7 ${
                    isNatal
                      ? "text-white/60"
                      : "text-zinc-500"
                  }`}
                >
                  {product.note}
                </p>
              </div>
            )}

            <div className="mt-10 grid gap-6 text-sm sm:grid-cols-3">
              <div
                className={`border-l pl-4 ${
                  isNatal
                    ? "border-white/25"
                    : "border-zinc-300"
                }`}
              >
                <p
                  className={
                    isNatal
                      ? "text-white/40"
                      : "text-zinc-400"
                  }
                >
                  Produção
                </p>

                <p className="mt-2">
                  Sob encomenda
                </p>
              </div>

              <div
                className={`border-l pl-4 ${
                  isNatal
                    ? "border-white/25"
                    : "border-zinc-300"
                }`}
              >
                <p
                  className={
                    isNatal
                      ? "text-white/40"
                      : "text-zinc-400"
                  }
                >
                  Prazo
                </p>

                <p className="mt-2">
                  Informado no atendimento
                </p>
              </div>

              <div
                className={`border-l pl-4 ${
                  isNatal
                    ? "border-white/25"
                    : "border-zinc-300"
                }`}
              >
                <p
                  className={
                    isNatal
                      ? "text-white/40"
                      : "text-zinc-400"
                  }
                >
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
              className="flex w-full touch-manipulation items-center justify-between rounded-full bg-black px-8 py-5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:bg-zinc-900 active:scale-[0.99]"
            >
              Solicitar pelo WhatsApp

              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <p
              className={`mt-4 text-center text-xs ${
                isNatal
                  ? "text-white/35"
                  : "text-zinc-400"
              }`}
            >
              Atendimento direto com a DVL3D
            </p>

            <div
              className={`mt-8 grid grid-cols-2 gap-px overflow-hidden border sm:grid-cols-4 ${
                isNatal
                  ? "border-white/15 bg-white/15"
                  : "border-zinc-200 bg-zinc-200"
              }`}
            >
              {[
                "Produção própria",
                "Sob encomenda",
                "Personalizável",
                "Atendimento direto",
              ].map((item) => (
                <div
                  key={item}
                  className={`px-3 py-4 text-center text-[10px] uppercase leading-5 tracking-[0.18em] ${
                    isNatal
                      ? "bg-[#5b0f1a] text-white/55"
                      : "bg-white text-zinc-500"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {otherProducts.length > 0 && (
        <section
          className={`relative z-10 border-t px-6 py-24 md:px-16 md:py-32 ${
            isNatal
              ? "border-white/15 bg-[#5b0f1a] text-white"
              : "border-zinc-200 bg-zinc-100 text-black"
          }`}
        >
          <div className="mx-auto max-w-[1600px]">
            <p
              className={`mb-5 text-xs uppercase tracking-[0.4em] ${
                isNatal
                  ? "text-white/40"
                  : "text-zinc-500"
              }`}
            >
              {isNatal
                ? "Complete seu Natal"
                : "Continue conhecendo"}
            </p>

            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              {isNatal
                ? "Outras peças para deixar o Natal ainda mais especial."
                : "Outros objetos da DVL3D."}
            </h2>

            {isNatal && (
              <p className="mb-12 mt-6 max-w-2xl text-base leading-8 text-white/55">
                Uma seleção de peças para presentear,
                personalizar e compor a decoração.
              </p>
            )}

            {!isNatal && <div className="mb-12" />}

            <div
              className={`grid gap-px lg:grid-cols-3 ${
                isNatal
                  ? "bg-white/15"
                  : "bg-zinc-200"
              }`}
            >
              {otherProducts.map((item) => {
                const highlighted =
                  isNatal &&
                  natalHighlights.has(item.slug);

                return (
                  <a
                    key={item.slug}
                    href={`/produtos/${item.slug}`}
                    className={`group block touch-manipulation ${
                      isNatal
                        ? "bg-[#5b0f1a]"
                        : "bg-white"
                    }`}
                  >
                    <div
                      className={`relative min-h-[420px] overflow-hidden ${
                        isNatal
                          ? "bg-[#5b0f1a]"
                          : "bg-zinc-200"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className={`pointer-events-none object-cover ${item.imagePosition} transition-transform duration-700 group-hover:scale-[1.03]`}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                      {isNatal && (
                        <div className="pointer-events-none absolute left-6 top-6">
                          <span
                            className={`rounded-full px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-white backdrop-blur-md ${
                              highlighted
                                ? "bg-black"
                                : "border border-white/25 bg-black/25"
                            }`}
                          >
                            {highlighted
                              ? getHighlightLabel(item)
                              : "Natal DVL3D"}
                          </span>
                        </div>
                      )}

                      <p className="pointer-events-none absolute bottom-6 left-6 text-xs text-white/90">
                        {item.code}
                      </p>
                    </div>

                    <div className="p-7 md:p-9">
                      <p
                        className={`text-[10px] uppercase tracking-[0.3em] ${
                          isNatal
                            ? "text-white/40"
                            : "text-zinc-400"
                        }`}
                      >
                        {item.category}
                      </p>

                      <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">
                        {item.name}
                      </h3>

                      <p
                        className={`mt-5 leading-7 ${
                          isNatal
                            ? "text-white/60"
                            : "text-zinc-500"
                        }`}
                      >
                        {item.shortDescription}
                      </p>

                      <div
                        className={`mt-10 flex items-center justify-between border-t pt-6 text-sm ${
                          isNatal
                            ? "border-white/15"
                            : "border-zinc-200"
                        }`}
                      >
                        <span>
                          Ver detalhes
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg text-white transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <div className="relative z-10">
        <Footer />
        <FloatingWhatsApp />
      </div>

      {isNatal && (
        <style>{`
          .product-snow {
            position: absolute;
            top: -35px;
            display: block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.98);
            box-shadow:
              0 0 6px rgba(255, 255, 255, 0.45),
              0 0 12px rgba(255, 255, 255, 0.18);
            animation-name: productSnowfall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            will-change: transform;
          }

          @keyframes productSnowfall {
            0% {
              transform: translate3d(0, -40px, 0);
            }

            25% {
              transform: translate3d(-12px, 27vh, 0);
            }

            50% {
              transform: translate3d(14px, 55vh, 0);
            }

            75% {
              transform: translate3d(-8px, 82vh, 0);
            }

            100% {
              transform: translate3d(18px, 110vh, 0);
            }
          }

          @media (max-width: 767px) {
            .product-snow {
              box-shadow:
                0 0 5px rgba(255, 255, 255, 0.4),
                0 0 10px rgba(255, 255, 255, 0.15);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .product-snow {
              display: none;
            }
          }
        `}</style>
      )}
    </main>
  );
}