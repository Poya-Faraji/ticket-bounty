import { TicketType } from "@/types/ticket-types";

export const homePath = (): string => {
  return "/";
};

export const ticketsPath = (): string => {
  return "tickets";
};

export const ticketPath = (ticket: TicketType): string => {
  return `/tickets/${ticket.path}`;
};
