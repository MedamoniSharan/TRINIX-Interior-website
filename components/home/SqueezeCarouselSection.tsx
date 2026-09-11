"use client";

import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import { Reveal } from "@/components/motion/Reveal";
import { getServices } from "@/lib/content";

export const squeezeCarouselSettings = {
  height: 320,
  gap: 16,
  slatGap: 8,
  slatWidth: 8,
  radius: 6,
  duration: 1000,
  hoverGrow: true,
  autoplay: false,
  interval: 6000,
  controls: true,
};

type SqueezeCarouselSectionProps = Partial<typeof squeezeCarouselSettings>;

/** A wordmark for the corner of the open panel. */
const mark = (text: string) => (
  <span className="text-sm font-medium tracking-tight text-white">{text}</span>
);

const shortLabel: Record<string, string> = {
  "architectural-services": "Architecture",
  "structural-design-services": "Structural",
  "residential-interior-design-projects": "Residential",
  "commercial-interiors-projects": "Commercial",
  "construction-activities": "Construction",
  "turnkey-projects": "Turnkey",
  "project-management-services": "Management",
};

function buildServiceSlides(): SqueezeSlide[] {
  return getServices().map((service) => ({
    id: service.slug,
    title: service.title,
    description: service.description,
    action: "Explore service",
    href: `/services/${service.slug}/`,
    overlay: mark(shortLabel[service.slug] ?? service.group),
    image: service.image,
    imageAlt: service.imageAlt,
  }));
}

export default function SqueezeCarouselSection(props: SqueezeCarouselSectionProps) {
  const options = { ...squeezeCarouselSettings, ...props };
  const slides = buildServiceSlides();

  return (
    <section
      id="featured-spaces"
      className="section w-full overflow-hidden bg-background px-6 py-10 md:px-10"
    >
      <div className="container mx-auto max-w-[1200px]">
        <Reveal direction="right">
          <SqueezeCarousel
            slides={slides}
            label="Our services"
            accent="var(--color-brand)"
            accentForeground="#ffffff"
            {...options}
          />
        </Reveal>
      </div>
    </section>
  );
}
