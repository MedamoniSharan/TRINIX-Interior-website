"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/contact";
import { getServiceGroups } from "@/lib/content";
import styles from "./Header.module.css";

const NAV = [
  { label: "About", href: "/about/" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  const serviceGroups = getServiceGroups();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dialogTitle = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <p>
            <span>{CONTACT.tagline}</span>
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
          </p>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <div className={styles.left}>
            <button
              type="button"
              className={styles.menuBtn}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span className={styles.burger} aria-hidden />
            </button>
            <Logo />
          </div>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul>
              <li
                className={styles.dropdown}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services/">Services</Link>
                {servicesOpen && (
                  <div className={styles.dropdownPanel}>
                    {serviceGroups.map((g) => (
                      <div key={g.group} className={styles.dropdownGroup}>
                        <p>{g.group}</p>
                        <ul>
                          {g.services.slice(0, 3).map((s) => (
                            <li key={s.slug}>
                              <Link href={`/services/${s.slug}/`}>{s.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link href="/services/" className={styles.viewAll}>
                      View all services →
                    </Link>
                  </div>
                )}
              </li>
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button href="/contact/" variant="primary">
              Consult Now
            </Button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileOverlay} role="presentation">
          <div
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitle}
          >
            <div className={styles.mobileHeader}>
              <h2 id={dialogTitle} className="sr-only">
                Navigation menu
              </h2>
              <Logo />
              <button
                ref={closeRef}
                type="button"
                className={styles.closeBtn}
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                ×
              </button>
            </div>
            <nav className={styles.mobileNav} aria-label="Mobile">
              <Link href="/services/" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact/" variant="primary">
                Consult Now
              </Button>
            </nav>
          </div>
          <button
            type="button"
            className={styles.mobileBackdrop}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
