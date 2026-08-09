import { Ticket } from "@/generated/prisma/client";

export const homePath = (): string => {
  return "/";
};

export const ticketsPath = (): string => {
  return "/tickets";
};

export const ticketPath = (ticket: Ticket): string => {
  return `/tickets/${ticket.id}`;
};
