import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";

import { getTicket } from "@/services/ticket/ticket-service";

export default async function TicketsComponent() {
  const tickets = await getTicket();

  return tickets.map((ticket) => {
    return <TicketItemComponent key={ticket.id} ticket={ticket} />;
  });
}
