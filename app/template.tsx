import Image from "next/image";
import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className="dvl-page-transition pointer-events-none fixed inset-0"
      >
        <div className="dvl-transition-star">
          <Image
            src="/estrela-transicao.png"
            alt=""
            width={700}
            height={700}
            priority
            unoptimized
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="dvl-page-content">{children}</div>

      <style>{`
        .dvl-page-transition {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          visibility: hidden;
          background: transparent;
          animation: dvlTransitionLayer 900ms
            cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .dvl-transition-star {
          position: relative;
          height: clamp(220px, 28vw, 430px);
          width: clamp(220px, 28vw, 430px);
          opacity: 0;
          transform: scale(0.55) rotate(-12deg);
          filter:
            drop-shadow(0 14px 30px rgba(0, 0, 0, 0.2))
            drop-shadow(0 0 28px rgba(255, 255, 255, 0.95));
          animation: dvlStarTransition 860ms
            cubic-bezier(0.16, 1, 0.3, 1) 20ms both;
        }

        .dvl-transition-star::before {
          content: "";
          position: absolute;
          inset: 18%;
          z-index: -1;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          filter: blur(42px);
          opacity: 0;
          animation: dvlStarGlow 820ms ease-out 20ms both;
        }

        .dvl-page-content {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          opacity: 1;
          transform: none;
          filter: none;
          animation: dvlPageContentEnter 950ms
            cubic-bezier(0.16, 1, 0.3, 1) 260ms both;
        }

        @keyframes dvlTransitionLayer {
          0% {
            visibility: visible;
          }

          94% {
            visibility: visible;
          }

          100% {
            visibility: hidden;
          }
        }

        @keyframes dvlStarTransition {
          0% {
            opacity: 0;
            transform: scale(0.55) rotate(-12deg);
            filter:
              drop-shadow(0 10px 22px rgba(0, 0, 0, 0.12))
              brightness(0.95);
          }

          20% {
            opacity: 1;
            transform: scale(0.88) rotate(-2deg);
            filter:
              drop-shadow(0 16px 34px rgba(0, 0, 0, 0.2))
              brightness(1.08);
          }

          48% {
            opacity: 1;
            transform: scale(1) rotate(3deg);
            filter:
              drop-shadow(0 18px 38px rgba(0, 0, 0, 0.22))
              brightness(1.18);
          }

          72% {
            opacity: 1;
            transform: scale(1.1) rotate(8deg);
            filter:
              drop-shadow(0 22px 46px rgba(0, 0, 0, 0.18))
              brightness(1.32);
          }

          100% {
            opacity: 0;
            transform: scale(1.45) rotate(16deg);
            filter:
              drop-shadow(0 28px 60px rgba(0, 0, 0, 0))
              brightness(1.5);
          }
        }

        @keyframes dvlStarGlow {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }

          38% {
            opacity: 0.45;
            transform: scale(1);
          }

          68% {
            opacity: 0.8;
            transform: scale(1.22);
          }

          100% {
            opacity: 0;
            transform: scale(1.6);
          }
        }

        @keyframes dvlPageContentEnter {
          from {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(3px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (max-width: 767px) {
          .dvl-page-transition {
            display: none;
            visibility: hidden;
            animation: none;
          }

          .dvl-page-content {
            min-height: 100vh;
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dvl-page-transition {
            display: none;
            visibility: hidden;
            animation: none;
          }

          .dvl-page-content {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }
      `}</style>
    </>
  );
}