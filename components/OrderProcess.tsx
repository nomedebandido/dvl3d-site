const steps = [
  {
    number: "01",
    title: "Escolha",
    description:
      "Escolha um produto DVL3D ou conte para nós o que você está procurando.",
  },
  {
    number: "02",
    title: "Personalize",
    description:
      "Defina cores, detalhes, medidas e possíveis adaptações para deixar a peça do seu jeito.",
  },
  {
    number: "03",
    title: "Crie",
    description:
      "Se a sua ideia ainda não existe, podemos desenvolver uma peça junto com você.",
  },
  {
    number: "04",
    title: "Receba",
    description:
      "Depois da aprovação, produzimos, preparamos e enviamos sua peça conforme o combinado.",
  },
];

export default function OrderProcess() {
  return (
    <section
      id="como-funciona"
      className="bg-black px-6 py-24 text-white md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-zinc-500">
              Personalização
            </p>

            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Feito com você.
            </h2>
          </div>

          <p className="max-w-lg self-end text-base leading-8 text-zinc-400 lg:justify-self-end">
            Personalize um produto existente, adapte uma peça para sua
            necessidade ou traga uma ideia totalmente nova.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group border-b border-white/15 px-1 py-12 md:border-r md:px-8 xl:min-h-[380px] xl:py-14"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600">
                    {step.number}
                  </span>

                  <span className="text-zinc-700 transition-transform duration-500 group-hover:rotate-90 group-hover:text-white">
                    ✦
                  </span>
                </div>

                <div className="mt-20">
                  <h3 className="text-3xl font-medium tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-zinc-500">
            Possibilidades de personalização, prazo, valor e envio são
            definidos durante o atendimento.
          </p>

          <a
            href="https://wa.me/5527992634978?text=Ol%C3%A1%21%20Tenho%20uma%20ideia%20e%20gostaria%20de%20fazer%20uma%20pe%C3%A7a%20personalizada%20com%20a%20DVL3D."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200"
          >
            Quero personalizar
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}