"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ticketPath, ticketsPath } from "@/utils/dynamic-path";

import { prisma } from "@/lib/prisma";

const upsertTicket = async (id: string | undefined, formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    desc: formData.get("desc") as string,
  };

  await prisma.ticket.upsert({
    where: {
      id: id || "",
    },
    update: data,
    create: {
      ...data,
      done: false,
      icon: "OPEN",
    },
  });

  revalidatePath(ticketsPath());

  if (id) {
    redirect(ticketPath(id));
  }
};

export { upsertTicket };
