"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      {!isHome && <Header />}
      <main id="main" className="site-main">
        {children}
      </main>
      <Footer />
      {!isHome && <FloatingSidebar />}
    </>
  );
}
