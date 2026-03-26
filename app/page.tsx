// ─── Moura Contabilidade — Home ────────────────────────────────────────────
// Monta as seções na ordem definida em site.config.ts.

import { config } from "../site.config";
import { Navbar }        from "../components/Navbar";
import { Hero }          from "../components/Hero";
import { Stats }         from "../components/Stats";
import { About }         from "../components/About";
import { Services }      from "../components/Services";
import { Testimonials }  from "../components/Testimonials";
import { Contact }       from "../components/Contact";
import { Footer }        from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

const c = config.content as any;

export default function Home() {
  return (
    <main>
      <Navbar />

      {config.sections.map((section) => {
        switch (section) {
          case "hero":
            return c.hero ? (
              <Hero
                key={section}
                headline={c.hero.headline}
                subheadline={c.hero.subheadline}
                cta={c.hero.cta}
              />
            ) : null;

          case "stats":
            return <Stats key={section} />;

          case "about":
            return c.about ? (
              <About
                key={section}
                eyebrow={c.about.eyebrow}
                title={c.about.title}
                text={c.about.text}
                image={c.about.image}
              />
            ) : null;

          case "services":
            return c.services ? (
              <Services
                key={section}
                eyebrow={c.services.eyebrow}
                title={c.services.title}
                items={c.services.items}
              />
            ) : null;

          case "testimonials":
            return c.testimonials ? (
              <Testimonials
                key={section}
                eyebrow={c.testimonials.eyebrow}
                title={c.testimonials.title}
                items={c.testimonials.items}
              />
            ) : null;

          case "contact":
            return c.contact ? (
              <Contact
                key={section}
                eyebrow={c.contact.eyebrow}
                title={c.contact.title}
                titleAccent={c.contact.titleAccent}
                subtitle={c.contact.subtitle}
                email={c.contact.email}
                phone={c.contact.phone}
                address={c.contact.address}
              />
            ) : null;

          default:
            return null;
        }
      })}

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
