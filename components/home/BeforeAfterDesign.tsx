"use client";

import { CompareReveal } from "@/components/ui/compare-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BEFORE_IMAGE =
  "https://images.unsplash.com/photo-1581858726788-75bc0f142a1e?auto=format&fit=crop&w=1600&q=80";
const AFTER_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80";

export function BeforeAfterDesign() {
  return (
    <section id="before-after" className="section">
      <div className="container">
        <SectionHeading
          title="Before & after design"
          subtitle="Drag the divider to see how TRINEX turns an empty shell into a finished space."
        />
        <div className="mx-auto flex w-full max-w-3xl items-center justify-center">
          <CompareReveal
            className="w-full overflow-hidden rounded-2xl border border-[var(--motiq-border)]"
            style={{ aspectRatio: "16 / 10" }}
            before={{
              src: BEFORE_IMAGE,
              alt: "Empty interior shell before renovation",
            }}
            after={{
              src: AFTER_IMAGE,
              alt: "Finished living room after TRINEX design",
            }}
            labels={["Before", "After"]}
            defaultPosition={50}
            introSweep
            snapOnDoubleClick={50}
          />
        </div>
      </div>
    </section>
  );
}
