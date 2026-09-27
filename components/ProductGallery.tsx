import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  productName: string;
  imagePosition?: string;
};

function createGalleryId(productName: string) {
  const normalizedName = productName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `product-gallery-${normalizedName || "produto"}`;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const galleryId = createGalleryId(productName);

  const isNatal = images.some((image) =>
    image.includes("/images/natal/"),
  );

  const galleryStyles = images
    .map(
      (_, index) => `
        #${galleryId}-${index}:checked
        ~ .product-gallery-main
        .product-gallery-image[data-image-index="${index}"] {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
          z-index: 2;
        }

        #${galleryId}-${index}:checked
        ~ .product-gallery-thumbnails
        [data-thumbnail-index="${index}"] {
          border-color: #000000;
          opacity: 1;
        }
      `,
    )
    .join("\n");

  if (images.length === 0) {
    return (
      <div
        className={`flex min-h-[420px] items-center justify-center text-sm md:min-h-[520px] ${
          isNatal
            ? "bg-transparent text-white/50"
            : "bg-zinc-100 text-zinc-500"
        }`}
      >
        Imagem indisponível
      </div>
    );
  }

  return (
    <div
      className={`product-gallery relative grid gap-3 p-3 md:p-5 ${
        isNatal ? "bg-transparent" : "bg-zinc-100"
      }`}
    >
      {images.map((image, index) => (
        <input
          key={`control-${image}-${index}`}
          id={`${galleryId}-${index}`}
          type="radio"
          name={galleryId}
          defaultChecked={index === 0}
          className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        />
      ))}

      <div
        className={`product-gallery-main relative min-h-[420px] overflow-hidden md:min-h-[560px] lg:min-h-[72svh] ${
          isNatal ? "bg-transparent" : "bg-zinc-200"
        }`}
      >
        {images.map((image, index) => (
          <div
            key={`main-wrap-${image}-${index}`}
            data-image-index={index}
            className="product-gallery-image absolute inset-0 z-0 p-4 md:p-8 lg:p-10"
          >
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`${productName} — imagem ${index + 1}`}
                fill
                priority={index === 0}
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="pointer-events-none object-contain object-top"
              />
            </div>
          </div>
        ))}

        <div
          className={`pointer-events-none absolute inset-0 z-10 ${
            isNatal
              ? "bg-gradient-to-t from-black/5 via-transparent to-transparent"
              : "bg-gradient-to-t from-black/12 via-transparent to-transparent"
          }`}
        />

        <p
          className={`pointer-events-none absolute bottom-6 left-6 z-20 text-[10px] uppercase tracking-[0.3em] ${
            isNatal ? "text-white/55" : "text-white/80"
          }`}
        >
          Imagem do produto
        </p>
      </div>

      {images.length > 1 && (
        <div className="product-gallery-thumbnails grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <label
              key={`thumbnail-${image}-${index}`}
              htmlFor={`${galleryId}-${index}`}
              aria-label={`Ver imagem ${index + 1} de ${productName}`}
              data-thumbnail-index={index}
              className={`relative aspect-[4/3] cursor-pointer touch-manipulation select-none overflow-hidden border-2 border-transparent opacity-55 transition-all duration-300 active:scale-[0.98] ${
                isNatal ? "bg-transparent" : "bg-zinc-200"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 768px) 33vw, 180px"
                className="pointer-events-none object-cover object-center"
              />
            </label>
          ))}
        </div>
      )}

      <style>{`
        .product-gallery-image {
          opacity: 0;
          visibility: hidden;
          transform: scale(1.015);

          transition:
            opacity 420ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0s linear 420ms;
        }

        ${galleryStyles}

        ${images
          .map(
            (_, index) => `
              #${galleryId}-${index}:checked
              ~ .product-gallery-main
              .product-gallery-image[data-image-index="${index}"] {
                transition:
                  opacity 420ms ease,
                  transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
                  visibility 0s linear 0s;
              }
            `,
          )
          .join("\n")}
      `}</style>
    </div>
  );
}