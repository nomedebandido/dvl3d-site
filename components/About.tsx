export default function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 bg-white px-6 py-24 text-black md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Texto principal */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Sobre a DVL3D
            </p>

            <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl xl:text-8xl">
              A tecnologia é o meio.
              <br />
              O objeto é o que fica.
            </h2>
          </div>

          {/* Descrição */}
          <div className="flex flex-col justify-end">
            <div className="max-w-xl border-l border-zinc-300 pl-6 md:pl-10">
              <p className="text-lg leading-9 text-zinc-700">
                A DVL3D cria objetos de decoração pensados para fazer parte de
                ambientes, momentos e histórias.
              </p>

              <p className="mt-6 text-base leading-8 text-zinc-500">
                Cada peça é produzida sob encomenda, com atenção às formas,
                cores e detalhes. A impressão 3D faz parte do processo, mas o
                nosso foco está no resultado: objetos com identidade,
                significado e presença.
              </p>
            </div>
          </div>
        </div>

        {/* Informações */}
        <div className="mt-24 grid border-l border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-r border-zinc-200 p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              01
            </p>

            <h3 className="mt-16 text-2xl font-medium">
              Produção própria
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Cada peça é produzida diretamente pela DVL3D.
            </p>
          </div>

          <div className="border-b border-r border-zinc-200 p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              02
            </p>

            <h3 className="mt-16 text-2xl font-medium">
              Sob encomenda
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Produção iniciada após a confirmação dos detalhes do pedido.
            </p>
          </div>

          <div className="border-b border-r border-zinc-200 p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              03
            </p>

            <h3 className="mt-16 text-2xl font-medium">
              Personalização
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Cores e detalhes podem ser definidos durante o atendimento.
            </p>
          </div>

          <div className="border-b border-r border-zinc-200 bg-black p-7 text-white md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              04
            </p>

            <h3 className="mt-16 text-2xl font-medium">
              Feito no Espírito Santo
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Design e produção realizados no Brasil.
            </p>
          </div>
        </div>

        {/* Assinatura */}
        <div className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-7">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
            DVL3D — Design e decoração
          </p>

          <span className="text-2xl">✦</span>
        </div>
      </div>
    </section>
  );
}