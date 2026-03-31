"use client";

// ─── Footer — Moura Contabilidade ─────────────────────────────────────────
// Fundo muito escuro (--color-dark). Logo + endereço + links + social.

import { Instagram, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-dark)",
        padding:
          "clamp(48px, 6vw, 72px) clamp(24px, 7vw, 96px) clamp(24px, 3vw, 32px)",
      }}
    >
      {/* Linha accent no topo */}
      <div
        style={{
          width: "48px",
          height: "3px",
          background: "var(--color-accent)",
          marginBottom: "40px",
        }}
      />

      {/* Linha superior */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
          paddingBottom: "48px",
          borderBottom: "1px solid rgba(248,246,241,0.07)",
        }}
      >
        {/* Logo + endereço */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "20px",
              letterSpacing: "0.02em",
              color: "rgba(248,246,241,0.88)",
              marginBottom: "4px",
            }}
          >
            Moura
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "rgba(212,130,74,0.6)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Contabilidade & Soluções Empresariais
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "13px",
              lineHeight: 1.8,
              color: "rgba(248,246,241,0.38)",
            }}
          >
            R. Raimundo Nonato Ribeiro, 155
            <br />
            Centro — Trairi, CE
            <br />
            contato@mouracontabilidadesolucoes.com.br
          </p>
        </div>

        {/* Links de navegação */}
        <nav aria-label="Links do footer">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "8px 48px",
            }}
          >
            {[
              { label: "A Moura", href: "#sobre" },
              { label: "Contabilidade Comercial", href: "#servicos" },
              { label: "Serviços", href: "#servicos" },
              { label: "Planejamento Tributário", href: "#servicos" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Departamento Pessoal", href: "#servicos" },
              { label: "Contato", href: "#contato" },
              { label: "Contabilidade Fiscal", href: "#servicos" },
            ].map((link) => (
              <a
                key={link.label + link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "12px",
                  letterSpacing: "0.04em",
                  color: "rgba(248,246,241,0.35)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(248,246,241,0.35)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Redes sociais */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "rgba(248,246,241,0.25)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Redes Sociais
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              {
                icon: <Instagram size={18} strokeWidth={1.25} aria-hidden />,
                href: "https://instagram.com/mouracontabilidade_oficial",
                label: "Instagram",
              },
              {
                icon: (
                  <MessageCircle size={18} strokeWidth={1.25} aria-hidden />
                ),
                href: "https://wa.me/558533511611",
                label: "WhatsApp",
              },
              {
                icon: <Phone size={18} strokeWidth={1.25} aria-hidden />,
                href: "tel:+558533511611",
                label: "Telefone",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(212,130,74,0.2)",
                  color: "rgba(248,246,241,0.4)",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(212,130,74,0.6)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(212,130,74,0.2)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(248,246,241,0.4)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "rgba(248,246,241,0.2)",
          }}
        >
          © {year} Moura Contabilidade & Soluções Empresariais. Todos os
          direitos reservados.
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.06em",
            color: "rgba(212,130,74,0.3)",
          }}
        >
          CRC · Política de Privacidade
        </span>
      </div>
    </footer>
  );
}
