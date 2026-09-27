import Image from "next/image";

const personalizationLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20cole%C3%A7%C3%A3o%20de%20Natal%20da%20DVL3D%20e%20gostaria%20de%20personalizar%20uma%20pe%C3%A7a.";

const snowflakes = Array.from({ length: 90 }, (_, index) => ({
  left: `${(index * 4.9) % 100}%`,
  delay: `${-(index % 18)}s`,
  duration: `${7 + (index % 6)}s`,
  size: `${3 + (index % 5)}px`,
}));

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#5b0f1a] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {snowflakes.map((flake, index) => (
          <span
            key={index}
            className="hero-snow"
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

      <div className="relative z-10 grid min-h-[calc(100svh-73px)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="order-2 flex flex-col justify-between px-6 py-14 md:px-16 md:py-20 lg:order-1 lg:px-20">
          <div>
            <div className="hero-reveal hero-delay-1 flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="hero-line h-px w-10 bg-white" />

                <p className="text-xs uppercase tracking-[0.4em] text-white/80">
                  DVL3D
                </p>
              </div>

              <p className="hidden text-[10px] uppercase tracking-[0.35em] text-white/50 sm:block">
                Coleção de Natal / 2026
              </p>
            </div>

            <div className="mt-14">
              <p className="hero-reveal hero-delay-2 mb-5 text-[10px] uppercase tracking-[0.4em] text-white/55">
                Natal DVL3D
              </p>

              <h1 className="hero-reveal hero-delay-3 max-w-3xl text-6xl font-medium leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-[6.8vw]">
                Natal feito
                <br />
                do seu jeito.
              </h1>
            </div>

            <div className="hero-reveal hero-delay-4 mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-base leading-8 text-white/75 md:text-lg md:leading-9">
                Peças para decorar, presentear e personalizar o fim do ano,
                produzidas sob encomenda pela DVL3D.
              </p>

              <p className="text-left text-[10px] uppercase leading-6 tracking-[0.3em] text-white/40 md:text-right">
                Edição
                <br />
                especial
              </p>
            </div>

            <div className="hero-reveal hero-delay-5 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#natal"
                className="inline-flex items-center justify-center gap-4 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900"
              >
                Ver coleção de Natal
                <span className="hero-arrow-down">↓</span>
              </a>

              <a
                href={personalizationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900"
              >
                Quero personalizar
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-reveal hero-delay-6 mt-20 grid gap-6 border-t border-white/15 pt-7 min-[420px]:grid-cols-3 min-[420px]:gap-0">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Coleção
              </p>

              <p className="mt-3 text-sm text-white/80">
                Natal DVL3D
              </p>
            </div>

            <div className="min-[420px]:border-l min-[420px]:border-white/15 min-[420px]:pl-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Personalização
              </p>

              <p className="mt-3 text-sm text-white/80">
                Cores, nomes e detalhes
              </p>
            </div>

            <div className="min-[420px]:border-l min-[420px]:border-white/15 min-[420px]:pl-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Produção
              </p>

              <p className="mt-3 text-sm text-white/80">
                Sob encomenda
              </p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper order-1 p-3 pb-0 md:p-5 md:pb-0 lg:order-2 lg:p-5">
          <div className="relative min-h-[480px] overflow-hidden bg-[#5b0f1a] sm:min-h-[560px] lg:min-h-full">
            <Image
              src="/images/natal/luminaria-arvore-presente.webp"
              alt="Luminária Árvore de Natal DVL3D"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="hero-main-image object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

            <div className="absolute left-5 top-5 flex gap-2 md:left-10 md:top-10">
              <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-md">
                Natal 2026
              </span>

              <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-md">
                DVL_N33
              </span>
            </div>

            <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between text-white md:bottom-10 md:left-10 md:right-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                  Produto em destaque
                </p>

                <p className="mt-3 text-xl font-medium sm:text-2xl">
                  Luminária Árvore de Natal
                </p>
              </div>

              <a
                href="/produtos/luminaria-arvore-presente"
                aria-label="Ver Luminária Árvore de Natal"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg text-white transition-transform duration-300 hover:scale-110"
              >
                →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-snow {
          position: absolute;
          top: -30px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.35);
          animation-name: heroSnowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .hero-reveal {
          opacity: 0;
          transform: translateY(28px);
          animation: heroReveal 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
          transform-origin: left;
          animation: heroLine 900ms ease 180ms both;
        }

        .hero-image-wrapper {
          opacity: 0;
          transform: translateX(35px);
          animation: heroImageEnter 1100ms cubic-bezier(0.16, 1, 0.3, 1)
            100ms forwards;
        }

        .hero-main-image {
          transform: scale(1.06);
          animation: heroImageZoom 1800ms ease forwards;
        }

        .hero-arrow-down {
          animation: heroArrowDown 1800ms ease-in-out infinite;
        }

        @keyframes heroSnowfall {
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

        @keyframes heroReveal {
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes heroImageEnter {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes heroImageZoom {
          to {
            transform: scale(1);
          }
        }

        @keyframes heroArrowDown {
          50% {
            transform: translateY(5px);
          }
        }

        @media (max-width: 767px) {
          .hero-reveal,
          .hero-line,
          .hero-image-wrapper,
          .hero-main-image {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-snow {
            display: none;
          }

          .hero-reveal,
          .hero-line,
          .hero-image-wrapper,
          .hero-main-image,
          .hero-arrow-down {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}