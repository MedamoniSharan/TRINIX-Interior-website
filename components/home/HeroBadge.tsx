"use client";

import { forwardRef } from "react";

export const HeroBadge = forwardRef<HTMLDivElement>(function HeroBadge(_, ref) {
  return (
    <div
      ref={ref}
      className="mx-auto mb-3 sm:mb-4 w-full max-w-[min(100%,44rem)] px-1"
    >
      <h1 className="text-[clamp(1.45rem,6vw,3.5rem)] md:text-[3.75rem] lg:text-[4.5rem] font-semibold text-[#1a2332] text-center leading-[1.1] tracking-tight [text-shadow:0_1px_24px_rgba(255,255,255,0.55)]">
        TRINEX by TRINATH DESIGN STUDIO
      </h1>
    </div>
  );
});
