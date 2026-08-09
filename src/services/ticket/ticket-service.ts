import { Ticket } from "@/generated/prisma/client";

import { prisma } from "@/lib/prisma";

export const getTickets = async (): Promise<Ticket[]> => {
  const tickets = await prisma.ticket.findMany({});

  return new Promise((resolve) => {
    resolve(tickets);
  });
};

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });

  return new Promise((resolve) => {
    resolve(ticket || null);
  });
};
