import servicesData from "@/data/services.json";
import offeringsData from "@/data/offerings.json";
import categoriesData from "@/data/categories.json";
import whyUsData from "@/data/why-us.json";
import testimonialsData from "@/data/testimonials.json";
import insightsData from "@/data/insights.json";
import portfolioData from "@/data/portfolio.json";
import faqsData from "@/data/faqs.json";
import heroData from "@/data/hero.json";
import estimatesData from "@/data/estimates.json";
import capabilitiesData from "@/data/capabilities.json";
import companyData from "@/data/company.json";
import type {
  Capability,
  DesignCategory,
  EstimateCard,
  Faq,
  HeroSlide,
  Insight,
  Offering,
  PortfolioItem,
  Service,
  Testimonial,
  WhyUsItem,
} from "@/lib/types";

export type CompanyInfo = {
  name: string;
  shortName: string;
  tagline: string;
  process: string;
  summary: string;
  paragraphs: string[];
  processSteps: { step: string; desc: string }[];
};

export function getCompany(): CompanyInfo {
  return companyData as CompanyInfo;
}

export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getServices().find((s) => s.slug === slug);
}

export function getServiceGroups(): { group: string; services: Service[] }[] {
  const services = getServices();
  const groups = [...new Set(services.map((s) => s.group))];
  return groups.map((group) => ({
    group,
    services: services.filter((s) => s.group === group),
  }));
}

export function getOfferings(): Offering[] {
  return offeringsData as Offering[];
}

export function getDesignCategories(): DesignCategory[] {
  return categoriesData as DesignCategory[];
}

export function getWhyUs(): WhyUsItem[] {
  return whyUsData as WhyUsItem[];
}

export function getTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}

export function getInsights(): Insight[] {
  return insightsData as Insight[];
}

export function getPortfolio(): PortfolioItem[] {
  return portfolioData as PortfolioItem[];
}

export function getFaqs(): Faq[] {
  return faqsData as Faq[];
}

export function getHeroSlides(): HeroSlide[] {
  return heroData as HeroSlide[];
}

export function getEstimateCards(): EstimateCard[] {
  return estimatesData as EstimateCard[];
}

export function getCapabilities(): Capability[] {
  return capabilitiesData as Capability[];
}
