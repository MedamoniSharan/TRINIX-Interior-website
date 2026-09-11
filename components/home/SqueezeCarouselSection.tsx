"use client";

import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import { Reveal } from "@/components/motion/Reveal";
import { getServices } from "@/lib/content";

export const squeezeCarouselSettings = {
  height: "clamp(280px, 48cqi, 560px)",
  gap: 18,
  slatGap: 10,
  slatWidth: 10,
  radius: 8,
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
      className="section w-full overflow-hidden bg-background px-4 py-12 md:px-8 md:py-16"
    >
      <div className="container mx-auto max-w-[1440px]">
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
