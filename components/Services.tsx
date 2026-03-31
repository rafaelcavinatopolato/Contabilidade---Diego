"use client";

// ─── Services — Serviços Moura Contabilidade ───────────────────────────────
// Fundo navy escuro (dark) — seção de contraste.
// 4 cards com LineGrow no topo, ícones Lucide e texto em branco.
// Grid 2×2 em desktop, 1 coluna em mobile.

import { Reveal, LineGrow, DotGrid } from "../lib/ui";
import {
  BarChart3,
  FileCheck,
  Receipt,
  Users,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServicesProps {
  eyebrow?: string;
  title: string;
  items: ServiceItem[];
}

const ICONS = [BarChart3, Receipt, FileCheck, Users];

export function Services({ eyebrow, title, items }: ServicesProps) {
  return (
    <section
      id="servicos"
      style={{
        background: "var(--color-background)",
        padding: "clamp(80px, 10vw, 128px) clamp(24px, 7vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* DotGrid branco sutil */}
      <DotGrid color="var(--color-primary)" opacity={0.06} size={28} dotSize={1} />

      {/* Header */}
      <div
        style={{
          maxWidth: "600px",
          marginBottom: "clamp(48px, 6vw, 72px)",
          position: "relative",
          zIndex: 1,
        }}
      >
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

      {/* Grid de cards */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          background: "rgba(139,69,19,0.08)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {items.map((item, i) => {
          const Icon = ICONS[i] ?? BarChart3;
          return (
            <Reveal key={item.title} delay={i * 100}>
              <div
                style={{
                  background: "var(--color-surface)",
                  padding: "clamp(32px, 4vw, 48px)",
                  position: "relative",
                  transition: "background 0.35s ease",
                  width: "100%",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#F5E6D3")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--color-surface)")
                }
              >
                {/* LineGrow no topo do card */}
                <div style={{ marginBottom: "32px" }}>
                  <LineGrow
                    color="var(--color-accent)"
                    width="100%"
                    height="2px"
                    trigger="scroll"
                    delay={i * 100}
                    duration={700}
                  />
                </div>

                {/* Ícone */}
                <div style={{ marginBottom: "20px" }}>
                  <Icon
                    size={24}
                    color="var(--color-accent)"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                </div>

                {/* Número do serviço */}
                <div
                  style={{
                    position: "absolute",
                    top: "clamp(20px, 3vw, 32px)",
                    right: "clamp(20px, 3vw, 32px)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    color: "rgba(212,130,74,0.3)",
                  }}
                >
                  0{i + 1}
                </div>

                {/* Título */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "clamp(19px, 2vw, 24px)",
                    lineHeight: 1.25,
                    color: "var(--color-text)",
                    marginBottom: "16px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>

                {/* Descrição */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "rgba(44,26,14,0.65)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* CTA abaixo dos cards */}
      <Reveal delay={300}>
        <div
          style={{
            marginTop: "clamp(40px, 5vw, 64px)",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <a
            href="#contato"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.08em",
              color: "#FAF3EC",
              background: "var(--color-primary)",
              padding: "16px 36px",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Solicitar proposta
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
