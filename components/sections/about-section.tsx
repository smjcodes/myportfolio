import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { aboutHighlights } from "@/data/site";

export function AboutSection() {
  return (
    <section className="doc-section" id="about">
      <SectionHeading
        eyebrow="About"
        title="Full-stack and AI engineer focused on scalable products and business systems."
        description="My experience spans modern frontend engineering, backend APIs, CRM customization, automation, and AI-assisted workflows for real operational use cases."
      />

      <Card className="content-card">
        <p>
          I work with Next.js, React, Node.js, PHP, Laravel, and CodeIgniter to build
          eCommerce products, Perfex CRM modules, SaaS dashboards, internal business
          systems, and SEO-friendly websites. I also have hands-on experience with RAG
          systems, AI voice agents, LLM integrations, and workflow automation.
        </p>

        <ul className="bullet-list">
          {aboutHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
