"use client";

import { forwardRef } from "react";

export const HeroBadge = forwardRef<HTMLDivElement>(function HeroBadge(_, ref) {
  return (
    <div
      ref={ref}
      className="mx-auto mb-3 sm:mb-4 w-full max-w-[min(100%,44rem)] px-1"
    >
      <h1 className="text-center text-[#1a2332] tracking-tight [text-shadow:0_1px_24px_rgba(255,255,255,0.55)]">
        <span className="block text-[clamp(2.5rem,12vw,5.5rem)] md:text-7xl lg:text-[6rem] font-semibold leading-[0.95]">
          TRINEX
        </span>
        <span className="mt-1 sm:mt-2 block text-[clamp(0.85rem,3.2vw,1.65rem)] md:text-2xl lg:text-[1.85rem] font-medium leading-snug tracking-[0.04em]">
          by TRINATH DESIGN STUDIO
        </span>
      </h1>
    </div>
  );
});
