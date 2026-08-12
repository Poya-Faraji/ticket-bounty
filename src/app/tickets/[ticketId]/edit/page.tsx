import { notFound } from "next/navigation";

import { CardCompactComponent } from "@/components/card-compact/card-compact-component";
import { TicketUpdateForm } from "@/components/ticket/components/ticket-update-form/ticket-update-form";

import { getTicket } from "@/services/ticket/ticket-service";
import { TicketUpsertForm } from "@/components/ticket/components/ticket-upsert-from/ticket-upsert-from";

type Props = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function page({ params }: Props) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col mt-8 items-center">
      <CardCompactComponent
        title="Edit Ticket"
        description="Edit and existing ticket"
        className="w-full max-w-105 animate-fade-in-from-top"
      >
        <TicketUpsertForm ticket={ticket} />
      </CardCompactComponent>
    </div>
  );
}
