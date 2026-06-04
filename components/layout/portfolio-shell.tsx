import { ProfileCard } from "@/components/layout/profile-card";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TopNavbar } from "@/components/layout/top-navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { sectionNavItems } from "@/data/nav-items";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar />
      <div className="portfolio-shell">
        <aside className="portfolio-shell__sidebar">
          <div className="portfolio-shell__sidebar-sticky">
            <ProfileCard />
            <SidebarNav items={sectionNavItems} title="On this page" />
          </div>
        </aside>

        <main className="portfolio-shell__content">
          <div className="portfolio-shell__content-inner">
            <div className="portfolio-shell__mobile-profile">
              <ProfileCard compact />
            </div>
            {children}
          </div>
        </main>
      </div>
      <ScrollToTop />
    </>
  );
}
