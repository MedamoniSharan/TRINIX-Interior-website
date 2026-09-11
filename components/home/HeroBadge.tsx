"use client";

import { forwardRef } from "react";

export const HeroBadge = forwardRef<HTMLDivElement>(function HeroBadge(_, ref) {
  return (
    <div
      ref={ref}
      className="flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit"
    >
      <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
        TRINEX by TRINATH DESIGN STUDIO
      </span>
    </div>
  );
});
