"use client";

// ─── Stats — Moura Contabilidade ───────────────────────────────────────────
// Faixa branca entre o Hero e o About.
// 4 números com counter-up + LineGrow dividindo os itens.
// Linguagem de precisão: os dados falam pela empresa.

import { Reveal, LineGrow, useCounterUp } from "../lib/ui";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const STATS: StatItem[] = [
  { value: 3,   suffix: "+",  label: "Anos de atuação" },
  { value: 200, suffix: "+",  label: "Empresas atendidas" },
  { value: 4,   suffix: "",   label: "Áreas de especialidade" },
  { value: 98,  suffix: "%",  label: "Clientes satisfeitos" },
];

function StatCounter({ value, suffix, label, prefix }: StatItem) {
  const { count, ref } = useCounterUp(value, 2000);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ textAlign: "center", padding: "clamp(32px, 4vw, 48px) clamp(16px, 2vw, 24px)" }}
    >
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "clamp(40px, 5vw, 60px)",
          lineHeight: 1,
          color: "var(--color-primary)",
          letterSpacing: "-0.03em",
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "12px",
          letterSpacing: "0.14em",
          color: "var(--color-muted)",
          textTransform: "uppercase",
          marginTop: "10px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section
      id="numeros"
      style={{
        background: "var(--color-surface)",
        position: "relative",
        borderBottom: "1px solid rgba(27,43,75,0.08)",
      }}
    >
      {/* Linha accent topo */}
      <LineGrow
        width="100%"
        height="2px"
        color="var(--color-accent)"
        trigger="scroll"
        duration={1000}
      />

      <div
        className="stats-row"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          position: "relative",
        }}
      >
        {STATS.map((stat, i) => (
          <Reveal key={i} delay={i * 100}>
            <div style={{ position: "relative" }}>
              {/* Divisor vertical entre itens */}
              {i > 0 && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "25%",
                    height: "50%",
                    width: "1px",
                    background: "rgba(27,43,75,0.1)",
                  }}
                />
              )}
              <StatCounter {...stat} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
