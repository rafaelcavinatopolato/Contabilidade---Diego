"use client";

// ─── Hero — Moura Contabilidade ────────────────────────────────────────────
// Fundo navy profundo + DotGrid branco. Sem foto — o DotGrid é a atmosfera.
// Headline entra com WordReveal. Linha de accent separa o headline do sub.
// CTA principal → WhatsApp. CTA secundário → #servicos.

import { WordReveal, DotGrid, LineGrow } from "../lib/ui";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: string;
}

export function Hero({ headline, subheadline, cta }: HeroProps) {
  const whatsappHref = "https://wa.me/558533511611?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Moura%20Contabilidade.";

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "var(--color-background)",
      }}
    >
      {/* DotGrid — linguagem de precisão e dados */}
      <DotGrid color="#8B4513" opacity={0.07} size={28} dotSize={1.2} />

      {/* Gradiente sutil de profundidade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 10% 60%, rgba(212,130,74,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Linha vertical decorativa — direita */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "15%",
          right: "clamp(24px, 7vw, 96px)",
          width: "1px",
          height: "30%",
          background: "linear-gradient(to bottom, transparent, var(--color-accent), transparent)",
          opacity: 0.4,
        }}
      />

      {/* Conteúdo */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "clamp(80px, 10vw, 140px) clamp(24px, 7vw, 96px) clamp(64px, 8vw, 96px)",
          maxWidth: "900px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "var(--color-accent)",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "var(--color-muted)",
              textTransform: "uppercase",
            }}
          >
            Contabilidade & Soluções Empresariais · Trairi, CE
          </span>
        </div>

        {/* Headline — WordReveal */}
        <WordReveal
          text={headline}
          tag="h1"
          staggerMs={65}
          className="mc-hero-headline"
        />
        <style>{`
          [data-word] {
            font-family: var(--font-heading) !important;
            font-weight: 700 !important;
            font-size: clamp(36px, 5.5vw, 72px) !important;
            line-height: 1.1 !important;
            letter-spacing: -0.02em !important;
            color: var(--color-text) !important;
          }
        `}</style>

        {/* Linha accent sob o headline */}
        <div
          style={{
            marginTop: "28px",
            opacity: 0,
            animation: "fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.7s forwards",
          }}
        >
          <LineGrow
            width="64px"
            height="3px"
            color="var(--color-accent)"
            trigger="always"
            duration={600}
            delay={800}
          />
        </div>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.7,
            color: "rgba(44,26,14,0.65)",
            maxWidth: "540px",
            marginTop: "24px",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s forwards",
          }}
        >
          {subheadline}
        </p>

        {/* CTAs */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.85s forwards",
          }}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={cta}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.06em",
              color: "#FAF3EC",
              background: "var(--color-primary)",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            {cta}
          </a>

          <a
            href="#servicos"
            aria-label="Conhecer nossos serviços"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "13px",
              letterSpacing: "0.06em",
              color: "rgba(44,26,14,0.75)",
              border: "1px solid rgba(44,26,14,0.25)",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,26,14,0.6)";
              (e.currentTarget as HTMLElement).style.color = "#2C1A0E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,26,14,0.25)";
              (e.currentTarget as HTMLElement).style.color = "rgba(44,26,14,0.75)";
            }}
          >
            Nossos Serviços
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(32px, 4vw, 48px)",
            right: "clamp(24px, 7vw, 96px)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            opacity: 0,
            animation: "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.2s forwards",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "rgba(44,26,14,0.35)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "rgba(44,26,14,0.15)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "var(--color-accent)",
                opacity: 0.6,
                animation: "scrollDown 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
