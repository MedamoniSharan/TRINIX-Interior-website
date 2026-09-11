export type Service = {
  slug: string;
  title: string;
  group: string;
  description: string;
  icon: string;
};

export type Offering = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export type DesignCategory = {
  slug: string;
  title: string;
  image: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  location: string;
  image: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type HeroSlide = {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export type EstimateCard = {
  title: string;
  description: string;
  href: string;
};

export type Capability = {
  title: string;
  description: string;
};

export type SiteContact = {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  tagline: string;
  whatsappPhone: string;
  instagram?: string;
  facebook?: string;
};
