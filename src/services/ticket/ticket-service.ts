import { ticketData } from "@/mock/tickcts-mock";

import { TicketType } from "@/types/ticket-types";

export const getTicket = async (): Promise<TicketType[]> => {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(ticketData);
  });
};
