export type HRModule = {
  name: string;
  slug: string;
  href: string;
  description: string; // short line for the nav dropdown
  features: string[]; // shown as chips in the pillars grid
};

export const modules: HRModule[] = [
  {
    name: "People",
    slug: "people",
    href: "#people",
    description: "Employee records, hiring, and performance.",
    features: ["Employee records", "Org chart", "Onboarding", "Performance", "ATS", "1:1s", "Learning"],
  },
  {
    name: "Time & Work",
    slug: "time-work",
    href: "#time-work",
    description: "Timesheets, time off, and scheduling.",
    features: ["Timesheets", "Time off", "Shift scheduling", "Attendance", "Project hours"],
  },
  {
    name: "Finance",
    slug: "finance",
    href: "#finance",
    description: "Payroll, invoices, and expenses.",
    features: ["Payroll", "Invoices", "Expenses", "Aging reports", "Financial reporting"],
  },
  {
    name: "Compliance",
    slug: "compliance",
    href: "#compliance",
    description: "Evidence, credentials, and audit trails.",
    features: ["Compliance items", "Evidence", "Credentials", "Policies", "Audit trails"],
  },
  {
    name: "Workplace",
    slug: "workplace",
    href: "#workplace",
    description: "Assets, helpdesk, and documents.",
    features: ["Assets", "Helpdesk", "Knowledge base", "Surveys", "Documents & e-sign"],
  },
  {
    name: "Pixi AI",
    slug: "pixi-ai",
    href: "#pixi-ai",
    description: "Daily brief, inline actions, and search.",
    features: ["Daily brief", "Inline actions", "Command palette", "Document grounding", "Cost tracking"],
  },
];
