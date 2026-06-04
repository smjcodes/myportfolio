import { NextResponse } from "next/server";

import { siteConfig } from "@/data/site";

export function GET() {
  const body = `# ${siteConfig.fullName}

> ${siteConfig.role}

${siteConfig.headline}

## Summary

${siteConfig.intro}

## Services

- Full-stack web application development
- CRM and internal tool development
- AI voice agent integrations
- LLM integrations and workflow automation
- SEO-friendly business websites

## Key Links

- Website: ${siteConfig.siteUrl}
- LinkedIn: ${siteConfig.linkedInUrl}
- Email: mailto:${siteConfig.email}
- WhatsApp: ${siteConfig.whatsappHref}

## Main Sections

- Introduction: ${siteConfig.siteUrl}/#introduction
- About: ${siteConfig.siteUrl}/#about
- Services: ${siteConfig.siteUrl}/#services
- Projects: ${siteConfig.siteUrl}/#projects
- Case Studies: ${siteConfig.siteUrl}/#case-studies
- Skills: ${siteConfig.siteUrl}/#skills
- Experience: ${siteConfig.siteUrl}/#experience
- Contact: ${siteConfig.siteUrl}/#contact
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
