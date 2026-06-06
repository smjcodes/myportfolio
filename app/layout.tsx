import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import { siteConfig } from "@/data/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"]
});

const siteTitle = "smjcodes | Full Stack Developer Portfolio";
const siteDescription =
  "Muhammad Junaid is a Full-Stack and AI Engineer building scalable web apps, CRM systems, SEO-friendly platforms, AI voice agents, and LLM-powered products.";
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteTitle,
  description: siteDescription,
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification
        }
      }
    : {}),
  applicationName: "smjcodes Portfolio",
  authors: [{ name: siteConfig.fullName, url: siteConfig.siteUrl }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    telephone: false,
    address: false
  },
  keywords: [
    "smjcodes",
    "Muhammad Junaid",
    "full stack developer",
    "AI engineer",
    "Next.js developer",
    "React portfolio",
    "Laravel developer",
    "Node.js developer",
    "LLM integrations",
    "AI voice agent developer",
    "eCommerce developer",
    "CRM developer",
    "SaaS developer"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "smjcodes",
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"]
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF8F0"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
