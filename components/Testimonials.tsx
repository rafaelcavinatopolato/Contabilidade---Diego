"use client";

// ─── Testimonials — Depoimentos ────────────────────────────────────────────
// Fundo levemente diferenciado — separa visualmente de serviços e contato.
// 3 cards com aspas decorativas em accent + autor + empresa.
// Grid 3 colunas desktop, 1 coluna mobile.

import { Reveal, LineGrow } from "../lib/ui";

interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
}

interface TestimonialsProps {
  eyebrow?: string;
  title: string;
  items: TestimonialItem[];
}

export function Testimonials({ eyebrow, title, items }: TestimonialsProps) {
  return (
    <section
      id="depoimentos"
      style={{
        background: "var(--color-surface)",
        padding: "clamp(80px, 10vw, 128px) clamp(24px, 7vw, 96px)",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: "600px", marginBottom: "clamp(48px, 6vw, 72px)" }}>
        {eyebrow && (
          <Reveal delay={0}>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.28em",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {eyebrow}
              </span>
              <LineGrow color="var(--color-accent)" width="40px" height="2px" />
            </div>
          </Reveal>
        )}

        <Reveal delay={100}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 46px)",
              lineHeight: 1.15,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
        </Reveal>
      </div>

      {/* Cards */}
      <div
        className="testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)`,
          gap: "clamp(20px, 2.5vw, 28px)",
        }}
      >
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 120}>
            <div
              style={{
                background: "var(--color-surface)",
                padding: "clamp(28px, 3vw, 40px)",
                position: "relative",
                border: "1px solid rgba(139,69,19,0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Aspas decorativas — accent com baixa opacidade */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "24px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  opacity: 0.1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 1.6vw, 17px)",
                  lineHeight: 1.75,
                  color: "var(--color-text)",
                  marginBottom: "28px",
                  position: "relative",
                  zIndex: 1,
                  flex: 1,
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Separador */}
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: "var(--color-accent)",
                  marginBottom: "16px",
                  opacity: 0.7,
                }}
              />

              {/* Autor */}
              <footer>
                <cite
                  style={{
                    fontFamily: "var(--font-body)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.04em",
                    color: "var(--color-text)",
                    display: "block",
                  }}
                >
                  {item.author}
                </cite>
                {item.role && (
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "12px",
                      color: "var(--color-muted)",
                      letterSpacing: "0.04em",
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {item.role}
                  </span>
                )}
              </footer>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
