"use server";
import { redirect } from "next/navigation";

import { ticketsPath } from "@/utils/dynamic-path";

import { prisma } from "@/lib/prisma";

export const deleteTicketAction = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  return redirect(ticketsPath());
};
