const whatsappLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20DVL3D%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20pe%C3%A7a%20personalizada.";

export default function CustomOrder() {
  return (
    <section className="bg-white px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[32px] bg-zinc-100 px-7 py-16 md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 text-[260px] font-light leading-none text-white md:text-[420px]"
          >
            ✦
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
              Feito para você
            </p>

            <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
              Tem uma ideia diferente?
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
              Desenvolvemos peças personalizadas para decoração, presentes,
              momentos religiosos, pets e ambientes especiais.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-800"
            >
              Solicitar orçamento
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}