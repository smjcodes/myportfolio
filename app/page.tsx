import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { AboutSection } from "@/components/sections/about-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { siteConfig } from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}#person`,
      name: siteConfig.fullName,
      alternateName: siteConfig.name,
      jobTitle: siteConfig.role,
      description: siteConfig.intro,
      image: `${siteConfig.siteUrl}${siteConfig.profile.photo.src}`,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
      homeLocation: {
        "@type": "Place",
        name: siteConfig.location
      },
      sameAs: [siteConfig.linkedInUrl, siteConfig.whatsappHref]
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}#website`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      description: siteConfig.intro,
      publisher: {
        "@id": `${siteConfig.siteUrl}#person`
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.siteUrl}#service`,
      name: `${siteConfig.fullName} Portfolio`,
      url: siteConfig.siteUrl,
      description: siteConfig.headline,
      areaServed: "Worldwide",
      serviceType: [
        "Full-stack web development",
        "AI integrations",
        "CRM development",
        "SEO-friendly website development",
        "LLM application development"
      ],
      founder: {
        "@id": `${siteConfig.siteUrl}#person`
      },
      sameAs: [siteConfig.linkedInUrl]
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
    </>
  );
}
