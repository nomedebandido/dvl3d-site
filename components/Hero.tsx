import Image from "next/image";

const whatsappLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20DVL3D%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.";

const personalizationLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Tenho%20uma%20ideia%20e%20gostaria%20de%20fazer%20uma%20pe%C3%A7a%20personalizada%20com%20a%20DVL3D.";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white text-black">
      <div className="grid min-h-[calc(100svh-73px)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="order-2 flex flex-col justify-between px-6 py-14 md:px-16 md:py-20 lg:order-1 lg:min-h-full lg:px-20">
          <div>
            <div className="hero-reveal hero-delay-1 flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="hero-line h-px w-10 bg-black" />

                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                  DVL3D
                </p>
              </div>

              <p className="hidden text-[10px] uppercase tracking-[0.35em] text-zinc-400 sm:block">
                Feito sob encomenda / 2026
              </p>
            </div>

            <div className="mt-14">
              <p className="hero-reveal hero-delay-2 mb-5 text-[10px] uppercase tracking-[0.4em] text-zinc-400">
                Produtos • Personalização • Ideias
              </p>

              <h1 className="hero-reveal hero-delay-3 max-w-3xl text-6xl font-medium leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-[6.8vw]">
                Sua ideia.
                <br />
                Do seu jeito.
              </h1>
            </div>

            <div className="hero-reveal hero-delay-4 mt-10 grid gap-8 border-t border-zinc-200 pt-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-base leading-8 text-zinc-600 md:text-lg md:leading-9">
                Produtos DVL3D, personalizações e peças feitas sob encomenda
                para diferentes espaços, rotinas e ideias.
              </p>

              <p className="text-left text-[10px] uppercase leading-6 tracking-[0.3em] text-zinc-400 md:text-right">
                Produção
                <br />
                própria
              </p>
            </div>

            <div className="hero-reveal hero-delay-5 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#produtos"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800 active:scale-[0.98]"
              >
                Explorar produtos

                <span
                  aria-hidden="true"
                  className="hero-arrow-down inline-block"
                >
                  ↓
                </span>
              </a>

              <a
                href={personalizationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 rounded-full border border-zinc-300 px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:border-black active:scale-[0.98]"
              >
                Quero personalizar

                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="hero-reveal hero-delay-6 mt-20 grid grid-cols-1 gap-6 border-t border-zinc-200 pt-7 min-[420px]:grid-cols-3 min-[420px]:gap-0">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                Produtos
              </p>

              <p className="mt-3 text-sm text-zinc-700">
                Criados pela DVL3D
              </p>
            </div>

            <div className="min-[420px]:border-l min-[420px]:border-zinc-200 min-[420px]:pl-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                Personalização
              </p>

              <p className="mt-3 text-sm text-zinc-700">
                Cores e detalhes
              </p>
            </div>

            <div className="min-[420px]:border-l min-[420px]:border-zinc-200 min-[420px]:pl-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                Sua ideia
              </p>

              <p className="mt-3 text-sm text-zinc-700">
                Projetos sob medida
              </p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper order-1 p-3 pb-0 md:p-5 md:pb-0 lg:order-2 lg:p-5">
          <div className="relative min-h-[480px] overflow-hidden bg-zinc-100 sm:min-h-[560px] lg:min-h-full">
            <Image
              src="/images/kit-nossa-senhora.webp"
              alt="Produto produzido pela DVL3D"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="hero-main-image object-cover object-[center_58%]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

            <div className="hero-badges absolute left-5 top-5 flex flex-wrap items-center gap-2 sm:left-6 sm:top-6 md:left-10 md:top-10">
              <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-md">
                Em destaque
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-md">
                DVL_R01
              </span>
            </div>

            <div className="hero-side-label absolute right-5 top-24 text-right text-[10px] uppercase leading-6 tracking-[0.3em] text-white/65 sm:right-6 sm:top-6 md:right-10 md:top-10">
              Produto
              <br />
              DVL3D
            </div>

            <div className="hero-image-footer absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 text-white sm:left-7 sm:right-7 md:bottom-10 md:left-10 md:right-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/65">
                  Produto em destaque
                </p>

                <p className="mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                  Kit Nossa Senhora
                </p>
              </div>

              <a
                href="/produtos/kit-nossa-senhora"
                aria-label="Ver Kit Nossa Senhora"
                className="hero-image-button flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg text-black transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                →
              </a>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 border-l border-t border-white/20" />
          </div>
        </div>
      </div>

      <style>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(28px);
          animation: heroReveal 900ms cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .hero-delay-1 {
          animation-delay: 120ms;
        }

        .hero-delay-2 {
          animation-delay: 220ms;
        }

        .hero-delay-3 {
          animation-delay: 320ms;
        }

        .hero-delay-4 {
          animation-delay: 440ms;
        }

        .hero-delay-5 {
          animation-delay: 560ms;
        }

        .hero-delay-6 {
          animation-delay: 680ms;
        }

        .hero-line {
          transform-origin: left center;
          animation: heroLine 900ms cubic-bezier(0.16, 1, 0.3, 1)
            180ms both;
        }

        .hero-image-wrapper {
          opacity: 0;
          transform: translateX(35px);
          animation: heroImageEnter 1100ms cubic-bezier(0.16, 1, 0.3, 1)
            100ms forwards;
        }

        .hero-main-image {
          transform: scale(1.08);
          animation: heroImageZoom 1800ms cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
          transition: transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-image-wrapper:hover .hero-main-image {
          transform: scale(1.025);
        }

        .hero-badges,
        .hero-side-label {
          opacity: 0;
          transform: translateY(-16px);
          animation: heroTopEnter 800ms cubic-bezier(0.16, 1, 0.3, 1)
            700ms forwards;
        }

        .hero-side-label {
          animation-delay: 820ms;
        }

        .hero-image-footer {
          opacity: 0;
          transform: translateY(24px);
          animation: heroReveal 850ms cubic-bezier(0.16, 1, 0.3, 1)
            800ms forwards;
        }

        .hero-arrow-down {
          animation: heroArrowDown 1800ms ease-in-out infinite;
        }

        .hero-image-button {
          animation: heroButtonPulse 2600ms ease-in-out infinite;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroTopEnter {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImageEnter {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroImageZoom {
          from {
            transform: scale(1.08);
          }

          to {
            transform: scale(1);
          }
        }

        @keyframes heroLine {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes heroArrowDown {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(5px);
          }
        }

        @keyframes heroButtonPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }

          50% {
            box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.12);
          }
        }

        @media (max-width: 767px) {
          .hero-reveal,
          .hero-line,
          .hero-image-wrapper,
          .hero-main-image,
          .hero-badges,
          .hero-side-label,
          .hero-image-footer {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .hero-image-wrapper:hover .hero-main-image {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-line,
          .hero-image-wrapper,
          .hero-main-image,
          .hero-badges,
          .hero-side-label,
          .hero-image-footer,
          .hero-arrow-down,
          .hero-image-button {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}