"use client";

import { forwardRef } from "react";
import { Sparkles } from "lucide-react";

export const HeroBadge = forwardRef<HTMLDivElement>(function HeroBadge(_, ref) {
  return (
    <div
      ref={ref}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit"
    >
      <Sparkles className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
        <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
          Next-Gen 3D Architectural Studio
        </span>
    </div>
  );
});
