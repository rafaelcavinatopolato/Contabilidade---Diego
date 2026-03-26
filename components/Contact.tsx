"use client";

// ─── Contact — Contato ─────────────────────────────────────────────────────
// Fundo navy (--color-primary). Formulário à esquerda + info à direita.
// Select de serviços da Moura. CTA WhatsApp em destaque.

import { useState } from "react";
import { Reveal, LineGrow } from "@agency/ui";
import { Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

interface ContactProps {
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  email: string;
  phone: string;
  address: string;
}

const SERVICES = [
  "Contabilidade Comercial",
  "Planejamento Tributário",
  "Contabilidade Fiscal",
  "Departamento Pessoal",
  "Abertura / Encerramento de Empresa",
  "Outro",
];

export function Contact({ eyebrow, title, titleAccent, subtitle, email, phone, address }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/55${phone.replace(/\D/g, "")}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Moura%20Contabilidade.`;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(248,246,241,0.06)",
    border: "1px solid rgba(248,246,241,0.15)",
    color: "#F8F6F1",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: "14px",
    padding: "14px 16px",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box" as const,
    borderRadius: "0",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: "11px",
    letterSpacing: "0.18em",
    color: "rgba(248,246,241,0.45)",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  return (
    <section
      id="contato"
      style={{
        background: "var(--color-primary)",
        padding: "clamp(80px, 10vw, 128px) clamp(24px, 7vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ marginBottom: "clamp(48px, 6vw, 72px)", position: "relative", zIndex: 1 }}>
        {eyebrow && (
          <Reveal delay={0}>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.28em",
                  color: "rgba(201,145,58,0.7)",
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
            {title}{" "}
            {titleAccent && (
              <span style={{ color: "var(--color-accent)" }}>{titleAccent}</span>
            )}
          </h2>
        </Reveal>

        {subtitle && (
          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(248,246,241,0.55)",
                marginTop: "16px",
                maxWidth: "480px",
              }}
            >
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {/* Grid formulário + info */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "58fr 42fr",
          gap: "clamp(48px, 6vw, 96px)",
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Formulário */}
        <Reveal delay={200}>
          {submitted ? (
            <div
              style={{
                padding: "48px",
                border: "1px solid rgba(201,145,58,0.25)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "26px",
                  color: "var(--color-accent)",
                  marginBottom: "12px",
                }}
              >
                Mensagem enviada!
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "rgba(248,246,241,0.6)",
                  lineHeight: 1.7,
                }}
              >
                Entraremos em contato em breve. Ou fale agora pelo WhatsApp.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "24px",
                  background: "#25D366",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "13px",
                  padding: "12px 24px",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={16} strokeWidth={1.5} aria-hidden />
                WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label htmlFor="c-name" style={labelStyle}>Nome</label>
                  <input
                    id="c-name" type="text" required placeholder="Seu nome completo"
                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(201,145,58,0.6)")}
                    onBlur={(e)  => ((e.target as HTMLInputElement).style.borderColor = "rgba(248,246,241,0.15)")}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" style={labelStyle}>WhatsApp</label>
                  <input
                    id="c-phone" type="tel" placeholder="(85) 99999-9999"
                    value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(201,145,58,0.6)")}
                    onBlur={(e)  => ((e.target as HTMLInputElement).style.borderColor = "rgba(248,246,241,0.15)")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-email" style={labelStyle}>E-mail</label>
                <input
                  id="c-email" type="email" required placeholder="seu@email.com"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(201,145,58,0.6)")}
                  onBlur={(e)  => ((e.target as HTMLInputElement).style.borderColor = "rgba(248,246,241,0.15)")}
                />
              </div>

              <div>
                <label htmlFor="c-service" style={labelStyle}>Serviço de interesse</label>
                <select
                  id="c-service"
                  value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const }}
                >
                  <option value="" style={{ background: "#1B2B4B" }}>Selecione um serviço</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} style={{ background: "#1B2B4B" }}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="c-message" style={labelStyle}>Mensagem</label>
                <textarea
                  id="c-message" required rows={4} placeholder="Conte um pouco sobre sua empresa e o que precisa..."
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "110px" }}
                  onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "rgba(201,145,58,0.6)")}
                  onBlur={(e)  => ((e.target as HTMLTextAreaElement).style.borderColor = "rgba(248,246,241,0.15)")}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-dark)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "16px 36px",
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.88")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </Reveal>

        {/* Informações de contato */}
        <Reveal delay={300}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              {
                icon: <Phone size={18} color="rgba(201,145,58,0.7)" strokeWidth={1.25} aria-hidden />,
                label: "Telefone",
                value: phone,
                href: `tel:${phone.replace(/\D/g, "")}`,
              },
              {
                icon: <MessageCircle size={18} color="rgba(201,145,58,0.7)" strokeWidth={1.25} aria-hidden />,
                label: "WhatsApp",
                value: phone,
                href: whatsappHref,
              },
              {
                icon: <Mail size={18} color="rgba(201,145,58,0.7)" strokeWidth={1.25} aria-hidden />,
                label: "E-mail",
                value: email,
                href: `mailto:${email}`,
              },
              {
                icon: <MapPin size={18} color="rgba(201,145,58,0.7)" strokeWidth={1.25} aria-hidden />,
                label: "Endereço",
                value: address,
                href: undefined,
              },
              {
                icon: <Instagram size={18} color="rgba(201,145,58,0.7)" strokeWidth={1.25} aria-hidden />,
                label: "Instagram",
                value: "@mouracontabilidade_oficial",
                href: "https://instagram.com/mouracontabilidade_oficial",
              },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ marginTop: "2px", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      color: "rgba(248,246,241,0.35)",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        fontSize: "14px",
                        color: "rgba(248,246,241,0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(248,246,241,0.8)")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "14px", color: "rgba(248,246,241,0.8)" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar pelo WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.04em",
                padding: "14px 24px",
                textDecoration: "none",
                marginTop: "8px",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              <MessageCircle size={16} strokeWidth={1.5} aria-hidden />
              Falar pelo WhatsApp agora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
