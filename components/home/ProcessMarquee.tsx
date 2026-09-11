"use client";

import { Parallax, Reveal } from "@/components/motion/Reveal";

const PHRASES = [
  "Design",
  "Plan",
  "Visualize",
  "Execute",
  "Finish",
  "Handover",
  "Turnkey Interiors",
  "3D Visualization",
  "Hyderabad",
];

/** Horizontal parallax strip — drifts left-to-right against scroll. */
export function ProcessMarquee() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-black/5 bg-[#ebebeb] py-7 md:py-9"
    >
      <Reveal direction="fade">
        <Parallax x={120} y={0} className="w-[140%]">
          <div className="flex w-max items-center gap-8 md:gap-12 px-6 whitespace-nowrap">
            {[...PHRASES, ...PHRASES].map((phrase, i) => (
              <span
                key={`${phrase}-${i}`}
                className="inline-flex items-center gap-8 md:gap-12 text-[clamp(1.4rem,3vw,2.4rem)] font-normal tracking-tight text-[#1a2332]/55"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
                }}
              >
                {phrase}
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c17f3a]/80" />
              </span>
            ))}
          </div>
        </Parallax>
      </Reveal>
    </section>
  );
}
