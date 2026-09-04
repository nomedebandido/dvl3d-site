const questions = [
  {
    question: "As peças são produzidas sob encomenda?",
    answer:
      "Sim. A produção começa após a confirmação do pedido, das cores e dos detalhes combinados pelo WhatsApp.",
  },
  {
    question: "Posso escolher outras cores?",
    answer:
      "Sim. As possibilidades de cores dependem do produto e da disponibilidade dos materiais no momento do pedido.",
  },
  {
    question: "Qual é o prazo de produção?",
    answer:
      "O prazo varia conforme a peça, a quantidade e a fila de produção. A previsão é informada antes da confirmação do pedido.",
  },
  {
    question: "A DVL3D envia para outras cidades?",
    answer:
      "Sim. O envio e o valor do frete são calculados durante o atendimento, de acordo com o endereço e o tamanho do pedido.",
  },
  {
    question: "É possível pedir uma peça personalizada?",
    answer:
      "Sim. Você pode enviar sua ideia, referência ou necessidade pelo WhatsApp. A possibilidade de produção é avaliada antes do orçamento.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-zinc-100 px-6 py-24 text-black md:px-16 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-zinc-500">
            Informações
          </p>

          <h2 className="max-w-xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Antes de fazer seu pedido.
          </h2>

          <p className="mt-7 max-w-md text-base leading-8 text-zinc-500">
            Algumas respostas rápidas sobre produção, personalização, prazos e
            envio.
          </p>
        </div>

        <div className="border-t border-zinc-300">
          {questions.map((item, index) => (
            <details
              key={item.question}
              className="group border-b border-zinc-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-5">
                  <span className="text-xs text-zinc-400">
                    0{index + 1}
                  </span>

                  <h3 className="text-lg font-medium md:text-xl">
                    {item.question}
                  </h3>
                </div>

                <span className="text-xl font-light text-zinc-500 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="pb-8 pl-9 md:pl-12">
                <p className="max-w-2xl text-sm leading-7 text-zinc-600 md:text-base md:leading-8">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}