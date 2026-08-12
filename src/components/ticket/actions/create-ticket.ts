"use server";

import { revalidatePath } from "next/cache";

import { ticketsPath } from "@/utils/dynamic-path";

import { prisma } from "@/lib/prisma";

const createTicket = async (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    desc: formData.get("desc"),
  };

  await prisma.ticket.create({
    data: {
      title: data.title as string,
      desc: data.desc as string,
      done: false,
      icon: "OPEN",
    },
  });

  revalidatePath(ticketsPath());
};

export { createTicket };
