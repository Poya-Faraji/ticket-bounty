import { ReactNode } from "react";

import MingcuteCheckFill from "@/icons/MingcuteCheckFill";

export type TicketType = {
  id: string;
  title: string;
  desc: string;
  done: boolean;
  path: string;
  icon: "DONE" | "OPEN" | "IN_PROGRESS";
};

export const ticketData: TicketType[] = [
  {
    id: crypto.randomUUID(),
    title: "First ticket",
    desc: "First tickets description",
    done: true,
    path: crypto.randomUUID(),
    icon: "DONE",
  },
  {
    id: crypto.randomUUID(),
    title: "Second",
    desc: "This is another ticket",
    done: false,
    path: crypto.randomUUID(),
    icon: "IN_PROGRESS",
  },
];
