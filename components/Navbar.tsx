import Image from "next/image";

const whatsappLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20DVL3D%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.";

const links = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Natal",
    href: "/#natal",
  },
  {
    label: "Produtos",
    href: "/#produtos",
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
        className="fixed inset-x-0 top-0 border-b border-white/10 bg-[#5b0f1a] text-white"
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
              className="h-auto w-24 brightness-0 invert [animation:logoTurn_5s_ease-in-out_infinite] md:w-28"
            />

            <span
              aria-hidden="true"
              className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-500 group-hover/logo:w-3/4"
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
                className="nav-link group relative py-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-px">
                  {link.label}
                </span>

                <span
                  aria-hidden="true"
                  className="absolute bottom-[5px] left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"
                />
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.025] hover:bg-zinc-900 active:scale-[0.98]"
            >
              Fazer pedido
              <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <label
            htmlFor="mobile-menu-toggle"
            role="button"
            aria-label="Abrir ou fechar menu"
            className="relative flex h-11 w-11 cursor-pointer touch-manipulation select-none items-center justify-center rounded-full border border-white/25 bg-transparent transition-colors duration-300 hover:border-white/50 lg:hidden"
          >
            <span className="sr-only">Abrir ou fechar menu</span>

            <span className="relative block h-4 w-5">
              <span className="menu-line-1 absolute left-0 top-0 h-px w-5 bg-white transition-all duration-300" />
              <span className="menu-line-2 absolute left-0 top-[7px] h-px w-5 bg-white transition-all duration-300" />
              <span className="menu-line-3 absolute left-0 top-[14px] h-px w-5 bg-white transition-all duration-300" />
            </span>
          </label>
        </div>
      </header>

      <div aria-hidden="true" className="h-[73px] bg-[#5b0f1a]" />

      <div
        id="mobile-navigation"
        className="fixed inset-x-0 bottom-0 top-[73px] overflow-y-auto bg-[#5b0f1a] text-white lg:hidden"
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
                  <span className="text-xs text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-4xl font-medium tracking-[-0.04em]">
                    {link.label}
                  </span>
                </div>

                <span className="text-xl text-white/40">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-full bg-black px-7 py-5 text-sm font-medium text-white"
            >
              Fazer um pedido
              <span aria-hidden="true">↗</span>
            </a>

            <div className="mt-10 flex items-end justify-between border-t border-white/15 pt-6">
              <a
                href="https://www.instagram.com/dvl3d_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70"
              >
                @dvl3d_
              </a>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                Natal DVL3D
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
          animation: mobileMenuEnter 350ms ease both;
        }

        #mobile-menu-toggle:checked ~ header .menu-line-1 {
          top: 7px;
          transform: rotate(45deg);
        }

        #mobile-menu-toggle:checked ~ header .menu-line-2 {
          opacity: 0;
        }

        #mobile-menu-toggle:checked ~ header .menu-line-3 {
          top: 7px;
          transform: rotate(-45deg);
        }

        @keyframes mobileMenuEnter {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @media (min-width: 1024px) {
          #mobile-navigation {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}