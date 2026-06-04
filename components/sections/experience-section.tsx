import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { experienceItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="doc-section" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience presented in a simple, resume-friendly format."
        description="The focus here is on role, scope, technical direction, and practical achievements."
      />

      <div className="timeline-list">
        {experienceItems.map((item) => (
          <Card className="content-card content-card--timeline" key={`${item.role}-${item.period}`}>
            <div className="timeline-head">
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <span>{item.period}</span>
            </div>

            <ul className="bullet-list">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
