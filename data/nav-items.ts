export type SectionNavItem = {
  href: string;
  label: string;
};

export type TopNavItem = {
  href: string;
  label: string;
  external?: boolean;
  download?: boolean | string;
};

export const sectionNavItems: SectionNavItem[] = [
  { href: "#introduction", label: "Introduction" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export const topNavLinks: TopNavItem[] = [
  { href: "#introduction", label: "Home" },
  { href: "https://www.linkedin.com/in/dspjunaid", label: "LinkedIn", external: true },
  { href: "/resume.pdf", label: "Download Resume", download: "Muhammad-Junaid-Resume.pdf" },
  { href: "#contact", label: "Email" }
];

export const socialLinks: TopNavItem[] = [
  { href: "https://www.linkedin.com/in/dspjunaid", label: "LinkedIn", external: true },
  { href: "https://wa.me/923405051520?text=Hello%20Muhammad%20Junaid", label: "WhatsApp", external: true }
];
