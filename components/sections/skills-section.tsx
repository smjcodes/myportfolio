import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="doc-section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Skills grouped by the systems I work with most."
        description="The stack covers frontend, backend, databases, CMS platforms, performance work, and delivery tools."
      />

      <div className="stack-grid">
        {skillGroups.map((group) => (
          <Card className="content-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
