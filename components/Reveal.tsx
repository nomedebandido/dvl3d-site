"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  once?: boolean;
  threshold?: number;
};

function getInitialTransform(
  direction: RevealDirection,
  distance: number,
) {
  switch (direction) {
    case "down":
      return `translate3d(0, -${distance}px, 0)`;

    case "left":
      return `translate3d(${distance}px, 0, 0)`;

    case "right":
      return `translate3d(-${distance}px, 0, 0)`;

    case "scale":
      return "scale(0.965)";

    case "none":
      return "none";

    case "up":
    default:
      return `translate3d(0, ${distance}px, 0)`;
  }
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 850,
  distance = 26,
  direction = "up",
  once = true,
  threshold = 0.12,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotionPreference = () => {
      setMotionReduced(reducedMotionQuery.matches);
    };

    updateMotionPreference();

    reducedMotionQuery.addEventListener(
      "change",
      updateMotionPreference,
    );

    if (reducedMotionQuery.matches) {
      setIsVisible(true);

      return () => {
        reducedMotionQuery.removeEventListener(
          "change",
          updateMotionPreference,
        );
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      reducedMotionQuery.removeEventListener(
        "change",
        updateMotionPreference,
      );
    };
  }, [once, threshold]);

  const visible = isVisible || motionReduced;

  const revealStyle: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0, 0, 0) scale(1)"
      : getInitialTransform(direction, distance),
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction:
      "cubic-bezier(0.16, 1, 0.3, 1)",
    filter: visible ? "blur(0px)" : "blur(2px)",
    willChange: visible
      ? "auto"
      : "opacity, transform, filter",
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={revealStyle}
    >
      {children}
    </div>
  );
}