import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="doc-section" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Services focused on product clarity, delivery speed, and maintainable code."
        description="The work spans frontend interfaces, backend systems, performance improvements, and long-term product support."
      />

      <div className="stack-grid">
        {services.map((service) => (
          <Card className="content-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
