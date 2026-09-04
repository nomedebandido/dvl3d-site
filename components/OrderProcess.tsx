const steps = [
  {
    number: "01",
    title: "Escolha",
    description:
      "Conheça as peças disponíveis e escolha o produto que combina com o seu espaço ou ocasião.",
  },
  {
    number: "02",
    title: "Personalize",
    description:
      "Fale conosco pelo WhatsApp para definir cores, detalhes e possíveis personalizações.",
  },
  {
    number: "03",
    title: "Produção",
    description:
      "Após a confirmação, sua peça entra em produção com cuidado em cada etapa.",
  },
  {
    number: "04",
    title: "Receba",
    description:
      "O pedido é preparado, embalado e enviado conforme as condições combinadas no atendimento.",
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
              Do pedido à entrega
            </p>

            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Feito com você. Produzido pela DVL3D.
            </h2>
          </div>

          <p className="max-w-lg self-end text-base leading-8 text-zinc-400 lg:justify-self-end">
            Cada pedido passa por um atendimento direto para que os detalhes da
            peça sejam definidos antes da produção.
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
            Prazo, disponibilidade, formas de pagamento e envio são informados
            durante o atendimento.
          </p>

          <a
            href="https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20DVL3D%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200"
          >
            Começar um pedido
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}