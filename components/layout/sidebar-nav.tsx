"use client";

import { useEffect, useMemo, useState } from "react";

import type { SectionNavItem } from "@/data/nav-items";

type SidebarNavProps = {
  items: SectionNavItem[];
  title?: string;
  onNavigate?: () => void;
};

export function SidebarNav({ items, title, onNavigate }: SidebarNavProps) {
  const sectionIds = useMemo(() => items.map((item) => item.href.replace("#", "")), [items]);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveId(hash);
      }
    };

    updateFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6]
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [sectionIds]);

  return (
    <nav aria-label={title ?? "Section navigation"} className="sidebar-nav">
      {title ? <p className="sidebar-nav__title">{title}</p> : null}
      <ul className="sidebar-nav__list">
        {items.map((item) => {
          const itemId = item.href.replace("#", "");
          const isActive = activeId === itemId;

          return (
            <li key={item.href}>
              <a
                aria-current={isActive ? "location" : undefined}
                className={isActive ? "is-active" : undefined}
                href={item.href}
                onClick={onNavigate}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
