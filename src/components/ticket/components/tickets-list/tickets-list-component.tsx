import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";

import { getTickets } from "@/services/ticket/ticket-service";

export default async function TicketsListComponent() {
  const tickets = await getTickets();
  return tickets.map((ticket) => {
    return <TicketItemComponent key={ticket.id} ticket={ticket} />;
  });
}
