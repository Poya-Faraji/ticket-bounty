import { TicketType } from "@/mock/tickcts-mock";

export const homePath = (): string => {
  return "/";
};

export const ticketsPath = (): string => {
  return "tickets";
};

export const ticketPath = (ticket: TicketType): string => {
  return `/tickets/${ticket.path}`;
};
