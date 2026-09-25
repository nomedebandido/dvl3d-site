const items = [
  "Produção própria",
  "Personalização",
  "Projetos sob medida",
  "Natal DVL3D",
];

export default function TrustBar() {
  return (
    <section className="overflow-hidden border-y border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center px-6 md:px-16">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-5 px-5 py-5 text-[10px] uppercase tracking-[0.28em] text-zinc-600 md:px-8 md:text-xs"
          >
            <span>{item}</span>

            {index < items.length - 1 && (
              <span
                aria-hidden="true"
                className="text-xs text-zinc-300"
              >
                ✦
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}