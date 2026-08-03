"use client";

import { useParams } from "next/navigation";

import { ticketData } from "@/mock/tickcts-mock";

export default function Page() {
  const { ticketId } = useParams<{ ticketId: string }>();

  const ticket = ticketData.find((ticket) => ticket.path === ticketId);

  if (ticket === undefined) {
    return <p>Failed to find the ticket with id: {ticketId}</p>;
  }

  console.log(ticket);
  return (
    <div>
      <div>{ticket?.title}</div>
      <div>{ticket?.desc}</div>
    </div>
  );
}
