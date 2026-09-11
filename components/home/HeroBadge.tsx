"use client";

import { forwardRef } from "react";

export const HeroBadge = forwardRef<HTMLDivElement>(function HeroBadge(_, ref) {
  return (
    <div
      ref={ref}
      className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit max-w-[min(100%,22rem)]"
    >
      <span className="text-[11px] sm:text-[13px] md:text-[14px] font-normal text-[rgba(30,50,90,0.9)] text-center leading-snug text-balance">
        <span className="sm:hidden">TRINEX by TDS</span>
        <span className="hidden sm:inline">TRINEX by TRINATH DESIGN STUDIO</span>
      </span>
    </div>
  );
});
