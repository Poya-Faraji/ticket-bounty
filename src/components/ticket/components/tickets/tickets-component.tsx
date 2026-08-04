"use client";

import { useEffect, useState } from "react";

import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";
import { SpinnerCustom } from "@/components/ui/spinner";

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
        <span className="flex justify-center items-center gap-x-4">
          Loading <SpinnerCustom />
        </span>
      ) : (
        tickets.map((ticket) => {
          return <TicketItemComponent key={ticket.id} ticket={ticket} />;
        })
      )}
    </>
  );
}
