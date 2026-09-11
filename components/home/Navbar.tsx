"use client";

import { forwardRef, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

  const scaleTo = (value: number) => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: value,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <nav
      ref={ref}
      className="flex items-center justify-between py-4 md:py-5 px-6 md:px-10 w-full relative z-10"
    >
      <div className="flex-1 flex justify-start">
        <Logo height={64} />
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

      <div className="flex-1 flex justify-end">
        <Link
          ref={buttonRef}
          href="/contact/"
          onMouseEnter={() => scaleTo(1.02)}
          onMouseLeave={() => scaleTo(1)}
          onMouseDown={() => scaleTo(0.98)}
          onMouseUp={() => scaleTo(1.02)}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group will-change-transform"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Consultation</span>
        </Link>
      </div>
    </nav>
  );
});
