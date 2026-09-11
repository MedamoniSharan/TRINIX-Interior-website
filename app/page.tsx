import { Hero } from "@/components/home/Hero";
import { InteriorAbout } from "@/components/home/InteriorAbout";
import { ProcessMarquee } from "@/components/home/ProcessMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import SqueezeCarouselSection from "@/components/home/SqueezeCarouselSection";
import { BeforeAfterDesign } from "@/components/home/BeforeAfterDesign";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import {
  getFaqs,
  getPortfolio,
  getTestimonials,
} from "@/lib/content";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <InteriorAbout />
      <ProcessMarquee />
      <SqueezeCarouselSection />
      <BeforeAfterDesign />
      <Testimonials items={getTestimonials()} />
      <PortfolioPreview items={getPortfolio()} />
      <FaqAccordion items={getFaqs()} />
    </div>
  );
}
