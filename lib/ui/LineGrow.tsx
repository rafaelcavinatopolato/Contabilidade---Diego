"use client";

import { useRef, useEffect } from "react";

interface LineGrowProps {
  width?: string;
  height?: string;
  color?: string;
  trigger?: "scroll" | "always";
  delay?: number;
  duration?: number;
}

export function LineGrow({
  width = "100%",
  height = "1px",
  color = "var(--color-accent)",
  trigger = "scroll",
  delay = 0,
  duration = 600,
}: LineGrowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger !== "scroll") return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { el.style.width = width; }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, width, delay]);

  return (
    <div
      ref={ref}
      style={{
        width: trigger === "always" ? width : "0px",
        height,
        backgroundColor: color,
        transition: `width ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
        transformOrigin: "left",
      }}
    />
  );
}
