import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { AboutSection } from "@/components/sections/about-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <PortfolioShell>
      <IntroductionSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </PortfolioShell>
  );
}
