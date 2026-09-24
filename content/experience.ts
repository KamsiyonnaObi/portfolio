// Source of truth for the Experience section. Wording follows the resume
// (Kamsiyonna_Obi_Resume_Conquest_Planning.docx); keep the two in sync.

export type Role = {
  org: string;
  title: string;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, omitted for a current role */
  end?: string;
  summary: string;
  /** A single headline number, shown as a pill next to the organization */
  metric?: string;
  highlights: string[];
  details?: string[];
};

export type Entry = {
  org: string;
  title: string;
  /** YYYY-MM or YYYY */
  start: string;
  /** omitted for something ongoing */
  end?: string;
  note?: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    org: "Assiniboine Credit Union",
    title: "Software Developer",
    start: "2024-12",
    summary:
      "Develop and maintain a large, interconnected internal application used by financial advisors organization-wide, built with C#/.NET REST APIs and TypeScript/Angular.",
    highlights: [
      "Built a Financial Goals feature using a .NET REST API that lets advisors track and guide each member toward their financial goals, putting a clearer financial future one step closer for real people.",
      "Presented the problem and proposed solution to my team and stakeholders before writing a single line of code, earning full buy-in and setting the project up to succeed.",
      "Led stakeholder meetings to gather requirements and shape the MVP from the ground up.",
      "Upgraded a legacy ASP.NET Web Forms internal ticketing app in collaboration with developers and the business systems team, a contribution that directly earned me a promotion.",
    ],
    details: [
      "Write unit tests and work daily in Visual Studio and VS Code across a complex, multi-service codebase.",
      "Refine and confirm requirements with stakeholders, and design solutions that align technical scope with business needs.",
      "Research and evaluate system observability tooling to reduce time spent logging, debugging, and diagnosing production errors.",
      "Collaborate with developers and the business systems team on legacy system modernization efforts.",
    ],
  },
  {
    org: "Graceland eCommerce",
    title: "Software Lead",
    start: "2024-06",
    metric: "+14% online sales revenue",
    summary:
      "Lead full-stack development of Graceland's eCommerce platform, architecting solutions in Next.js and TypeScript.",
    highlights: [
      "Architected Graceland's Next.js and TypeScript eCommerce solution, driving a 14% increase in revenue from online sales.",
      "Onboarded two developers into the Graceland codebase, setting them up to contribute quickly and independently.",
      "Established React, TypeScript, and database management best practices through code reviews, ensuring high-quality code and smooth project execution.",
    ],
    details: [
      "Design and implement PostgreSQL database schemas supporting order processing, inventory management, and user transactions.",
      "Conduct code reviews and manage contributions from other developers, setting technical standards for the team.",
    ],
  },
  {
    org: "IntuitionPay",
    title: "Full-Stack Engineer (Intern)",
    start: "2024-02",
    end: "2024-06",
    summary: "A fintech startup that lets international students pay tuition.",
    highlights: [
      "Built a React admin dashboard with the developer team to display transactions, analytics, and support administrative functions.",
      "Developed a multi-step payment form for tuition payments using Zod, React-Hook-Form, and the Shadcn library for validation and UI.",
      "Collaborated with designers and the product team to build a reusable component design system.",
    ],
    details: [
      "Used React Router, React Query, and SASS modules to manage navigation, data fetching, and styling.",
    ],
  },
];

export const mentoring: Entry[] = [
  {
    org: "Itoju Mentoring",
    title: "Software Developer Career Mentor",
    start: "2025-10",
    bullets: [
      "Mentor early-career developers one-on-one each month to help them land their first job in tech.",
      "Assign real projects and review code to help mentees build a portfolio that gets them noticed.",
      "Run mock interviews so mentees walk in confident and ready.",
    ],
  },
  {
    org: "Local Church",
    title: "Web Developer, New Grads",
    start: "2022-10",
    end: "2024-12",
    bullets: [
      "Held mock interviews for new grad developers in my church, helping them break into the industry.",
      "Built and shared a free eBook packed with the React JS videos and resources that launched my own career.",
    ],
  },
];

export const education: Entry[] = [
  {
    org: "University of Winnipeg",
    title: "Bachelor of Science, Applied Computer Science",
    start: "2018",
    end: "2022",
    bullets: [
      "Relevant coursework: Data Structures and Algorithms, Advanced Internet Programming, Object-Oriented Programming, Web Development, Database Systems.",
    ],
  },
  {
    org: "JSM Masterclass",
    title: "Software Engineer Mentee",
    start: "2023-07",
    end: "2024-01",
    note: "A six-month intermediate coding program.",
    bullets: [
      "Successfully delivered a full-stack application within one quarter, collaborating effectively with a team of four developers to meet project goals and deadlines.",
      "Developed a modern social media forum with authentication, a dynamic homepage with feeds, post details, creation flows, and live chat using Next.js, MongoDB, and Socket.io.",
    ],
  },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "2024-12" -> "Dec 2024", "2018" -> "2018" */
export function formatDate(value: string) {
  const [year, month] = value.split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

/** "Dec 2024 – Present" */
export function formatRange(start: string, end?: string) {
  return `${formatDate(start)} – ${end ? formatDate(end) : "Present"}`;
}
