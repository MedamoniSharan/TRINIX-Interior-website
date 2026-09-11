"use client";

import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import { Reveal } from "@/components/motion/Reveal";

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

const slides: SqueezeSlide[] = [
  {
    id: "residence",
    title: "A home that feels finished on day one.",
    description:
      "From layout to lighting, every residential project is planned so the first walkthrough already feels lived-in.",
    action: "Explore residences",
    href: "/services/",
    overlay: mark("Residences"),
    image: "/images/featured/residence.jpg",
    imageAlt: "Bright modern living room with soft neutrals and large windows",
  },
  {
    id: "kitchen",
    title: "Kitchens built around how you cook.",
    description:
      "Modular storage, durable finishes, and clear work zones so daily cooking stays easy — and looks intentional.",
    action: "See kitchen work",
    href: "/#portfolio",
    overlay: mark("Kitchens"),
    image: "/images/featured/kitchen.jpg",
    imageAlt: "Contemporary kitchen with warm finishes and clean counters",
  },
  {
    id: "office",
    title: "Workspaces people actually want to use.",
    description:
      "Commercial interiors that balance focus zones, collaboration, and brand presence without feeling cold.",
    action: "View commercial",
    href: "/services/",
    overlay: mark("Offices"),
    image: "/images/featured/office.jpg",
    imageAlt: "Open office interior with desks and floor-to-ceiling windows",
  },
  {
    id: "bedroom",
    title: "Quiet rooms that hold their calm.",
    description:
      "Soft materials, layered light, and storage that disappears — bedrooms designed for rest, not display alone.",
    action: "Browse projects",
    href: "/#portfolio",
    overlay: mark("Bedrooms"),
    image: "/images/featured/bedroom.jpg",
    imageAlt: "Minimal bedroom with linen bedding and natural light",
  },
  {
    id: "showroom",
    title: "Retail floors that guide the eye.",
    description:
      "Showroom and fit-out work that puts product first — clear circulation, strong lighting, and brand-true finishes.",
    action: "Get a quote",
    href: "/contact/",
    overlay: mark("Retail"),
    image: "/images/featured/retail.jpg",
    imageAlt: "Retail store interior with clean display shelving",
  },
  {
    id: "lounge",
    title: "Living spaces that stretch with guests.",
    description:
      "Flexible seating, durable fabrics, and layouts that host easily without losing everyday comfort.",
    action: "Talk to us",
    href: "/contact/",
    overlay: mark("Living"),
    image: "/images/featured/living.jpg",
    imageAlt: "Elegant living room with sofa, coffee table, and natural light",
  },
  {
    id: "exterior",
    title: "Exteriors that match the interior story.",
    description:
      "Facades, entries, and outdoor seating planned as part of the same design language as the rooms inside.",
    action: "Start a project",
    href: "/contact/",
    overlay: mark("Exteriors"),
    image: "/images/featured/exterior.jpg",
    imageAlt: "Modern house exterior with clean lines and landscaped entry",
  },
];

export default function SqueezeCarouselSection(props: SqueezeCarouselSectionProps) {
  const options = { ...squeezeCarouselSettings, ...props };

  return (
    <section
      id="featured-spaces"
      className="section w-full overflow-hidden bg-background px-6 py-10 md:px-10"
    >
      <div className="container mx-auto max-w-[1200px]">
        <Reveal direction="right">
          <SqueezeCarousel
            slides={slides}
            label="Featured spaces"
            accent="var(--color-brand)"
            accentForeground="#ffffff"
            {...options}
          />
        </Reveal>
      </div>
    </section>
  );
}
