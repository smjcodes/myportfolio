import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/data/projects";

export function CaseStudiesSection() {
  return (
    <section className="doc-section" id="case-studies">
      <SectionHeading
        eyebrow="Case Studies"
        title="A short look at how problems were approached and solved."
        description="The structure stays concise while still showing product thinking, implementation choices, and outcomes."
      />

      <div className="case-study-list">
        {caseStudies.map((study) => (
          <Card className="content-card" key={study.title}>
            <h3>{study.title}</h3>
            <div className="case-study-meta">
              <div>
                <strong>Problem</strong>
                <p>{study.problem}</p>
              </div>
              <div>
                <strong>Solution</strong>
                <p>{study.solution}</p>
              </div>
              <div>
                <strong>Result</strong>
                <p>{study.result}</p>
              </div>
              <div>
                <strong>Role</strong>
                <p>{study.role}</p>
              </div>
            </div>
            <div className="tag-row">
              {study.tech.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
