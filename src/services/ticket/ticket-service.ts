import { prisma } from "@/lib/prisma";
import { TicketType } from "@/types/ticket-types";

export const getTickets = async (): Promise<TicketType[]> => {
  const tickets = await prisma.ticket.findMany({});

  return new Promise((resolve) => {
    resolve(tickets);
  });
};

export const getTicket = async (
  ticketId: string,
): Promise<TicketType | null> => {
  const ticket = await prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
  });

  return new Promise((resolve) => {
    resolve(ticket || null);
  });
};
