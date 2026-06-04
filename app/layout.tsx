import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"]
});

const siteTitle = "smjcodes | Full Stack Developer Portfolio";
const siteDescription =
  "Documentation-style portfolio for smjcodes featuring full stack services, projects, case studies, skills, experience, and contact information.";

export const metadata: Metadata = {
  metadataBase: new URL("https://smjcodes.dev"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "smjcodes",
    "full stack developer",
    "Next.js developer",
    "React portfolio",
    "Laravel developer",
    "eCommerce developer",
    "SaaS developer"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "smjcodes",
    type: "website",
    url: "https://smjcodes.dev"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
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
