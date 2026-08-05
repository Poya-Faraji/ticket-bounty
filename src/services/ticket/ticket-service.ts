import { ticketData } from "@/mock/tickcts-mock";

import { TicketType } from "@/types/ticket-types";

export const getTickets = async (): Promise<TicketType[]> => {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(ticketData);
  });
};

export const getTicket = async (ticketId: string): Promise<TicketType | null>  => {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 10000));
  
  const ticket = ticketData.find((ticket) => ticket.path === ticketId);

  return new Promise((resolve) => {
    resolve(ticket || null);
  });
};