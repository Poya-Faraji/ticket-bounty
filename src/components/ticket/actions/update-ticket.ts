"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ticketsPath } from "@/utils/dynamic-path";

import { prisma } from "@/lib/prisma";

const updateTicket = async (id:string, formData: FormData) => {
  const data = {
    title: formData.get("title"),
    desc: formData.get("desc"),
  };

  await prisma.ticket.update({
    where: {
      id,
    },
    data: {
      title: data.title as string,
      desc: data.desc as string,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};

export { updateTicket };
