"use client";

import { forwardRef, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import { Logo } from "@/components/ui/Logo";

const menuItems = [
  { label: "Services", href: "/services/" },
  { label: "Projects", href: "/#portfolio" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const Navbar = forwardRef<HTMLElement>(function Navbar(_, ref) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dialogTitle = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const scaleTo = (value: number) => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: value,
      duration: 0.2,
      ease: "power2.out",
    });
  };

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
    <>
      <nav
        ref={ref}
        className="flex items-center justify-between gap-3 py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 w-full relative z-10"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-start">
          <button
            type="button"
            className="md:hidden grid h-11 w-11 place-items-center rounded-full border border-[rgba(30,50,90,0.15)] bg-white/50 text-[rgba(30,50,90,0.9)] backdrop-blur-sm"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Logo height={52} className="[--logo-h:44px] sm:[--logo-h:56px] md:[--logo-h:72px] lg:[--logo-h:88px]" />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 justify-end">
          <Link
            ref={buttonRef}
            href="/contact/"
            onMouseEnter={() => scaleTo(1.02)}
            onMouseLeave={() => scaleTo(1)}
            onMouseDown={() => scaleTo(0.98)}
            onMouseUp={() => scaleTo(1.02)}
            className="flex min-h-11 items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-3 sm:pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group will-change-transform"
          >
            <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-xs md:text-sm font-normal whitespace-nowrap">
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book Consultation</span>
            </span>
          </Link>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[80] bg-[#1a2332]/45 backdrop-blur-[2px] md:hidden"
          role="presentation"
          onClick={() => setMobileOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitle}
            className="absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-[#f7f7f7] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
              <p id={dialogTitle} className="text-sm font-semibold tracking-wide text-[#1a2332]">
                Menu
              </p>
              <button
                ref={closeRef}
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 p-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-[#1a2332] hover:bg-black/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-black/10 p-4">
              <Link
                href="/contact/"
                className="flex min-h-12 items-center justify-center rounded-full bg-[rgba(30,50,90,0.9)] px-4 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
