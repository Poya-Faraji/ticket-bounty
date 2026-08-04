"use client";

import { useEffect, useState } from "react";

import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";

import { getTicket } from "@/services/ticket/ticket-service";
import { TicketType } from "@/types/ticket-types";

export default function TicketsComponent() {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTicket();

      setTickets(result);
      setLoading(false);
    };

    fetchTickets();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-center">Loading ...</p>
      ) : (
        tickets.map((ticket) => {
          return <TicketItemComponent key={ticket.id} ticket={ticket} />;
        })
      )}
    </>
  );
}
