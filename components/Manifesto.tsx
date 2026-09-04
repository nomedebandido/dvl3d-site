const values = [
  {
    number: "01",
    title: "Funcional",
    description:
      "Produtos pensados para organizar, decorar e participar da rotina.",
  },
  {
    number: "02",
    title: "Personalizável",
    description:
      "Cores e detalhes podem ser adaptados para diferentes ambientes.",
  },
  {
    number: "03",
    title: "Produção própria",
    description:
      "Cada peça é produzida pela DVL3D com atenção ao acabamento.",
  },
];

export default function Manifesto() {
  return (
    <section className="overflow-hidden bg-[#f4f2ed] px-6 py-24 text-black md:px-16 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Nossa proposta
            </p>

            <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Objetos que deixam a rotina mais bonita.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-9 text-zinc-600">
              Criamos peças para organizar, decorar, presentear e transformar
              pequenos momentos do dia a dia.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-l border-t border-black/15 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`border-b border-r border-black/15 p-8 md:p-10 lg:p-12 ${
                index === values.length - 1
                  ? "bg-black text-white"
                  : "bg-transparent"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-[0.3em] ${
                  index === values.length - 1
                    ? "text-zinc-600"
                    : "text-zinc-400"
                }`}
              >
                {value.number}
              </p>

              <h3 className="mt-14 text-3xl font-medium tracking-[-0.035em]">
                {value.title}
              </h3>

              <p
                className={`mt-5 max-w-sm text-sm leading-7 md:text-base md:leading-8 ${
                  index === values.length - 1
                    ? "text-zinc-400"
                    : "text-zinc-600"
                }`}
              >
                {value.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-black/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">
            Para sua casa, sua rotina e seus momentos.
          </p>

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            DVL3D — Design e decoração
          </p>
        </div>
      </div>
    </section>
  );
}