import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contactOptions, siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="doc-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s make it easy to get in touch."
        description="If you need help with a website, dashboard, backend feature, eCommerce build, or SEO-focused improvement, choose the contact option that works best for you."
      />

      <div className="contact-layout">
        <Card className="contact-card contact-card--primary">
          <div className="contact-card__primary">
            <p className="contact-card__label">Primary contact</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p className="contact-card__text">
              Send a short message about your project, product, or improvement idea and
              I’ll get back to you with the next steps.
            </p>
          </div>

          <div className="contact-card__meta">
            <div>
              <span>Location</span>
              <strong>{siteConfig.location}</strong>
            </div>
            <div>
              <span>Response time</span>
              <strong>{siteConfig.responseTime}</strong>
            </div>
          </div>

          <div className="contact-card__actions">
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="primary">
              Email Me
            </ButtonLink>
            <ButtonLink external href={siteConfig.whatsappHref} variant="secondary">
              WhatsApp
            </ButtonLink>
          </div>
        </Card>

        <div className="contact-options-grid">
          {contactOptions.map((item) => (
            <Card className="contact-option-card" key={item.label}>
              <p className="contact-card__label">{item.label}</p>
              <a
                className="contact-option-card__value"
                href={item.href}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.value}
              </a>
              <p className="contact-card__text">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
