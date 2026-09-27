const snowflakes = Array.from({ length: 140 }, (_, index) => ({
  left: `${(index * 4.37) % 100}%`,
  delay: `${-(index % 22)}s`,
  duration: `${24 + (index % 12)}s`,
  size: `${3 + (index % 6)}px`,
  opacity: 0.5 + (index % 5) * 0.1,
}));

export default function SiteSnow() {
  return (
    <>
      <div className="site-snow pointer-events-none absolute inset-0 z-[40] overflow-hidden">
        {snowflakes.map((flake, index) => (
          <span
            key={index}
            className="site-snowflake"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
            }}
          />
        ))}
      </div>

      <style>{`
        /*
          A neve antiga do Hero e da seção Natal é escondida.
          Agora existe apenas UMA neve contínua na Home inteira.
        */
        .hero-snow,
        .natal-snow {
          display: none !important;
        }

        .site-snow {
          top: 0;
          bottom: 0;
        }

        .site-snowflake {
          position: absolute;
          top: -40px;

          display: block;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.98);

          box-shadow:
            0 0 6px rgba(255, 255, 255, 0.45),
            0 0 12px rgba(255, 255, 255, 0.18);

          animation-name: siteSnowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;

          will-change: top, transform;
        }

        @keyframes siteSnowfall {
          0% {
            top: -40px;
            transform: translate3d(0, 0, 0);
          }

          20% {
            transform: translate3d(-14px, 0, 0);
          }

          40% {
            transform: translate3d(12px, 0, 0);
          }

          60% {
            transform: translate3d(-9px, 0, 0);
          }

          80% {
            transform: translate3d(15px, 0, 0);
          }

          100% {
            top: calc(100% + 40px);
            transform: translate3d(0, 0, 0);
          }
        }

        @media (max-width: 767px) {
          .site-snowflake {
            box-shadow:
              0 0 4px rgba(255, 255, 255, 0.4),
              0 0 8px rgba(255, 255, 255, 0.15);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-snow {
            display: none;
          }
        }
      `}</style>
    </>
  );
}