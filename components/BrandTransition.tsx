export default function BrandTransition() {
  return (
    <section
      aria-label="Da ideia à forma"
      className="brand-transition overflow-hidden bg-white px-6 py-10 text-black md:px-16 md:py-14"
    >
      <div className="relative mx-auto flex max-w-[1600px] items-center">
        <div className="brand-track absolute left-0 right-0 h-px bg-zinc-200" />

        <div className="brand-progress absolute left-0 h-px bg-black" />

        <div className="brand-star absolute z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm shadow-sm">
          ✦
        </div>

        <div className="relative z-20 mx-auto bg-white px-5 md:px-8">
          <p className="flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-zinc-400 md:text-[10px]">
            <span>Ideia</span>

            <span
              aria-hidden="true"
              className="text-zinc-300"
            >
              →
            </span>

            <span>Forma</span>
          </p>
        </div>
      </div>

      <style>{`
        .brand-transition {
          position: relative;
        }

        .brand-track {
          transform-origin: left center;
        }

        .brand-progress {
          width: 0%;
          transform-origin: left center;
          animation: brandProgress 5.5s
            cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        .brand-star {
          left: -18px;
          animation:
            brandStarMovement 5.5s cubic-bezier(0.65, 0, 0.35, 1)
              infinite,
            brandStarRotation 5.5s ease-in-out infinite;
        }

        @keyframes brandProgress {
          0% {
            width: 0%;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          72% {
            width: 100%;
            opacity: 1;
          }

          90% {
            width: 100%;
            opacity: 0;
          }

          100% {
            width: 0%;
            opacity: 0;
          }
        }

        @keyframes brandStarMovement {
          0% {
            left: -18px;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          72% {
            left: calc(100% - 18px);
            opacity: 1;
          }

          90% {
            left: calc(100% - 18px);
            opacity: 0;
          }

          100% {
            left: -18px;
            opacity: 0;
          }
        }

        @keyframes brandStarRotation {
          0% {
            transform: rotate(0deg) scale(0.85);
          }

          45% {
            transform: rotate(90deg) scale(1);
          }

          72% {
            transform: rotate(180deg) scale(0.85);
          }

          100% {
            transform: rotate(180deg) scale(0.85);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-progress {
            width: 100%;
            animation: none;
          }

          .brand-star {
            left: calc(100% - 18px);
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}