import Image from "next/image";

const whatsappLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20DVL3D%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.";

const links = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Produtos",
    href: "/#produtos",
  },
  {
    label: "Natal",
    href: "/#natal",
  },
  {
    label: "Personalize",
    href: "/#como-funciona",
  },
  {
    label: "Categorias",
    href: "/#categorias",
  },
];

export default function Navbar() {
  return (
    <>
      <input
        id="mobile-menu-toggle"
        type="checkbox"
        tabIndex={-1}
        className="fixed -left-[9999px] top-0 h-px w-px opacity-0"
      />

      <header
        className="fixed inset-x-0 top-0 border-b border-zinc-200 bg-white/95 text-black backdrop-blur-md"
        style={{ zIndex: 10000 }}
      >
        <div className="mx-auto flex h-[73px] max-w-[1600px] items-center justify-between px-6 md:px-16">
          <a
            href="/"
            aria-label="Página inicial da DVL3D"
            className="group/logo relative block touch-manipulation"
          >
            <Image
              src="/logo.svg"
              alt="DVL3D"
              width={180}
              height={80}
              priority
              className="h-auto w-24 [animation:logoTurn_5s_ease-in-out_infinite] md:w-28"
            />

            <span
              aria-hidden="true"
              className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-black transition-all duration-500 group-hover/logo:w-3/4"
            />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 lg:flex"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link group relative py-3 text-sm transition-colors duration-300 hover:text-black ${
                  link.label === "Natal"
                    ? "font-medium text-[#7a1f2b]"
                    : "text-zinc-600"
                }`}
              >
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-px">
                  {link.label}
                </span>

                <span
                  aria-hidden="true"
                  className={`nav-link-line absolute bottom-[5px] left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                    link.label === "Natal"
                      ? "bg-[#7a1f2b]"
                      : "bg-black"
                  }`}
                />

                <span
                  aria-hidden="true"
                  className="nav-link-star absolute -right-2 bottom-[1px] text-[7px] opacity-0 transition-all duration-500 group-hover:rotate-90 group-hover:opacity-100"
                >
                  ✦
                </span>
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/order relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.025] active:scale-[0.98]"
            >
              <span className="order-shine pointer-events-none absolute inset-y-0 -left-14 w-10 -skew-x-12 bg-white/15" />

              <span className="relative z-10">Fazer pedido</span>

              <span
                aria-hidden="true"
                className="relative z-10 inline-block transition-transform duration-300 group-hover/order:translate-x-1 group-hover/order:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </nav>

          <label
            htmlFor="mobile-menu-toggle"
            role="button"
            aria-label="Abrir ou fechar menu"
            className="relative flex h-11 w-11 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full border border-zinc-300 bg-white transition-colors duration-300 hover:border-black lg:hidden"
          >
            <span className="sr-only">Abrir ou fechar menu</span>

            <span className="relative block h-4 w-5">
              <span className="menu-line-1 absolute left-0 top-0 h-px w-5 bg-black transition-all duration-300" />

              <span className="menu-line-2 absolute left-0 top-[7px] h-px w-5 bg-black transition-all duration-300" />

              <span className="menu-line-3 absolute left-0 top-[14px] h-px w-5 bg-black transition-all duration-300" />
            </span>
          </label>
        </div>
      </header>

      <div aria-hidden="true" className="h-[73px]" />

      <div
        id="mobile-navigation"
        className="fixed inset-x-0 bottom-0 top-[73px] overflow-y-auto bg-black text-white lg:hidden"
      >
        <div className="mx-auto flex min-h-full max-w-[1600px] flex-col justify-between px-6 py-10">
          <nav
            aria-label="Navegação para celular"
            className="border-t border-white/15"
          >
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link group flex touch-manipulation items-center justify-between border-b border-white/15 py-6"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`text-4xl font-medium tracking-[-0.04em] transition-transform duration-300 group-active:translate-x-2 ${
                      link.label === "Natal"
                        ? "text-[#c98c92]"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </div>

                <span className="text-xl text-zinc-500 transition-transform duration-300 group-active:translate-x-2">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full touch-manipulation items-center justify-between rounded-full bg-white px-7 py-5 text-sm font-medium text-black transition-transform duration-300 active:scale-[0.98]"
            >
              Fazer um pedido
              <span aria-hidden="true">↗</span>
            </a>

            <div className="mt-10 flex items-end justify-between border-t border-white/15 pt-6">
              <a
                href="https://www.instagram.com/dvl3d_/"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-manipulation text-sm text-zinc-300"
              >
                @dvl3d_
              </a>

              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                DVL3D
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #mobile-navigation {
          display: none;
          z-index: 9999;
        }

        #mobile-menu-toggle:checked ~ #mobile-navigation {
          display: block;
          animation: mobileMenuEnter 420ms
            cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        #mobile-menu-toggle:checked ~ header .menu-line-1 {
          top: 7px;
          transform: rotate(45deg);
        }

        #mobile-menu-toggle:checked ~ header .menu-line-2 {
          opacity: 0;
          transform: scaleX(0);
        }

        #mobile-menu-toggle:checked ~ header .menu-line-3 {
          top: 7px;
          transform: rotate(-45deg);
        }

        .nav-link-line {
          transition-timing-function:
            cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link-star {
          transform-origin: center;
        }

        .group\\/order:hover .order-shine {
          animation: orderShine 800ms
            cubic-bezier(0.16, 1, 0.3, 1);
        }

        #mobile-menu-toggle:checked
          ~ #mobile-navigation
          .mobile-nav-link {
          opacity: 0;
          transform: translateY(18px);
          animation: mobileLinkEnter 500ms
            cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        #mobile-menu-toggle:checked
          ~ #mobile-navigation
          .mobile-nav-link:nth-child(1) {
          animation-delay: 70ms;
        }

        #mobile-menu-toggle:checked
          ~ #mobile-navigation
          .mobile-nav-link:nth-child(2) {
          animation-delay: 120ms;
        }

        #mobile-menu-toggle:checked
          ~ #mobile-navigation
          .mobile-nav-link:nth-child(3) {
          animation-delay: 170ms;
        }

        #mobile-menu-toggle:checked
          ~ #mobile-navigation
          .mobile-nav-link:nth-child(4) {
          animation-delay: 220ms;
        }

        #mobile-menu-toggle:checked
          ~ #mobile-navigation
          .mobile-nav-link:nth-child(5) {
          animation-delay: 270ms;
        }

        @keyframes orderShine {
          from {
            left: -56px;
          }

          to {
            left: calc(100% + 56px);
          }
        }

        @keyframes mobileMenuEnter {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes mobileLinkEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1024px) {
          #mobile-navigation {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link *,
          .group\\/order *,
          .mobile-nav-link,
          .mobile-nav-link *,
          #mobile-navigation {
            animation: none !important;
            transition: none !important;
          }

          #mobile-menu-toggle:checked
            ~ #mobile-navigation
            .mobile-nav-link {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}