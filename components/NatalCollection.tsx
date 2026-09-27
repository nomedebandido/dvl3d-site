import Image from "next/image";

import { products } from "@/data/products";

const whatsappNumber = "5527992634978";

const snowflakes = Array.from({ length: 120 }, (_, index) => ({
  left: `${(index * 4.2) % 100}%`,
  delay: `${-(index % 20)}s`,
  duration: `${7 + (index % 6)}s`,
  size: `${3 + (index % 5)}px`,
}));

function createWhatsAppLink(productName: string) {
  const message = `Olá! Conheci a coleção de Natal da DVL3D pelo site e gostaria de saber mais sobre o ${productName}.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function NatalCollection() {
  const natalProducts = products.filter((product) =>
    product.category.toLowerCase().includes("natal"),
  );

  return (
    <section
      id="natal"
      className="relative overflow-hidden bg-[#5b0f1a] px-6 pb-32 pt-24 text-white md:px-16 md:pb-40 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {snowflakes.map((flake, index) => (
          <span
            key={index}
            className="natal-snow"
            style={{
              left: flake.left,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
              width: flake.size,
              height: flake.size,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="mb-20 grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/50">
              Coleção especial
            </p>

            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              O Natal chegou
              <br />
              na DVL3D.
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-lg text-base leading-8 text-white/65">
              Decoração, presentes, peças personalizadas, mesa posta e itens
              criados para deixar dezembro ainda mais especial.
            </p>
          </div>
        </div>

        <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {natalProducts.map((product, index) => (
            <article key={product.slug} className="group">
              <a
                href={`/produtos/${product.slug}`}
                className="block overflow-hidden border border-white/15 bg-transparent"
              >
                <div className="relative aspect-[4/4.4] overflow-hidden bg-[#5b0f1a]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className={`object-cover ${product.imagePosition} transition-transform duration-700 group-hover:scale-[1.035]`}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-white backdrop-blur-md">
                    Natal DVL3D
                  </span>

                  <span className="absolute bottom-5 right-5 text-xs text-white/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="bg-[#5b0f1a] p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                      {product.category}
                    </p>

                    <p className="text-[10px] text-white/40">
                      {product.code}
                    </p>
                  </div>

                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.035em]">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {product.shortDescription}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-medium">
                      Ver produto
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>

              <a
                href={createWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-3 rounded-full bg-black px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:bg-zinc-900"
              >
                Pedir pelo WhatsApp
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-28 flex flex-col gap-8 border-t border-white/15 pt-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              DVL3D
            </p>

            <p className="mt-3 text-xl font-medium">
              Um Natal feito do seu jeito.
            </p>
          </div>

          <a
            href="https://wa.me/5527992634978?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20pedido%20da%20cole%C3%A7%C3%A3o%20de%20Natal%20DVL3D."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900"
          >
            Fazer pedido de Natal
            <span>↗</span>
          </a>
        </div>
      </div>

      <style>{`
        .natal-snow {
          position: absolute;
          top: -30px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.35);
          animation-name: natalSnowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes natalSnowfall {
          0% {
            transform: translate3d(0, -30px, 0);
            opacity: 0;
          }

          8% {
            opacity: 0.95;
          }

          45% {
            transform: translate3d(-18px, 55vh, 0);
          }

          100% {
            transform: translate3d(25px, 120vh, 0);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .natal-snow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}