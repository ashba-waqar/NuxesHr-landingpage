export const TODAY = new Date("2026-09-29");
export const tenants = ["All clients", "Acme Corp", "Globex", "Initech"];

export const employees = [
  { id: 1, name: "Leo Park", role: "CEO", dept: "Leadership", manager: null, location: "Austin", email: "leo@northwind.co", start: "2016-01-11", salary: 210000, status: "Active" },
  { id: 2, name: "Dana Ortiz", role: "Head of People", dept: "People", manager: 1, location: "Austin", email: "dana@northwind.co", start: "2019-03-04", salary: 128000, status: "Active" },
  { id: 3, name: "Ravi Menon", role: "Consulting lead", dept: "Consulting", manager: 1, location: "Chicago", email: "ravi@northwind.co", start: "2018-06-18", salary: 152000, status: "Active" },
  { id: 4, name: "Maya Chen", role: "Senior consultant", dept: "Consulting", manager: 3, location: "Remote", email: "maya@northwind.co", start: "2021-09-06", salary: 118000, status: "Active" },
  { id: 5, name: "Sam Okafor", role: "People coordinator", dept: "People", manager: 2, location: "Austin", email: "sam@northwind.co", start: "2023-02-13", salary: 72000, status: "On leave" },
  { id: 6, name: "Priya Nair", role: "Consultant", dept: "Consulting", manager: 3, location: "Chicago", email: "priya@northwind.co", start: "2024-04-01", salary: 96000, status: "Active" },
];

export const timesheets = [
  { id: 1, name: "Maya Chen", client: "Acme Corp", hours: [8, 8, 7.5, 8, 7] },
  { id: 2, name: "Priya Nair", client: "Globex", hours: [8, 9, 8, 8, 6] },
  { id: 3, name: "Ravi Menon", client: "Initech", hours: [7, 8, 8, 8, 8] },
  { id: 4, name: "Sam Okafor", client: "Internal", hours: [4, 4, 0, 0, 0] },
];

export const timeOff = [
  { name: "Maya Chen", start: "2026-10-05", end: "2026-10-09", type: "Vacation", status: "Approved" },
  { name: "Priya Nair", start: "2026-10-14", end: "2026-10-15", type: "Sick", status: "Pending" },
  { name: "Ravi Menon", start: "2026-10-26", end: "2026-10-30", type: "Vacation", status: "Pending" },
];

export const invoices = [
  { no: "INV-1042", client: "Acme Corp", amount: 18400, due: "2026-10-10", status: "Sent" },
  { no: "INV-1041", client: "Globex", amount: 9250, due: "2026-09-20", status: "Overdue" },
  { no: "INV-1040", client: "Initech", amount: 12800, due: "2026-09-12", status: "Paid" },
  { no: "INV-1039", client: "Acme Corp", amount: 21000, due: "2026-10-18", status: "Draft" },
];

export const controls = [
  { id: 1, title: "Quarterly access review completed", owner: "Dana Ortiz", done: true },
  { id: 2, title: "Background checks on file for new hires", owner: "Sam Okafor", done: true },
  { id: 3, title: "Anti-harassment policy acknowledged by all staff", owner: "Dana Ortiz", done: false },
  { id: 4, title: "I-9 records verified", owner: "Sam Okafor", done: false },
  { id: 5, title: "Data retention schedule reviewed", owner: "Leo Park", done: false },
];

export const expiring = [
  { name: "Security training: Maya Chen", expires: "2026-10-20" },
  { name: "Professional license: Ravi Menon", expires: "2026-11-30" },
  { name: "Work authorization: Priya Nair", expires: "2026-10-04" },
  { name: "First aid certificate: Sam Okafor", expires: "2027-03-15" },
];

export const groundingDocs = ["Employee handbook 2026.pdf", "PTO policy v3.docx", "Expense policy.pdf"];
