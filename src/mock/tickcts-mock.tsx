import { TicketType } from "@/types/ticket-types";

type TicketMockType = Omit<TicketType, "id">[];

export const ticketData: TicketMockType = [
  {
    title: "Implement user authentication",
    desc: "Add login and registration flow using Supabase authentication.",
    done: true,
    icon: "DONE",
  },
  {
    title: "Create dashboard layout",
    desc: "Build the main dashboard structure with sidebar navigation and responsive design.",
    done: false,
    icon: "IN_PROGRESS",
  },
  {
    title: "Fix mobile navigation bug",
    desc: "The mobile menu closes unexpectedly after selecting an item.",
    done: false,
    icon: "OPEN",
  },
  {
    title: "Add ticket filtering",
    desc: "Allow users to filter tickets by status: open, in progress, and completed.",
    done: true,
    icon: "DONE",
  },
  {
    title: "Improve database queries",
    desc: "Optimize Prisma queries to reduce unnecessary database requests.",
    done: false,
    icon: "IN_PROGRESS",
  },
  {
    title: "Setup project documentation",
    desc: "Write documentation explaining installation and development workflow.",
    done: true,
    icon: "DONE",
  },
  {
    title: "Create API endpoints",
    desc: "Implement REST API endpoints for managing tickets.",
    done: false,
    icon: "IN_PROGRESS",
  },
  {
    title: "Add form validation",
    desc: "Use Zod schemas to validate ticket creation and update forms.",
    done: true,
    icon: "DONE",
  },
  {
    title: "Implement dark mode",
    desc: "Add dark theme support and persist user preference.",
    done: false,
    icon: "OPEN",
  },
  {
    title: "Fix TypeScript errors",
    desc: "Resolve remaining TypeScript issues before production deployment.",
    done: true,
    icon: "DONE",
  },
  {
    title: "Setup Prisma migrations",
    desc: "Configure Prisma migrations with Supabase PostgreSQL database.",
    done: false,
    icon: "IN_PROGRESS",
  },
  {
    title: "Add loading states",
    desc: "Create reusable loading components for async operations.",
    done: false,
    icon: "OPEN",
  },
  {
    title: "Deploy application",
    desc: "Deploy the application to production and configure environment variables.",
    done: true,
    icon: "DONE",
  },
  {
    title: "Improve error handling",
    desc: "Add better error messages and fallback states across the application.",
    done: false,
    icon: "IN_PROGRESS",
  },
  {
    title: "Create user profile page",
    desc: "Build profile page where users can update their personal information.",
    done: false,
    icon: "OPEN",
  },
];
