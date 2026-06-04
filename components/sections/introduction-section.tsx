import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { introStats, techSummary } from "@/data/skills";
import { siteConfig } from "@/data/site";

export function IntroductionSection() {
  return (
    <section className="doc-section doc-section--hero" id="introduction">
      <div className="hero-card">
        <p className="hero-card__eyebrow">{siteConfig.role}</p>
        <h1>{siteConfig.headline}</h1>
        <p className="hero-card__summary">{siteConfig.intro}</p>

        <div className="hero-card__actions">
          <ButtonLink href="#projects" variant="primary">
            View Projects
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Contact Me
          </ButtonLink>
        </div>
      </div>

      <div className="hero-grid">
        <Card className="panel-card">
          <h2>Tech summary</h2>
          <p>
            Full stack engineering across web apps, CRM systems, SaaS products, AI
            integrations, and SEO-optimized business websites.
          </p>
          <div className="tag-row">
            {techSummary.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Card>

        <Card className="panel-card panel-card--stats">
          {introStats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}
