export type ProjectItem = {
  title: string;
  summary: string;
  role: string;
  tech: string[];
  image: {
    src: string;
    alt: string;
  };
  links?: {
    live?: string;
    github?: string;
  };
};

export type CaseStudyItem = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  role: string;
  tech: string[];
};

export const projects: ProjectItem[] = [
  {
    title: "Movie Seat Booking",
    summary:
      "A booking platform focused on clean seat selection, responsive performance, and a user-friendly cinema reservation flow.",
    role: "Full-stack development and frontend architecture",
    tech: ["Next.js", "React.js", "Node.js", "Responsive UI"],
    image: {
      src: "/projects/atlas-commerce.svg",
      alt: "Movie seat booking platform concept with booking flow and responsive interface"
    },
    links: {
      live: "https://madiotic.com"
    }
  },
  {
    title: "AI Voice Agent SaaS",
    summary:
      "A SaaS product built around AI voice workflows and intelligent automation for real user interactions.",
    role: "Full-stack engineering with AI integration",
    tech: ["Next.js", "Node.js", "LLM Integration", "AI Voice Agents"],
    image: {
      src: "/projects/pulse-ops.svg",
      alt: "AI voice agent SaaS concept showing workflow panels and automation interface"
    },
    links: {
      live: "https://consistentbuddy.com"
    }
  },
  {
    title: "Tunnel Vision MCR Boxing Store",
    summary:
      "A WooCommerce boxing store built to support product discovery, online orders, and a cleaner shopping experience for a focused niche brand.",
    role: "Frontend implementation and eCommerce experience optimization",
    tech: ["WooCommerce", "Frontend UI", "SEO", "Performance"],
    image: {
      src: "/projects/studio-grid.svg",
      alt: "Boxing eCommerce storefront concept with product cards and storefront navigation"
    },
    links: {
      live: "https://tunnelvisionmcr.co.uk"
    }
  },
  {
    title: "Dr Iqra Naseer Online Consultation",
    summary:
      "A healthcare consultation website focused on trust, readability, and a smoother online appointment experience.",
    role: "Frontend development and website delivery",
    tech: ["Next.js", "Responsive UI", "SEO", "Content structure"],
    image: {
      src: "/projects/atlas-commerce.svg",
      alt: "Online consultation website concept with healthcare-focused sections and call-to-action areas"
    },
    links: {
      live: "https://driqranaseer.com/"
    }
  },
  {
    title: "Nomedco Online Pharmacy",
    summary:
      "An online pharmacy store focused on product browsing, trust, and a smoother healthcare eCommerce experience.",
    role: "Frontend and eCommerce implementation",
    tech: ["WooCommerce", "Frontend UI", "SEO", "Online Store"],
    image: {
      src: "/projects/studio-grid.svg",
      alt: "Online pharmacy storefront concept with product sections and healthcare-focused interface"
    },
    links: {
      live: "https://nomedco.com"
    }
  },
  {
    title: "Madiotic Web Platform",
    summary:
      "A modern company web presence and product-facing platform built during my software engineering role with a focus on frontend quality and service integration.",
    role: "Software engineer working across frontend and backend integrations",
    tech: ["React.js", "Next.js", "Node.js", "Express.js"],
    image: {
      src: "/projects/pulse-ops.svg",
      alt: "Business web platform concept with modern layout blocks and product presentation"
    },
    links: {
      live: "https://madiotic.com"
    }
  }
];

export const caseStudies: CaseStudyItem[] = [
  {
    title: "Perfex CRM enterprise customization",
    problem:
      "The business needed advanced budgeting, resource allocation, manpower deployment, cash flow, and integration features that were not available in the base CRM.",
    solution:
      "Built modular Perfex CRM extensions for budgeting, resource planning, QuickBooks integration, LLM-based features, and API management without modifying the CRM core.",
    result:
      "The system stayed upgrade-friendly while supporting real internal business workflows across finance, manpower, and operations.",
    role: "Full-stack engineer to team lead",
    tech: ["PHP", "CodeIgniter", "MySQL", "Perfex CRM", "QuickBooks"]
  },
  {
    title: "Centralized AI integration module",
    problem:
      "Multiple business systems needed AI features, but there was no centralized way to manage token usage, cost tracking, or audit activity.",
    solution:
      "Designed and implemented a centralized AI module so multiple products could use LLM features while tracking tokens, cost, and user actions in one place.",
    result:
      "The business gained reusable AI capabilities with clearer monitoring, better optimization, and stronger internal auditing.",
    role: "System design and full-stack implementation",
    tech: ["Node.js", "LLM Integration", "API Design", "AI Monitoring"]
  }
];
