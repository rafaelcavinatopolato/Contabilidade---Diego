"use client";

// ─── Navbar — Moura Contabilidade ─────────────────────────────────────────
// Transparente sobre o hero dark. Torna-se sólido (off-white) ao scrollar.
// Logo tipográfico: "Moura" em heading bold + "Contabilidade" em body light.

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "A Moura",   href: "#sobre" },
  { label: "Serviços",  href: "#servicos" },
  { label: "Contato",   href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoNameColor  = scrolled ? "var(--color-primary)" : "#F8F6F1";
  const logoSubColor   = scrolled ? "var(--color-muted)"   : "rgba(248,246,241,0.55)";
  const linkColor      = scrolled ? "var(--color-text)"    : "rgba(248,246,241,0.88)";
  const accentDot      = "var(--color-accent)";

  return (
    <>
      <header
        className={`mc-nav fixed top-0 left-0 right-0 z-50 ${scrolled ? "scrolled" : ""}`}
        style={{ padding: "0 clamp(24px, 5vw, 64px)" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* Logo */}
          <a href="#" aria-label="Moura Contabilidade" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Marcador quadrado accent */}
            <div
              style={{
                width: "6px",
                height: "24px",
                background: accentDot,
                flexShrink: 0,
                transition: "background 0.4s ease",
              }}
            />
            <div style={{ lineHeight: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "17px",
                  letterSpacing: "0.04em",
                  color: logoNameColor,
                  transition: "color 0.4s ease",
                }}
              >
                Moura
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  color: logoSubColor,
                  textTransform: "uppercase",
                  marginTop: "2px",
                  transition: "color 0.4s ease",
                }}
              >
                Contabilidade
              </div>
            </div>
          </a>

          {/* Links — desktop */}
          <nav
            className="mc-nav-links"
            style={{ display: "flex", alignItems: "center", gap: "36px" }}
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  color: linkColor,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = linkColor)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — desktop */}
          <a
            href="#contato"
            className="mc-nav-cta"
            aria-label="Solicitar diagnóstico gratuito"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.06em",
              color: scrolled ? "#F8F6F1" : "var(--color-dark)",
              background: scrolled ? "var(--color-primary)" : "var(--color-accent)",
              padding: "10px 22px",
              textDecoration: "none",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-accent)";
              (e.currentTarget as HTMLElement).style.color = "#F8F6F1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = scrolled ? "var(--color-primary)" : "var(--color-accent)";
              (e.currentTarget as HTMLElement).style.color = scrolled ? "#F8F6F1" : "var(--color-dark)";
            }}
          >
            Diagnóstico Gratuito
          </a>

          {/* Hamburger — mobile */}
          <button
            className="mc-nav-menu"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: scrolled ? "var(--color-primary)" : "#F8F6F1",
                  transition: "background 0.3s ease",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="mc-mobile-drawer"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "var(--color-dark)",
            display: "flex",
            flexDirection: "column",
            padding: "24px clamp(24px, 5vw, 64px)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "72px" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px", letterSpacing: "0.04em", color: "#F8F6F1" }}>
              Moura Contabilidade
            </div>
            <button
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "28px", color: "#F8F6F1", lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "40px" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "36px",
                  color: "rgba(248,246,241,0.85)",
                  textDecoration: "none",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(201,145,58,0.15)",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "48px",
              display: "block",
              textAlign: "center",
              background: "var(--color-accent)",
              color: "var(--color-dark)",
              padding: "18px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.08em",
              textDecoration: "none",
            }}
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}
    </>
  );
}
