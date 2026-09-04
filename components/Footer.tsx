import Image from "next/image";

const whatsappLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20DVL3D%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.";

const instagramLink = "https://www.instagram.com/dvl3d_/";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="scroll-mt-24 overflow-hidden bg-black px-6 pb-8 pt-24 text-white md:px-16 md:pb-10 md:pt-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Chamada principal */}
        <div className="grid gap-14 border-b border-white/15 pb-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Entre em contato
            </p>

            <h2 className="max-w-5xl text-5xl font-medium leading-[0.93] tracking-[-0.055em] sm:text-6xl md:text-8xl">
              Vamos criar algo para o seu espaço.
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <p className="max-w-md text-base leading-8 text-zinc-400 lg:text-right">
              Fale diretamente com a DVL3D para conhecer os produtos, definir
              personalizações ou solicitar um orçamento.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200"
            >
              Falar pelo WhatsApp
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Navegação e contatos */}
        <div className="grid gap-14 border-b border-white/15 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.svg"
              alt="DVL3D"
              width={220}
              height={110}
              className="h-auto w-32 invert"
            />

            <p className="mt-7 max-w-xs text-sm leading-7 text-zinc-500">
              Objetos de decoração produzidos sob encomenda, com identidade e
              atenção aos detalhes.
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-zinc-600">
              Navegação
            </p>

            <div className="flex flex-col items-start gap-4 text-sm text-zinc-300">
              <a
                href="#colecoes"
                className="transition-colors hover:text-white"
              >
                Linhas DVL3D
              </a>

              <a
                href="#religiosa"
                className="transition-colors hover:text-white"
              >
                Linha Religiosa
              </a>

              <a
                href="#como-funciona"
                className="transition-colors hover:text-white"
              >
                Como funciona
              </a>

              <a
                href="#sobre"
                className="transition-colors hover:text-white"
              >
                Sobre a DVL3D
              </a>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-zinc-600">
              Contato
            </p>

            <div className="flex flex-col items-start gap-4 text-sm text-zinc-300">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                (27) 99263-4978
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram — @dvl3d_
              </a>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-zinc-600">
              Produção
            </p>

            <div className="space-y-4 text-sm leading-7 text-zinc-400">
              <p>Produção sob encomenda</p>
              <p>Cores personalizáveis</p>
              <p>Espírito Santo — Brasil</p>
            </div>
          </div>
        </div>

        {/* Final */}
        <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} DVL3D. Todos os direitos reservados.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white"
          >
            Voltar ao início
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        {/* Marca gigante */}
        <div
          aria-hidden="true"
          className="mt-20 select-none overflow-hidden border-t border-white/10 pt-6"
        >
          <p className="whitespace-nowrap text-center text-[22vw] font-semibold leading-[0.75] tracking-[-0.08em] text-white/[0.035]">
            DVL3D
          </p>
        </div>
      </div>
    </footer>
  );
}