import type { SiteConfig } from "./lib/config";

export const config: SiteConfig = {
  brand: {
    name: "Moura Contabilidade",
    logo: "/logo.svg",
    favicon: "/favicon.ico",
    colors: {
      primary:    "#8B4513",  // marrom/terra — identidade Instagram
      accent:     "#D4824A",  // laranja suave — destaque
      background: "#F5E6D3",  // bege/creme — fundo principal
      text:       "#2C1A0E",  // marrom escuro — texto
      dark:       "#2C1A0E",  // mesmo tom escuro — rodapé
    },
    fonts: {
      heading: "Plus Jakarta Sans",
      body:    "Inter",
    },
    shape: "sharp",
  },

  effects: {
    atmosphere:  "dot-grid",
    movement:    ["counter-up"],
    interaction: ["reveal-on-scroll", "word-reveal", "line-grow"],
    cursor:      "default",
  },

  sections: ["hero", "stats", "about", "services", "testimonials", "contact"],

  content: {
    hero: {
      headline:    "Sua empresa em dia. Seu negócio em crescimento.",
      subheadline: "Contabilidade comercial, tributária, fiscal e trabalhista para empresas de Trairi e região. Proximidade de quem conhece o seu mercado.",
      cta:         "Falar com um contador",
    },

    about: {
      eyebrow: "A Moura",
      title:   "Contabilidade moderna. Resultados reais.",
      text:    "A Moura Contabilidade & Soluções Empresariais nasceu em 2022 com uma missão clara: trazer para o empresário do interior do Ceará a mesma qualidade de assessoria contábil disponível nos grandes centros.\n\nFundada pelo contador Diego Pinto Moura, a empresa cresceu rapidamente e hoje conta com uma equipe especializada pronta para atender com agilidade, tecnologia e o atendimento próximo que só quem é daqui pode oferecer.\n\nAtendemos Trairi, Paracuru, São Gonçalo do Amarante e toda a região metropolitana de Fortaleza. Nossa missão é transformar a contabilidade de um peso burocrático em uma vantagem competitiva para o seu negócio.",
      image:   "/about-placeholder.jpg",
    },

    services: {
      eyebrow: "Especialidades",
      title:   "O que fazemos pelo seu negócio",
      items: [
        {
          title:       "Contabilidade Comercial",
          description: "Escrituração contábil, balanços patrimoniais, demonstrativos de resultado e toda a gestão financeira da sua empresa com precisão e transparência.",
        },
        {
          title:       "Contabilidade Tributária",
          description: "Planejamento tributário estratégico, apuração de impostos e escolha do regime ideal — Simples Nacional, Lucro Presumido ou Lucro Real.",
        },
        {
          title:       "Contabilidade Fiscal",
          description: "Cumprimento de todas as obrigações fiscais acessórias: SPED, NF-e, EFD, PGDAS e demais declarações exigidas pelo Fisco.",
        },
        {
          title:       "Departamento Pessoal",
          description: "Folha de pagamento, admissões, demissões, pró-labore, eSocial e toda a gestão trabalhista para manter sua empresa em conformidade.",
        },
      ],
    },

    testimonials: {
      eyebrow: "Depoimentos",
      title:   "Empresários que confiam na Moura",
      items: [
        {
          quote:  "Antes da Moura eu vivia com medo do Leão. Hoje tenho clareza dos meus números e pago só o que devo — nem um real a mais.",
          author: "Ricardo A.",
          role:   "Proprietário — Comércio Varejista, Trairi",
        },
        {
          quote:  "A equipe deles migrou minha empresa para o Simples Nacional e economizei quase 30% em impostos no primeiro ano. Atendimento impecável.",
          author: "Fernanda C.",
          role:   "Sócia — Prestadora de Serviços, Paracuru",
        },
        {
          quote:  "Diego e a equipe têm a resposta antes de eu terminar a pergunta. São parceiros do meu negócio, não só contadores.",
          author: "Marcos O.",
          role:   "Empresário — Construção Civil, Trairi",
        },
      ],
    },

    contact: {
      eyebrow:     "Contato",
      title:       "Vamos conversar",
      titleAccent: "sobre o seu negócio",
      subtitle:    "Preencha o formulário ou fale diretamente pelo WhatsApp. Respondemos no mesmo dia.",
      email:       "contato@mouracontabilidadesolucoes.com.br",
      phone:       "(85) 3351-1611",
      address:     "R. Raimundo Nonato Ribeiro, 155 — Centro, Trairi-CE",
    },
  },

  meta: {
    title:       "Moura Contabilidade | Escritório Contábil em Trairi-CE",
    description: "Contabilidade comercial, tributária, fiscal e trabalhista para empresas de Trairi e região. Fundada em 2022 por Diego Pinto Moura.",
    ogImage:     "/og.jpg",
  },
};
