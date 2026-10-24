export { pageMeta } from "@/lib/site-config";

type ServiceSummary = { slug: string; title: string; text: string };
type ServiceGroup = { title: string; description: string; services: ServiceSummary[] };

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Design & Build",
    description:
      "Websites, online stores, mobile apps and custom software, shaped around how your business works.",
    services: [
      {
        slug: "website-development",
        title: "Website Development",
        text: "Fast, mobile-friendly websites that turn visitors into customers.",
      },
      {
        slug: "ecommerce-development",
        title: "E-Commerce Development",
        text: "Online stores that are easy to buy from and easy to manage.",
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        text: "Android and iOS apps your customers will actually use.",
      },
      {
        slug: "custom-software-development",
        title: "Custom Software Development",
        text: "Software built around the way your business works.",
      },
      {
        slug: "backend-api-development",
        title: "Backend & API Development",
        text: "The secure engine behind your website and app.",
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        text: "Interfaces people understand in seconds.",
      },
    ],
  },
  {
    title: "Grow",
    description: "Get found, reach the right audience and turn visits into enquiries.",
    services: [
      {
        slug: "seo-services",
        title: "SEO Services",
        text: "Get found by customers already searching for you.",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        text: "Campaigns that bring in leads, not just clicks.",
      },
    ],
  },
  {
    title: "Run & Automate",
    description: "Keep your systems looked after and hand repetitive work to software.",
    services: [
      {
        slug: "business-automation",
        title: "Business Automation",
        text: "Hand repetitive work to software.",
      },
      {
        slug: "cloud-it-solutions",
        title: "Cloud & IT Solutions",
        text: "Reliable hosting, backups and security.",
      },
      {
        slug: "maintenance-support",
        title: "Maintenance & Support",
        text: "We stay after launch.",
      },
    ],
  },
];

export const services = serviceGroups.flatMap((group) =>
  group.services.map((service) => ({ ...service, group: group.title })),
);

export const benefits = [
  "Written quote before work begins",
  "Weekly progress updates",
  "You own your code and content",
  "Support after launch",
];

export const reasonsToChooseUs = [
  [
    "We start with your business, not our tech.",
    "We learn how you work, who your customers are and what is slowing you down before recommending a solution.",
  ],
  [
    "One team, start to finish.",
    "Design, development, SEO and support work together, without hand-offs or finger-pointing.",
  ],
  [
    "Clear quotes, clear milestones.",
    "You get the scope, timeline and price in writing before work begins, plus a progress update every week.",
  ],
  [
    "Built to grow with you.",
    "Clean code and considered architecture leave room for more users and features as your business grows.",
  ],
  ["You own what you pay for.", "Once paid for, your source code, designs and content are yours."],
  [
    "We stay after launch.",
    "Bug fixes, updates, monitoring and improvements can continue on a support plan that fits your needs.",
  ],
];

export const projectSteps = [
  {
    title: "Discover",
    text: "A free call to understand your goals, customers and constraints.",
    outcome: "A clear brief of what to build first, and what to skip.",
  },
  {
    title: "Plan & design",
    text: "We map features, timeline and cost, then design the screens so you can review the product before development starts.",
    outcome: "A written proposal and a clickable prototype.",
  },
  {
    title: "Build",
    text: "Development happens in short sprints with a weekly demo, so you know where things stand.",
    outcome: "Working software you can try as it grows.",
  },
  {
    title: "Test & launch",
    text: "We test on real devices, check speed and security, then launch and hand over what your team needs.",
    outcome: "A live product and a walkthrough for your team.",
  },
  {
    title: "Support & grow",
    text: "After launch we monitor, fix and improve. SEO and marketing can help bring in customers.",
    outcome: "A product that keeps getting better.",
  },
];

export const audiences = [
  {
    title: "Startups",
    text: "Launch a first version quickly, learn from real users, then scale.",
    services: ["Mobile App Development", "Custom Software Development", "UI/UX Design"],
  },
  {
    title: "Small and local businesses",
    text: "Look professional online, show up on Google and make it easy for customers to contact you.",
    services: ["Website Development", "SEO Services", "Digital Marketing"],
  },
  {
    title: "Retail and D2C brands",
    text: "Sell online with a fast store, convenient payments and smooth order tracking.",
    services: ["E-Commerce Development", "Business Automation", "Digital Marketing"],
  },
  {
    title: "Clinics and service businesses",
    text: "Use online booking, reminders and follow-ups to make it easier for customers to book.",
    services: ["Website Development", "Business Automation", "Mobile App Development"],
  },
  {
    title: "Schools and coaching institutes",
    text: "Bring admissions, fee collection and parent communication into a clearer digital experience.",
    services: ["Website Development", "Custom Software Development", "Business Automation"],
  },
  {
    title: "Growing companies",
    text: "Replace spreadsheets and manual work with software built around your process.",
    services: ["Custom Software Development", "Backend & API Development", "Cloud & IT Solutions"],
  },
];

export const faqs = [
  {
    question: "How much does a website or app cost?",
    answer:
      "It depends on what you need. A simple business website and a custom platform are very different projects. Tell us your requirements and we will send a written estimate with a clear breakdown, so there are no surprises.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Timing depends on scope, content and feedback. We agree a timeline with milestones before work begins, so you know what to expect.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We can help you choose a first version that fits your budget and leaves room to grow.",
  },
  {
    question: "Who owns the website or code when the project is done?",
    answer: "You do. Once the project is paid for, the source code, designs and content are yours.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Every site we build is fast, mobile-friendly and structured for search. Ranking well takes ongoing effort, though, and nobody can honestly guarantee page-one results. Our SEO service can help you improve your visibility over time.",
  },
  {
    question: "Do you provide hosting, maintenance and support?",
    answer:
      "Yes. We can host your project and look after it afterwards, with updates, backups, security and fixes on a plan that suits your needs. The proposal will make any included support period clear.",
  },
  {
    question: "Can you improve a website or app someone else built?",
    answer: "Yes. We can review, redesign, speed up, fix or extend what you already have.",
  },
  {
    question: "How will we stay in touch during the project?",
    answer:
      "You will have one point of contact, a weekly progress update and a shared view of what is done and what is next. We can agree on the best channel for quick questions.",
  },
];
