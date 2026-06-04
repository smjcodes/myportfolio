import Image from "next/image";

import { MobileNav } from "@/components/layout/mobile-nav";
import { sectionNavItems, topNavLinks } from "@/data/nav-items";
import { siteConfig } from "@/data/site";

export function TopNavbar() {
  const hasBrandLogo = Boolean(siteConfig.brand.logo.src);

  return (
    <header className="top-navbar">
      <div className="top-navbar__inner">
        <div className="top-navbar__left">
          <a className="brand-link" href="#introduction" aria-label="Go to smjcodes introduction">
            {hasBrandLogo ? (
              <span className="brand-link__logo-wrap">
                <Image
                  className="brand-link__logo"
                  src={siteConfig.brand.logo.src}
                  alt={siteConfig.brand.logo.alt}
                  width={siteConfig.brand.logo.width}
                  height={siteConfig.brand.logo.height}
                  priority
                />
              </span>
            ) : (
              <span className="brand-link__mark" />
            )}
          </a>

          <nav aria-label="Primary" className="top-navbar__nav">
            <ul className="top-navbar__links">
              {topNavLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="top-navbar__actions">
          <a
            className="ui-button ui-button--whatsapp top-navbar__whatsapp"
            href={siteConfig.whatsappHref}
            aria-label="Chat on WhatsApp"
            rel="noreferrer"
            target="_blank"
          >
            <span className="top-navbar__whatsapp-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.17 6.41 2.17 11.85c0 1.74.45 3.43 1.31 4.93L2 22l5.38-1.41a9.8 9.8 0 0 0 4.65 1.19h.01c5.43 0 9.86-4.42 9.86-9.86a9.8 9.8 0 0 0-2.85-7.01Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.19.84.85-3.11-.2-.32a8.11 8.11 0 0 1-1.25-4.36c0-4.48 3.65-8.13 8.15-8.13 2.17 0 4.21.84 5.74 2.37a8.06 8.06 0 0 1 2.38 5.76c0 4.49-3.65 8.14-8.13 8.14Zm4.46-6.1c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.92-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.12.16 1.68 2.56 4.07 3.59.57.24 1.01.38 1.36.49.57.18 1.08.16 1.49.1.46-.07 1.42-.58 1.62-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </span>
            <span className="top-navbar__whatsapp-label">WhatsApp</span>
          </a>
          <MobileNav items={sectionNavItems} />
        </div>
      </div>

      <div className="top-navbar__mobile-links-wrap">
        <nav aria-label="Mobile primary" className="top-navbar__mobile-links">
          <ul className="top-navbar__mobile-list">
            {topNavLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
