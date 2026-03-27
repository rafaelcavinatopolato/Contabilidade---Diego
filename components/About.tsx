"use client";

// ─── About — A Moura ──────────────────────────────────────────────────────
// Layout: texto à esquerda (55%) + imagem à direita (45%).
// DotGrid sutil no fundo. Eyebrow + LineGrow + headline + parágrafos.
// Destaques de diferencial em cards compactos na parte inferior.

import { Reveal, LineGrow, DotGrid } from "../lib/ui";

interface AboutProps {
  eyebrow?: string;
  title?: string;
  text: string;
  image: string;
}

const DIFERENCIAIS = [
  { label: "Fundada em Trairi",   desc: "Conhecemos o mercado local por dentro" },
  { label: "Tecnologia e proximidade", desc: "Sistemas modernos + atendimento humano" },
  { label: "Equipe especializada",  desc: "Profissionais com formação continuada" },
];

export function About({ eyebrow, title, text, image }: AboutProps) {
  return (
    <section
      id="sobre"
      style={{
        background: "var(--color-background)",
        padding: "clamp(80px, 10vw, 128px) clamp(24px, 7vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* DotGrid de fundo — cor primary em opacidade muito baixa */}
      <DotGrid color="#1B2B4B" opacity={0.035} size={24} dotSize={1} />

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: "clamp(48px, 6vw, 96px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Coluna de texto */}
        <div>
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

          {title && (
            <Reveal delay={100}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3.5vw, 46px)",
                  lineHeight: 1.15,
                  color: "var(--color-text)",
                  marginBottom: "28px",
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h2>
            </Reveal>
          )}

          {text.split("\n\n").map((paragraph, i) => (
            <Reveal key={i} delay={160 + i * 80}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "clamp(15px, 1.3vw, 17px)",
                  lineHeight: 1.8,
                  color: "var(--color-muted)",
                  marginBottom: "20px",
                }}
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          {/* Diferenciais */}
          <Reveal delay={400}>
            <div
              style={{
                marginTop: "40px",
                borderTop: "1px solid rgba(27,43,75,0.1)",
                paddingTop: "36px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {DIFERENCIAIS.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  {/* Marcador accent */}
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "var(--color-accent)",
                      borderRadius: "50%",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "var(--color-text)",
                        display: "block",
                        marginBottom: "2px",
                      }}
                    >
                      {d.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "var(--color-muted)",
                      }}
                    >
                      {d.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Coluna de imagem */}
        <Reveal delay={200}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "4/5",
            }}
          >
            {/* Imagem placeholder — fundo navy com padrão de grade */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #1B2B4B 0%, #0F1929 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              {/* Ícone placeholder */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  border: "1px solid rgba(201,145,58,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(201,145,58,0.6)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "rgba(248,246,241,0.3)",
                  textTransform: "uppercase",
                }}
              >
                Foto do escritório
              </span>

              {/* Tentativa de carregar imagem real se disponível */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="Escritório Moura Contabilidade"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />
            </div>

            {/* Decoração — retângulo accent na borda */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "48px",
                height: "4px",
                background: "var(--color-accent)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
