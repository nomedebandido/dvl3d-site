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
  imagePosition = "object-center",
}: ProductGalleryProps) {
  const galleryId = createGalleryId(productName);

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
      <div className="flex min-h-[520px] items-center justify-center bg-zinc-100 text-sm text-zinc-500">
        Imagem indisponível
      </div>
    );
  }

  return (
    <div className="product-gallery relative grid gap-3 bg-zinc-100 p-3 md:p-5">
      {/* Controles nativos: funcionam sem JavaScript */}
      {images.map((image, index) => (
        <input
          key={`control-${image}-${index}`}
          id={`${galleryId}-${index}`}
          type="radio"
          name={galleryId}
          defaultChecked={index === 0}
          className="product-gallery-control pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        />
      ))}

      {/* Imagem principal */}
      <div className="product-gallery-main relative min-h-[520px] overflow-hidden bg-zinc-200 md:min-h-[700px] lg:min-h-[calc(100svh-115px)]">
        {images.map((image, index) => (
          <Image
            key={`main-${image}-${index}`}
            src={image}
            alt={`${productName} — imagem ${index + 1}`}
            fill
            priority={index === 0}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            data-image-index={index}
            className={`product-gallery-image pointer-events-none object-cover ${imagePosition}`}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        <p className="pointer-events-none absolute bottom-6 left-6 z-20 text-[10px] uppercase tracking-[0.3em] text-white/80">
          Imagem do produto
        </p>
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="product-gallery-thumbnails grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <label
              key={`thumbnail-${image}-${index}`}
              htmlFor={`${galleryId}-${index}`}
              aria-label={`Ver imagem ${index + 1} de ${productName}`}
              data-thumbnail-index={index}
              className="relative aspect-[4/3] cursor-pointer touch-manipulation select-none overflow-hidden border-2 border-transparent opacity-55 transition-all duration-300 active:scale-[0.98]"
            >
              <Image
                src={image}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 768px) 33vw, 180px"
                className={`pointer-events-none object-cover ${imagePosition}`}
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