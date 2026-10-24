export const portfolioCategories = [
  "Websites",
  "Mobile Apps",
  "Software",
  "E-Commerce",
  "Marketing & SEO",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type CaseStudy = {
  slug: string;
  clientName: string;
  industry: string;
  category: PortfolioCategory;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  quote?: { text: string; attribution: string };
  image?: { src: string; alt: string };
  approved: boolean;
};

export const caseStudies: CaseStudy[] = [];

export const editableCaseStudyTemplate: CaseStudy = {
  slug: "[approved-project-slug]",
  clientName: "[approved client name]",
  industry: "[verified industry]",
  category: "Websites",
  challenge: "[client-approved description of the challenge]",
  solution: "[plain-language description of the work delivered]",
  result: "[verified result, or remove this field if none is available]",
  technologies: [],
  quote: { text: "[client-approved quote]", attribution: "[approved name, role and company]" },
  approved: false,
};
