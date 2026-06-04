"use client";

import { useEffect, useState } from "react";

import { ProfileCard } from "@/components/layout/profile-card";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import type { SectionNavItem } from "@/data/nav-items";

type MobileNavProps = {
  items: SectionNavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        aria-controls="mobile-section-nav"
        aria-expanded={open}
        aria-label={open ? "Close section menu" : "Open section menu"}
        className="mobile-nav__toggle"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="mobile-nav__toggle-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="mobile-nav__toggle-label">Sections</span>
      </button>

      {open ? (
        <div className="mobile-nav__overlay" role="dialog" aria-modal="true">
          <div className="mobile-nav__panel">
            <div className="mobile-nav__header">
              <p>Sections</p>
              <button
                aria-label="Close section menu"
                className="mobile-nav__close"
                onClick={() => setOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>

            <div className="mobile-nav__content" id="mobile-section-nav">
              <ProfileCard compact />
              <SidebarNav items={items} onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
