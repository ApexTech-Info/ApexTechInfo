export type BlogArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  searchTerm: string;
  excerpt: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
};

export const blogCategories = [
  "Websites",
  "Mobile Apps",
  "Software",
  "SEO",
  "Digital Marketing",
  "Automation",
  "Tech Tips",
];

export const articles: BlogArticle[] = [
  {
    slug: "business-website-cost-india",
    title: "How Much Does a Business Website Cost in India? (2026 Guide)",
    seoTitle: "Business Website Cost in India (2026)",
    category: "Websites",
    searchTerm: "website development cost India",
    excerpt:
      "A practical way to estimate website scope, compare quotes and understand what affects the final cost.",
    sections: [
      {
        heading: "There is no useful one-size-fits-all price",
        paragraphs: [
          "A small site with a few service pages is a different project from a store, booking system or customer portal. A quote only becomes meaningful when it describes what is being built, what is not included and who is supplying the content.",
          "Instead of comparing a single headline number, compare the scope behind it. Ask whether the estimate covers planning, design, development, content entry, testing, launch and post-launch help.",
        ],
      },
      {
        heading: "What changes the budget",
        paragraphs: [
          "These are the details that tend to make the largest difference to effort and cost:",
        ],
        points: [
          "How many page types and unique layouts the site needs",
          "Whether customers need to book, pay, sign in or manage an account",
          "How much content and product information must be written or migrated",
          "Whether the site connects to existing tools such as a CRM or inventory system",
          "The level of testing, accessibility and ongoing support required",
        ],
      },
      {
        heading: "How to request a useful estimate",
        paragraphs: [
          "Write down the problem you want the website to solve, the people who will use it and the actions you want them to take. Share examples you like, the content you already have and any tools the site must connect to.",
          "Ask each provider for a written scope, timeline, payment milestones, exclusions and ownership terms. A clear proposal should help you make a decision even before you choose a vendor.",
        ],
      },
    ],
  },
  {
    slug: "mobile-app-development-cost-india",
    title: "Mobile App Development Cost in India: What to Expect in 2026",
    seoTitle: "Mobile App Cost in India: 2026 Guide",
    category: "Mobile Apps",
    searchTerm: "app development cost India",
    excerpt:
      "Understand the product, platform and ongoing work behind an app estimate before you commit to building.",
    sections: [
      {
        heading: "Start with the job the app must do",
        paragraphs: [
          "The price of an app depends less on the word app and more on the work it must handle. A simple information tool differs from a two-sided marketplace with payments, delivery tracking, user roles and a staff dashboard.",
          "Before estimating, define the user, the main task and what a successful first release needs to prove. This keeps early spending focused on learning rather than building every possible feature.",
        ],
      },
      {
        heading: "The main cost drivers",
        paragraphs: ["A proposal should make these choices visible:"],
        points: [
          "Android, iOS or both, and whether native or cross-platform development fits",
          "The number of user types, workflows and integrations",
          "Backend services, admin tools, payments and notifications",
          "Design research, accessibility, device testing and store submission",
          "Analytics, crash reporting, maintenance and future updates",
        ],
      },
      {
        heading: "Plan for the product after launch",
        paragraphs: [
          "App stores are not the finish line. Operating systems change, users report issues and product priorities evolve. Budget for maintenance, monitoring and a process for deciding which improvements matter next.",
          "Request a written estimate that separates the first release from later phases. You should be able to see what you will receive, what assumptions the estimate makes and how changes affect the timeline.",
        ],
      },
    ],
  },
  {
    slug: "website-or-mobile-app",
    title: "Website or Mobile App: Which Should Your Business Build First?",
    seoTitle: "Website or App: What Should You Build First?",
    category: "Mobile Apps",
    searchTerm: "website vs mobile app for business",
    excerpt:
      "Choose the channel that solves a real customer problem, not the one that sounds most impressive.",
    sections: [
      {
        heading: "A website is often the better first step",
        paragraphs: [
          "A website is easy to share, works across devices and gives customers a place to understand your offer. It is often the practical starting point when people need to discover you, compare services, request a quote or make an occasional purchase.",
          "A well-structured website can also help search engines understand your business. That matters when customers are actively looking for the service or product you provide.",
        ],
      },
      {
        heading: "An app earns its place through repeat use",
        paragraphs: [
          "An app can make sense when customers return often and need a task that benefits from a persistent account, device features, offline access or timely notifications. A booking service, internal workflow or frequently used customer tool may fit.",
          "An app also brings extra work: separate platform decisions, store reviews, updates, analytics and support. The convenience needs to be valuable enough that people will install and keep using it.",
        ],
      },
      {
        heading: "Use evidence to decide",
        paragraphs: ["Before choosing, answer a few questions:"],
        points: [
          "How often will the same customer return to complete the task?",
          "Does the task need phone features or reliable offline use?",
          "Can a responsive website solve the problem with less friction?",
          "What is the smallest release that can test demand?",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-website-cost-platforms",
    title: "E-Commerce Website Cost: Shopify, WooCommerce or Custom?",
    seoTitle: "E-Commerce Website Cost: Platform Guide",
    category: "Websites",
    searchTerm: "ecommerce website development cost",
    excerpt:
      "Compare the operating trade-offs of hosted platforms, open-source stores and custom commerce builds.",
    sections: [
      {
        heading: "Choose for the way you will run the store",
        paragraphs: [
          "The best platform depends on your catalog, team, checkout needs and the systems you already use. A platform that is inexpensive to launch may require paid apps or manual work later; a custom build may add flexibility but also adds responsibility.",
          "Estimate the full operating picture, not only the initial build. Include payment processing, shipping, taxes, product management, support and the time your team spends on routine updates.",
        ],
      },
      {
        heading: "Hosted, open-source or custom",
        paragraphs: [
          "Hosted services can reduce infrastructure work and provide an integrated admin experience. Open-source platforms offer more control and a broad extension ecosystem, but hosting, updates and compatibility need active care.",
          "A custom store can fit specific workflows or integrations, but it should be chosen for a clear business reason. Custom checkout and commerce systems have long-term security, maintenance and testing needs.",
        ],
      },
      {
        heading: "Questions to ask before you build",
        points: [
          "How many products, options and inventory locations do you manage?",
          "Which payment, tax, shipping and accounting tools must connect?",
          "Who will update products, offers and order information?",
          "What support and security work is included after launch?",
        ],
        paragraphs: [
          "A provider should explain the platform recommendation and its trade-offs in plain language before you approve the scope.",
        ],
      },
    ],
  },
  {
    slug: "choose-web-development-company",
    title: "How to Choose a Web Development Company (and Red Flags to Avoid)",
    seoTitle: "Choose a Web Development Company",
    category: "Tech Tips",
    searchTerm: "how to choose a web development company",
    excerpt:
      "A straightforward checklist for comparing teams, proposals and ownership terms before a website project.",
    sections: [
      {
        heading: "Look for a clear process, not just a polished pitch",
        paragraphs: [
          "A reliable partner asks about your business, customers and constraints before recommending technology. They can explain what the project includes, who makes decisions, how feedback works and what happens when requirements change.",
          "Ask to see relevant work and clarify which parts the team actually delivered. A portfolio should help you understand their approach, not substitute for a conversation about your needs.",
        ],
      },
      {
        heading: "What a good proposal makes clear",
        points: [
          "Deliverables, exclusions and assumptions",
          "Milestones, review points and the people responsible",
          "Content, hosting, third-party services and ongoing costs",
          "How source code, design files and accounts are handed over",
          "Support options, response expectations and change requests",
        ],
        paragraphs: [
          "You should receive a written scope, timeline and estimate before work starts, with enough detail to compare it fairly with another proposal.",
        ],
      },
      {
        heading: "Red flags worth discussing",
        paragraphs: [
          "Be cautious of guaranteed search rankings, a fixed quote without a defined scope, vague ownership terms or pressure to approve before your questions are answered. A promise of a very fast launch is not meaningful unless content, review time and testing are included in the plan.",
          "Choose the team that communicates clearly, names trade-offs honestly and gives you a practical way to stay involved from planning through launch.",
        ],
      },
    ],
  },
];

export const editorialPlan = [
  {
    title: "12 Things Every Business Website Must Have",
    category: "Websites",
    status: "Draft outline",
  },
  {
    title: "SEO for Small Businesses: 9 Steps to Get More Customers from Google",
    category: "SEO",
    status: "Draft outline",
  },
  {
    title: "Local SEO: How to Show Up on Google Maps in Your City",
    category: "SEO",
    status: "Draft outline",
  },
  {
    title: "WhatsApp Automation for Business: 7 Tasks to Stop Doing by Hand",
    category: "Automation",
    status: "Draft outline",
  },
  {
    title: "Custom Software vs Ready-Made Software: How to Decide",
    category: "Software",
    status: "Draft outline",
  },
  {
    title: "How Long Does It Take to Build a Website? Realistic Timelines",
    category: "Websites",
    status: "Draft outline",
  },
  {
    title: "8 Signs Your Website Is Costing You Customers",
    category: "Digital Marketing",
    status: "Draft outline",
  },
];
