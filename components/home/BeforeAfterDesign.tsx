"use client";

import { CompareReveal } from "@/components/ui/compare-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Parallax, Reveal } from "@/components/motion/Reveal";

const BEFORE_IMAGE = "/images/before-after/before-lounge.jpg";
const AFTER_IMAGE = "/images/before-after/after-construction.jpg";

export function BeforeAfterDesign() {
  return (
    <section id="before-after" className="section overflow-hidden">
      <div className="container">
        <Reveal direction="down">
          <SectionHeading
            title="Before & after design"
            subtitle="Drag the divider to see how TRINEX turns an empty shell into a finished space."
          />
        </Reveal>
        <Reveal direction="scale" delay={0.12}>
          <Parallax y={36} scale={[0.97, 1.02]} className="mx-auto w-full max-w-3xl">
            <div className="flex w-full items-center justify-center">
              <CompareReveal
                className="w-full overflow-hidden rounded-2xl border border-[var(--motiq-border)]"
                style={{ aspectRatio: "16 / 10" }}
                before={{
                  src: BEFORE_IMAGE,
                  alt: "Existing lounge interior before TRINEX redesign",
                }}
                after={{
                  src: AFTER_IMAGE,
                  alt: "Project execution and fit-out after design kickoff",
                }}
                labels={["Before", "After"]}
                defaultPosition={50}
                introSweep
                snapOnDoubleClick={50}
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
