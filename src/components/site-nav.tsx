"use client";

import { useEffect, useRef, useState } from "react";

export type NavItem = { href: string; label: string };

/**
 * One set of links, two presentations. Below the breakpoint the links collapse
 * into a panel that closes on selection, on Escape, and on an outside press.
 */
export function SiteNav({
  items,
  ariaLabel,
  menuLabel,
}: {
  items: NavItem[];
  ariaLabel: string;
  menuLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <div className="site-nav" ref={rootRef}>
      <nav className="nav-links" aria-label={ariaLabel}>
        {items.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {menuLabel}
        <span aria-hidden="true" className={open ? "nav-toggle-icon is-open" : "nav-toggle-icon"} />
      </button>

      {open ? (
        <nav id="site-nav-panel" className="nav-panel" aria-label={ariaLabel}>
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
