const categories = [
  {
    number: "01",
    name: "Religiosa",
    description:
      "Peças criadas para espaços de fé, oração, celebração e presentes com significado.",
    href: "/#religiosa",
    status: "Disponível",
  },
  {
    number: "02",
    name: "Decoração",
    description:
      "Objetos esculturais e coleções autorais desenvolvidas para transformar ambientes.",
    href: "/#decoracao",
    status: "Disponível",
  },
  {
    number: "03",
    name: "Organização",
    description:
      "Peças funcionais para organizar objetos da rotina sem abrir mão do design.",
    href: "/#organizacao",
    status: "Disponível",
  },
  {
    number: "04",
    name: "Pet",
    description:
      "Objetos funcionais e personalizados pensados para fazer parte da rotina dos animais e de seus tutores.",
    href: "/#pet",
    status: "Em breve",
  },
];

export default function Categories() {
  return (
    <section
      id="categorias"
      className="bg-black px-6 py-24 text-white md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Coleções
            </p>

            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Diferentes objetos. A mesma vontade de fazer diferente.
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-lg text-base leading-8 text-zinc-400">
              Escolha uma categoria para conhecer somente os produtos daquela
              linha.
            </p>
          </div>
        </div>

        <div className="border-t border-white/15">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group flex touch-manipulation items-start justify-between gap-8 border-b border-white/15 py-10 transition-colors duration-300 hover:bg-white/[0.025] md:py-14"
            >
              <div className="flex items-start gap-5 md:gap-10">
                <span className="mt-2 text-xs text-zinc-600">
                  {category.number}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                      {category.name}
                    </h3>

                    <span className="rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                      {category.status}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                    {category.description}
                  </p>
                </div>
              </div>

              <span className="text-2xl text-zinc-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-end">
          <p className="max-w-xl text-sm leading-7 text-zinc-500">
            Novos produtos serão adicionados automaticamente às categorias
            correspondentes.
          </p>

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            Made Different
          </p>
        </div>
      </div>
    </section>
  );
}