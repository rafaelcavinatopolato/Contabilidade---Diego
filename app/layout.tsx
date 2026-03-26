// ─── Moura Contabilidade — RootLayout ─────────────────────────────────────
// Navy profundo + dourado-âmbar — Plus Jakarta Sans (heading) + Inter (body)
// Grain overlay sutil + RevealProvider global

import type { Metadata } from "next";
import { config } from "../site.config";
import { Grain } from "@agency/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  icons: { icon: config.brand.favicon },
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    images: [config.meta.ogImage],
  },
};

// Google Fonts — Plus Jakarta Sans + Inter
const FONTS_URL = [
  "family=Plus+Jakarta+Sans:wght@300;400;600;700",
  "family=Inter:wght@300;400;500",
].join("&");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cssVars = {
    "--color-primary":    "#1B2B4B",
    "--color-accent":     "#C9913A",
    "--color-background": "#F8F6F1",
    "--color-surface":    "#FFFFFF",
    "--color-text":       "#141B2D",
    "--color-muted":      "#6B7A94",
    "--color-dark":       "#0F1929",
    "--font-heading":     "'Plus Jakarta Sans', system-ui, sans-serif",
    "--font-body":        "'Inter', system-ui, sans-serif",
    "--shape-radius":     "0px",
  } as React.CSSProperties;

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?${FONTS_URL}&display=swap`}
          rel="stylesheet"
        />
        {/* Schema.org AccountingService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Moura Contabilidade & Soluções Empresariais",
              url: "https://www.mouracontabilidadesolucoes.com.br",
              telephone: "+558533511611",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Raimundo Nonato Ribeiro, 155",
                addressLocality: "Trairi",
                addressRegion: "CE",
                postalCode: "62680-000",
                addressCountry: "BR",
              },
              areaServed: ["Trairi", "Paracuru", "São Gonçalo do Amarante"],
              knowsAbout: [
                "Contabilidade Comercial",
                "Planejamento Tributário",
                "Contabilidade Fiscal",
                "Departamento Pessoal",
              ],
              foundingDate: "2022",
            }),
          }}
        />
      </head>
      <body style={cssVars}>
        {/* Grain — textura analógica muito sutil */}
        <Grain opacity={0.018} />
        {children}
      </body>
    </html>
  );
}
