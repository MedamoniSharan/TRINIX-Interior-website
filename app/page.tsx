import { Hero } from "@/components/home/Hero";
import { InteriorAbout } from "@/components/home/InteriorAbout";
import { ProcessMarquee } from "@/components/home/ProcessMarquee";
import { InteriorQualitySection } from "@/components/home/InteriorQualitySection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import SqueezeCarouselSection from "@/components/home/SqueezeCarouselSection";
import { BeforeAfterDesign } from "@/components/home/BeforeAfterDesign";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import {
  getFaqs,
  getPortfolio,
} from "@/lib/content";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <InteriorAbout />
      <ProcessMarquee />
      <InteriorQualitySection />
      <SqueezeCarouselSection />
      <BeforeAfterDesign />
      <PortfolioPreview items={getPortfolio()} />
      <FaqAccordion items={getFaqs()} />
    </div>
  );
}
