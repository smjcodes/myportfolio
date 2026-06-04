import { MobileNav } from "@/components/layout/mobile-nav";
import { sectionNavItems, topNavLinks } from "@/data/nav-items";
import { siteConfig } from "@/data/site";

export function TopNavbar() {
  return (
    <header className="top-navbar">
      <div className="top-navbar__inner">
        <div className="top-navbar__left">
          <a className="brand-link" href="#introduction" aria-label="Go to smjcodes introduction">
            <span className="brand-link__mark" />
            <span>{siteConfig.name}</span>
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
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp
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
