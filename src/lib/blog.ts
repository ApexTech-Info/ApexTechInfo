export const blogCategories = [
  "Websites",
  "Mobile Apps",
  "Software",
  "SEO",
  "Digital Marketing",
  "Automation",
  "Tech Tips",
] as const;

export const articles = [
  {
    slug: "business-website-cost",
    title: "How much does a business website cost?",
    category: "Websites",
    description:
      "A practical guide to the factors that shape website scope, effort and project estimates.",
    intro:
      "There isn’t one useful price for every website. A focused service site and a content-heavy platform solve different problems and need different amounts of planning, design and engineering. A reliable estimate starts with the work the site needs to do.",
    sections: [
      {
        heading: "What changes the scope?",
        paragraphs: [
          "The number and complexity of page types matter more than a raw page count. A page assembled from an established template is different from a custom product finder, account area or booking flow.",
          "Content, integrations, migration, accessibility needs, ecommerce, analytics and ongoing editing all affect the work. Existing systems can add useful context, but they can also bring technical constraints that need to be assessed.",
        ],
      },
      {
        heading: "What should an estimate include?",
        paragraphs: [
          "Ask for the goals, deliverables, assumptions, exclusions, milestones, review rounds and payment schedule in writing. Check who supplies content and imagery, who configures third-party services, and who owns the completed work.",
          "Hosting, domains, paid plugins and ongoing support may have separate costs. A proposal should say which are included rather than leaving you to guess.",
        ],
      },
      {
        heading: "How to make a useful first conversation",
        paragraphs: [
          "Bring examples of what is and isn’t working, describe the customers you serve, and name the action you want visitors to take. A rough priority list is more valuable than a long list of features without context.",
          "At ApexTechInfo, we discuss the requirements and provide a written estimate before work begins. There are no fixed package prices on this site, because scope should reflect the actual project.",
        ],
      },
    ],
  },
  {
    slug: "website-project-timeline",
    title: "How long does it take to build a website?",
    category: "Websites",
    description:
      "Understand the project stages, decisions and dependencies that shape a website timeline.",
    intro:
      "A website timeline depends on the experience being built and how quickly key decisions and content can be reviewed. It’s more useful to plan the stages and dependencies than to rely on an unsupported one-size-fits-all deadline.",
    sections: [
      {
        heading: "The stages behind a launch",
        paragraphs: [
          "Discovery clarifies the audience, goals and constraints. Planning turns those needs into a page structure, priorities and written scope. Design establishes the content and interaction patterns before development implements them.",
          "Testing checks important journeys across devices and browsers. Launch preparation covers final content, redirects where needed, analytics and handover.",
        ],
      },
      {
        heading: "What can affect timing?",
        paragraphs: [
          "New features, integrations, content migration and unresolved requirements can expand a project. Reviews also depend on access to decision-makers and timely feedback.",
          "Content is a frequent dependency. If copy, product data, photography or legal review is not ready, development may be complete while the site still cannot launch.",
        ],
      },
      {
        heading: "Plan around decisions, not guesses",
        paragraphs: [
          "A clear project plan sets milestones, review windows, responsibilities and what happens when scope changes. Keep one person responsible for gathering feedback so the team receives consistent direction.",
          "ApexTechInfo agrees milestones and a working schedule in writing after understanding the project. The right timeline is the one attached to a defined scope and realistic dependencies.",
        ],
      },
    ],
  },
  {
    slug: "website-or-mobile-app",
    title: "Website or mobile app: which should you build first?",
    category: "Mobile Apps",
    description:
      "Choose a first product based on customer needs, usage and the problem you need to solve.",
    intro:
      "A mobile app is not automatically the next step for a mobile-friendly business. Start by understanding what people need to do and how often they need to do it; then choose the simplest product that supports that behaviour.",
    sections: [
      {
        heading: "When a website may be the better start",
        paragraphs: [
          "A website is easy to share, can introduce a service to new customers and doesn’t require an installation. It is often a practical first place for product information, enquiries, content and transactions.",
          "If people need to discover you through links or search, a well-structured website can be a useful foundation. It can also test demand before a more costly product is considered.",
        ],
      },
      {
        heading: "When an app can make sense",
        paragraphs: [
          "An app may be appropriate when users return frequently, need device features or benefit from a task-focused experience. Examples include workflows that require offline access, notifications or repeat interactions.",
          "Those capabilities introduce development, release, support and ongoing platform work. They should solve a real user need, not simply be part of a technology wish list.",
        ],
      },
      {
        heading: "Validate the problem first",
        paragraphs: [
          "Interview likely users, map the journey and identify what a first useful release must do. A prototype or small web-based pilot can help test assumptions before committing to a larger build.",
          "Choose the platform after the problem and requirements are clear. ApexTechInfo can help compare options and scope an appropriate first step.",
        ],
      },
    ],
  },
  {
    slug: "custom-software-or-off-the-shelf",
    title: "Custom software or off-the-shelf tools?",
    category: "Software",
    description:
      "Compare ready-made software and custom development against your workflow and long-term needs.",
    intro:
      "Ready-made tools can be quick to adopt and include useful features. Custom software can fit a distinctive process more closely, but brings responsibility for its design, delivery and maintenance. The best choice depends on the workflow and constraints.",
    sections: [
      {
        heading: "Start with the workflow",
        paragraphs: [
          "Document who does each step, what information they use and where work gets delayed or repeated. Separate essential requirements from preferences.",
          "Check whether existing software can support the critical steps through configuration or integrations. Also examine accessibility, data export, permissions and how the tool fits your current systems.",
        ],
      },
      {
        heading: "Understand the trade-offs",
        paragraphs: [
          "Off-the-shelf products may reduce initial build effort, but subscription changes, vendor limits or inflexible workflows can become constraints. Custom tools offer more control but require explicit decisions about hosting, security, updates and support.",
          "Compare costs over time, including setup, subscriptions, migration, integrations and maintenance. Don’t treat only the first invoice as the total cost.",
        ],
      },
      {
        heading: "Build only where the difference matters",
        paragraphs: [
          "A hybrid approach can work: keep commodity tasks in established products and build custom software for the process that differentiates your operation.",
          "A short discovery phase can reveal whether configuration, integration or custom development is the sensible next step. Record assumptions and ownership in the proposal.",
        ],
      },
    ],
  },
  {
    slug: "prepare-for-a-website-project",
    title: "What to prepare before starting a website project",
    category: "Websites",
    description:
      "Gather the goals, content, access and decisions that help a website project begin clearly.",
    intro:
      "You don’t need every page written before the first conversation. A few practical inputs help your team and delivery partner understand the work, avoid assumptions and agree a useful scope.",
    sections: [
      {
        heading: "Clarify the goal and the audience",
        paragraphs: [
          "Write down what the website should help people do, who those people are and what currently gets in their way. Include business constraints such as timing, team capacity and existing technology.",
          "Collect a few examples you like and note what specifically works: the content, navigation, visual tone or checkout flow. Examples are conversation starters, not a substitute for your own requirements.",
        ],
      },
      {
        heading: "Take inventory of content and systems",
        paragraphs: [
          "List existing pages, documents, images, products and contact flows. Identify which material is current, which needs rewriting and who can approve it.",
          "Record domain and hosting access, analytics, email tools and systems that need to connect. Never send passwords through an ordinary enquiry form; arrange a secure access process later.",
        ],
      },
      {
        heading: "Agree the decisions and responsibilities",
        paragraphs: [
          "Choose a primary contact who can gather feedback and confirm decisions. Set realistic time for reviews and identify any required legal, brand or compliance approvals.",
          "A written proposal should define deliverables, assumptions, milestones and ownership before work starts. ApexTechInfo can help turn your initial notes into a clear project plan.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-checkout-review",
    title: "A practical checklist for reviewing an online store",
    category: "Digital Marketing",
    description:
      "Review product information, navigation, mobile use and checkout without guessing at conversion claims.",
    intro:
      "A store should make it straightforward to find products, understand terms and complete an order. This review checklist focuses on observable customer tasks rather than promises about conversion outcomes.",
    sections: [
      {
        heading: "Check product discovery",
        paragraphs: [
          "Review categories, search, filters and product naming. Make sure the information customers need to compare options is visible and consistent.",
          "Test image descriptions, mobile layouts and links between related products. Remove outdated items and make availability information clear.",
        ],
      },
      {
        heading: "Walk through checkout",
        paragraphs: [
          "Complete a test purchase on a phone and desktop. Check the required fields, error messages, shipping choices, taxes, payment steps and order confirmation.",
          "Explain delivery, returns and contact options before customers reach the final step. Never claim a checkout is secure or compliant without the appropriate verification.",
        ],
      },
      {
        heading: "Use evidence to prioritise improvements",
        paragraphs: [
          "Look at support questions and product feedback to identify confusing steps. If analytics are configured appropriately, use them to understand where people leave without treating correlation as proof of cause.",
          "Prioritise fixes by customer impact, effort and operational constraints. Test one meaningful change at a time and record what you learn.",
        ],
      },
    ],
  },
  {
    slug: "backend-api-explained",
    title: "Backend and APIs, explained in plain language",
    category: "Software",
    description:
      "Learn what backends and APIs do and when a business might need custom integration work.",
    intro:
      "A website or app is the part people see. A backend handles behind-the-scenes work such as storing information, applying rules and connecting to other services. An API is one structured way those systems exchange information.",
    sections: [
      {
        heading: "What a backend does",
        paragraphs: [
          "A backend may check a user’s permissions, retrieve an order or save a form response. It also needs decisions about data models, security, availability and operational support.",
          "Not every website needs custom backend development. A managed platform may already provide the features required for the current scope.",
        ],
      },
      {
        heading: "What an API makes possible",
        paragraphs: [
          "An API defines how one application asks another system to perform an action or share information. For example, a product site might connect to inventory or payment services.",
          "Integrations require careful handling of credentials, errors, data formats and changes in the external service. Those dependencies should be identified before work begins.",
        ],
      },
      {
        heading: "Ask about operations too",
        paragraphs: [
          "A sound plan includes who can access the system, how changes are deployed, how failures are detected and who maintains the software.",
          "Documenting the interfaces and responsibilities makes future changes easier to reason about. ApexTechInfo scopes backend work around the product requirements rather than technology for its own sake.",
        ],
      },
    ],
  },
  {
    slug: "useful-ui-ux-review",
    title: "How to review the usability of your website",
    category: "Tech Tips",
    description:
      "A hands-on review for checking navigation, page clarity, forms and keyboard access.",
    intro:
      "You can learn a lot about a website by asking a few people to complete real tasks while you observe. The goal is to discover where the experience is unclear, not to defend design choices.",
    sections: [
      {
        heading: "Write down three real tasks",
        paragraphs: [
          "Choose tasks that matter to customers, such as finding a service, comparing options or asking a question. Give participants a goal without telling them which button to use.",
          "Notice pauses, repeated clicks and questions. Ask what they expected to happen and where they would look next.",
        ],
      },
      {
        heading: "Check common interaction barriers",
        paragraphs: [
          "Review headings, link labels, input labels, error messages and the order of information. Try the site using only a keyboard and check that focus is visible.",
          "Test at narrow screen widths and with zoom. Ensure users can tell what is interactive and can recover from mistakes.",
        ],
      },
      {
        heading: "Turn observations into improvements",
        paragraphs: [
          "Group repeated problems and rank them by task importance and user impact. Fix the largest source of confusion first, then repeat the task to see whether the experience improved.",
          "A small, focused review is often a better first step than redesigning every page at once.",
        ],
      },
    ],
  },
  {
    slug: "business-automation-first-steps",
    title: "Where to start with business automation",
    category: "Automation",
    description:
      "Map repetitive work safely and choose automation opportunities with clear ownership.",
    intro:
      "Automation is most useful when it removes repeated effort without hiding important decisions. Before choosing a tool, map the workflow and understand what can go wrong.",
    sections: [
      {
        heading: "Map the current process",
        paragraphs: [
          "Write down the trigger, each handoff, the information used and the final outcome. Talk with the people doing the work; informal steps often explain why a process behaves as it does.",
          "Record exceptions, approvals and privacy requirements. A workflow that appears repetitive may include decisions that should remain with a person.",
        ],
      },
      {
        heading: "Pick one bounded task",
        paragraphs: [
          "Choose a common, low-risk process with a clear owner and outcome. Define success in operational terms such as fewer duplicate entries or a clearer handoff.",
          "Decide what the automation should do when data is missing, a service is unavailable or a person needs to review an exception.",
        ],
      },
      {
        heading: "Test and maintain it",
        paragraphs: [
          "Run test cases, review access permissions and document how to pause or recover the workflow. Inform affected staff and provide a manual fallback where appropriate.",
          "Assign someone to review the process as connected tools and business requirements change.",
        ],
      },
    ],
  },
  {
    slug: "seo-foundations-for-business",
    title: "SEO basics every business website should get right",
    category: "SEO",
    description:
      "Understand useful technical and content foundations for search without ranking promises.",
    intro:
      "Search optimisation helps search engines interpret pages and helps people decide whether a result is useful. No checklist can guarantee a ranking, but a sound foundation makes a website clearer and easier to maintain.",
    sections: [
      {
        heading: "Make the site understandable",
        paragraphs: [
          "Use descriptive page titles, meaningful headings and internal links that explain where they lead. Give each page a clear purpose and avoid duplicating content just to target similar phrases.",
          "Keep important pages accessible through navigation and check that crawlers can retrieve them. Add a sitemap and correct robots rules for the production site.",
        ],
      },
      {
        heading: "Make pages useful to people",
        paragraphs: [
          "Answer the questions customers actually ask, explain services in plain language and keep claims accurate. Content should help a person make a decision, not repeat keywords unnaturally.",
          "Use descriptive image alternatives when images convey information and ensure text remains readable on mobile devices.",
        ],
      },
      {
        heading: "Measure carefully",
        paragraphs: [
          "Set up analytics and search tools responsibly, then review impressions, clicks and enquiries in context. A change in traffic alone does not show whether the business goal improved.",
          "Technical changes, competition and search systems affect results over time. Treat SEO as ongoing learning and never rely on guaranteed ranking promises.",
        ],
      },
    ],
  },
  {
    slug: "website-maintenance-plan",
    title: "What belongs in a website maintenance plan?",
    category: "Tech Tips",
    description: "Plan updates, backups, monitoring and ownership for an existing website.",
    intro:
      "A maintenance plan should describe concrete responsibilities and response expectations, not just say that a site is looked after. The right plan depends on the technology, risk and importance of the website.",
    sections: [
      {
        heading: "Keep dependencies and access current",
        paragraphs: [
          "Know which framework, plugins and third-party services the site uses. Apply updates after checking compatibility and keep administrator access limited to people who need it.",
          "Record who owns the domain, hosting, source code and vendor accounts. Keep recovery access available through a secure process.",
        ],
      },
      {
        heading: "Plan recovery and monitoring",
        paragraphs: [
          "Decide what is backed up, how often, how long it is retained and how a restore is tested. A backup that has never been restored may not be usable when needed.",
          "Choose availability and error checks that match the site's purpose, then define who is notified and what response is expected.",
        ],
      },
      {
        heading: "Write down the support scope",
        paragraphs: [
          "Clarify what counts as maintenance, how new requests are estimated and which response times are included. Support agreements should reflect actual team capacity.",
          "A regular review helps catch outdated content, failing integrations and technical changes before they disrupt important customer journeys.",
        ],
      },
    ],
  },
  {
    slug: "plan-a-mobile-app-project",
    title: "How to plan a mobile app project",
    category: "Mobile Apps",
    description:
      "Define app users, essential workflows, platform needs and launch responsibilities before development.",
    intro:
      "A mobile app project is easier to scope when the team agrees who it serves and which tasks it must support. Starting with a long feature wishlist can hide the product decisions that matter most.",
    sections: [
      {
        heading: "Define users and core tasks",
        paragraphs: [
          "Describe the intended users, their context and the task they need to complete. Identify what they do today and why a mobile app would be meaningfully better.",
          "Separate must-have workflows from later ideas. Sketching the journey can expose account, permissions, notification or offline requirements early.",
        ],
      },
      {
        heading: "Choose platform and integration needs",
        paragraphs: [
          "Decide which devices and operating systems are required based on the audience and technical constraints. Consider accessibility, device capabilities and how the app will connect to existing services.",
          "Account for backend work, analytics, privacy reviews and third-party service costs alongside the interface itself.",
        ],
      },
      {
        heading: "Plan release and ongoing care",
        paragraphs: [
          "A launch plan should cover test users, feedback, app-store materials, support and how future updates are managed. Platform review processes and release timing can vary.",
          "Agree the scope, responsibilities and support expectations in writing. ApexTechInfo can help shape a practical first release before committing to a larger roadmap.",
        ],
      },
    ],
  },
] as const;

export type Article = (typeof articles)[number];
