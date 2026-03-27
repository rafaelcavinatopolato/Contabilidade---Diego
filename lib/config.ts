export type SectionKey =
  | "hero" | "about" | "portfolio" | "projects" | "awards"
  | "services" | "products" | "team" | "testimonials" | "faq"
  | "pricing" | "gallery" | "blog" | "cta" | "marquee" | "stats" | "contact";

export interface SiteConfig {
  brand: {
    name: string;
    logo: string;
    favicon: string;
    colors: {
      primary: string;
      accent: string;
      background: string;
      text: string;
      dark?: string;
    };
    fonts: { heading: string; body: string };
    shape?: "sharp" | "soft" | "fluid";
  };
  effects?: {
    atmosphere?: string;
    movement?: string[];
    interaction?: string[];
    cursor?: "magnetic" | "default";
  };
  sections: (SectionKey | string)[];
  content: Partial<{
    hero: { eyebrow?: string; headline: string; subheadline: string; cta: string; backgroundImage?: string };
    about: { eyebrow?: string; title?: string; text: string; image: string };
    services: { eyebrow?: string; title: string; items: { title: string; description: string }[] };
    testimonials: { eyebrow?: string; title: string; items: { quote: string; author: string; role?: string }[] };
    contact: { eyebrow?: string; title?: string; titleAccent?: string; subtitle?: string; email: string; phone: string; address: string };
  }> & Record<string, unknown>;
  meta: { title: string; description: string; ogImage: string };
}
