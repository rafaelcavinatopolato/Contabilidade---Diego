"use client";

// ─── Services — Serviços Moura Contabilidade ───────────────────────────────
// Fundo navy escuro (dark) — seção de contraste.
// 4 cards com LineGrow no topo, ícones Lucide e texto em branco.
// Grid 2×2 em desktop, 1 coluna em mobile.

import { Reveal, LineGrow, DotGrid } from "@agency/ui";
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
        background: "var(--color-dark)",
        padding: "clamp(80px, 10vw, 128px) clamp(24px, 7vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* DotGrid branco sutil */}
      <DotGrid color="#ffffff" opacity={0.04} size={28} dotSize={1} />

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
                  color: "rgba(201,145,58,0.8)",
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
              color: "#F8F6F1",
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
          background: "rgba(248,246,241,0.06)",
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
                  background: "rgba(15,25,41,0.8)",
                  padding: "clamp(32px, 4vw, 48px)",
                  position: "relative",
                  transition: "background 0.35s ease",
                  width: "100%",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "rgba(27,43,75,0.9)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "rgba(15,25,41,0.8)")
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
                    color: "rgba(201,145,58,0.25)",
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
                    color: "#F8F6F1",
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
                    color: "rgba(248,246,241,0.55)",
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
              color: "var(--color-dark)",
              background: "var(--color-accent)",
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
