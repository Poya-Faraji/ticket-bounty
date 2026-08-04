import { ticketData } from "@/mock/tickcts-mock";

import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";

export default function TicketsComponent() {
  return (
    <>
      {ticketData.map((ticket) => {
        return <TicketItemComponent key={ticket.id} ticket={ticket} />;
      })}
    </>
  );
}
