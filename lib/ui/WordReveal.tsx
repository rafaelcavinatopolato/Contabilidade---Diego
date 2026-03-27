"use client";

import { useEffect, useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  staggerMs?: number;
  tag?: "h1" | "h2" | "h3" | "p";
}

export function WordReveal({
  text,
  className = "",
  staggerMs = 60,
  tag: Tag = "h2",
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    words.forEach((w) => {
      w.style.opacity = "0";
      w.style.transform = "translateY(60%)";
      w.style.display = "inline-block";
      w.style.transition = `opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1)`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((w, i) => {
            setTimeout(() => {
              w.style.opacity = "1";
              w.style.transform = "translateY(0)";
            }, i * staggerMs);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerMs]);

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} data-word className="mr-[0.25em]">
          {word}
        </span>
      ))}
    </Tag>
  );
}
