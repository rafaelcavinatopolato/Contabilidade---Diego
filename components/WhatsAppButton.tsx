"use client";

// ─── WhatsAppButton — Botão flutuante WhatsApp ─────────────────────────────
// Fixo no canto inferior direito. Pulsa suavemente para chamar atenção.
// Desaparece quando o scroll está próximo do topo (já está no hero com CTA).

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WA_HREF = "https://wa.me/558533511611?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Moura%20Contabilidade.";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      style={{
        position: "fixed",
        bottom: "clamp(24px, 3vw, 36px)",
        right: "clamp(20px, 3vw, 32px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "56px",
        height: "56px",
        background: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        textDecoration: "none",
        transition: "opacity 0.4s ease, transform 0.3s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "scale(1)" : "scale(0.8)",
        animation: visible ? "pulseWa 2.5s ease-in-out infinite" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.animation = "none";
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.45)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.animation = "pulseWa 2.5s ease-in-out infinite";
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
      }}
    >
      <MessageCircle size={24} strokeWidth={1.75} aria-hidden />
    </a>
  );
}
