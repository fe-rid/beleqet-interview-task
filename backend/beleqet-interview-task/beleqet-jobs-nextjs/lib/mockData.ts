export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full Time" | "Part Time" | "Remote" | "Hybrid" | "On-site" | "Contract";
  category: string;
  postedAgo: string;
  featured?: boolean;
  description?: string;
  tags?: string[];
};

export const categories = [
  { id: "it-software", label: "IT & Software", count: "1,290", icon: "laptop" },
  { id: "marketing", label: "Marketing", count: "642", icon: "megaphone" },
  { id: "finance", label: "Finance", count: "423", icon: "landmark" },
  { id: "health", label: "Health", count: "192", icon: "heart-pulse" },
  { id: "education", label: "Education", count: "208", icon: "graduation-cap" },
  { id: "engineering", label: "Engineering", count: "434", icon: "cog" },
  { id: "other", label: "Other", count: "1,135", icon: "more-horizontal" },
];

export const jobs: Job[] = [
  {
    id: "full-stack-developer-takacash",
    title: "Full Stack Developer",
    company: "TakaCash",
    location: "Addis Ababa",
    type: "Full Time",
    category: "it-software",
    postedAgo: "2h ago",
    featured: true,
    tags: ["React", "Node.js", "PostgreSQL"],
    description:
      "TakaCash is looking for a Full Stack Developer to build and maintain customer-facing fintech products. You will work across our Next.js front end and Node services, ship features end to end, and collaborate closely with product and design.",
  },
  {
    id: "digital-marketing-specialist-ethio-telecom",
    title: "Digital Marketing Specialist",
    company: "ethio telecom",
    location: "Addis Ababa",
    type: "Hybrid",
    category: "marketing",
    postedAgo: "4h ago",
    featured: true,
    tags: ["SEO", "Paid Ads", "Content"],
    description:
      "Plan and execute digital campaigns across search, social, and Telegram channels. Own performance reporting and work with the brand team to grow qualified leads.",
  },
  {
    id: "customer-service-agent-dashen-bank",
    title: "Customer Service Agent",
    company: "Dashen Bank",
    location: "Addis Ababa",
    type: "On-site",
    category: "finance",
    postedAgo: "6h ago",
    featured: true,
    tags: ["Customer Care", "Banking"],
    description:
      "Handle customer inquiries across branch and digital channels, resolve account issues, and maintain Dashen Bank's service standards.",
  },
  {
    id: "graphic-designer-system-one",
    title: "Graphic Designer",
    company: "System One",
    location: "Remote",
    type: "Remote",
    category: "other",
    postedAgo: "8h ago",
    featured: true,
    tags: ["Figma", "Branding"],
    description:
      "Design marketing assets, social creatives, and brand collateral for a fast-moving product team. Portfolio required.",
  },
  {
    id: "hr-admin-officer-safaricom-ethiopia",
    title: "HR & Admin Officer",
    company: "Safaricom Ethiopia",
    location: "Addis Ababa",
    type: "Full Time",
    category: "other",
    postedAgo: "12h ago",
    featured: true,
    tags: ["HR", "Operations"],
    description:
      "Support recruitment, onboarding, and day-to-day HR administration for the Addis Ababa office.",
  },
  {
    id: "auditor-across-financial",
    title: "Auditor",
    company: "Across Financials",
    location: "Addis Ababa",
    type: "Full Time",
    category: "finance",
    postedAgo: "1d ago",
    tags: ["Accounting", "Audit"],
    description:
      "Conduct internal audits, assess financial controls, and prepare audit reports for management review.",
  },
  {
    id: "consultant-playmatters",
    title: "Consultant — PlayMatters Ethiopia Implementation Research Principal Investigator",
    company: "PlayMatters",
    location: "Addis Ababa",
    type: "Full Time",
    category: "education",
    postedAgo: "1d ago",
    tags: ["Research", "M&E"],
    description:
      "Lead implementation research for the PlayMatters program, coordinating data collection and analysis across project sites.",
  },
  {
    id: "senior-accountant-binstar",
    title: "Senior Accountant",
    company: "BN Star Trading Plc.",
    location: "Addis Ababa",
    type: "Full Time",
    category: "finance",
    postedAgo: "2d ago",
    tags: ["Accounting", "Finance"],
    description:
      "Manage general ledger, monthly closing, and financial reporting for BN Star Trading Plc.",
  },
  {
    id: "digital-marketer-iii-eec",
    title: "Digital Marketer III (Vacancy code 001/2026)",
    company: "EEC",
    location: "Addis Ababa",
    type: "Full Time",
    category: "marketing",
    postedAgo: "2d ago",
    tags: ["Digital Marketing"],
    description:
      "Drive digital marketing initiatives including campaign planning, content creation, and analytics reporting.",
  },
  {
    id: "utility-operator-minimarche",
    title: "Utility Operator",
    company: "Minimarche",
    location: "Addis Ababa",
    type: "Full Time",
    category: "other",
    postedAgo: "3d ago",
    tags: ["Operations"],
    description:
      "Support daily facility operations, equipment maintenance, and store readiness for Minimarche outlets.",
  },
  {
    id: "consultancy-snv-ai-literacy",
    title:
      "Consultancy Service for Development and Piloting of an AI-Assisted Digital and Financial Literacy Learning Platform for Micro and Small Enterprises (Bid No. 019/26/SNV)",
    company: "SNV",
    location: "Addis Ababa",
    type: "Contract",
    category: "education",
    postedAgo: "3d ago",
    tags: ["Consultancy", "AI", "EdTech"],
    description:
      "Design and pilot an AI-assisted learning platform supporting digital and financial literacy for micro and small enterprises.",
  },
  {
    id: "uiux-designer-zemen-bank",
    title: "UI/UX Designer",
    company: "Zemen Bank",
    location: "Addis Ababa",
    type: "Full Time",
    category: "it-software",
    postedAgo: "4d ago",
    tags: ["Figma", "Product Design"],
    description:
      "Design intuitive digital banking experiences across web and mobile, partnering closely with engineering and product.",
  },
];

export const stats = [
  { label: "Active Jobs", value: "10,000+", icon: "briefcase" },
  { label: "Hiring Companies", value: "5,000+", icon: "building-2" },
  { label: "Registered Job Seekers", value: "50,000+", icon: "users" },
  { label: "Satisfaction Rate", value: "98%", icon: "smile" },
];

export const popularSearches = ["Developer", "Marketing", "Designer", "Accounting", "Sales", "Remote"];
