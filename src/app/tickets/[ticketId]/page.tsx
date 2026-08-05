import { notFound } from "next/navigation";

import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";

import { getTicket } from "@/services/ticket/ticket-service";

type Props = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (ticket === null) {
    notFound();
  }

  return (
    <div className="w-[min(1200px,calc(100%-2rem))] mx-auto mt-8 flex justify-center animate-fade-in-from-top">
      <TicketItemComponent ticket={ticket} showDetail={false} />
    </div>
  );
}
