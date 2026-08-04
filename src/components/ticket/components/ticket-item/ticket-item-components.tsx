import Link from "next/link";

import { ticketPath } from "@/utils/dynamic-path";
import clsx from "clsx";

import { TICKET_ICONS } from "@/components/ticket/utils/ticket-constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TicketType } from "@/types/ticket-types";

type Props = {
  ticket: TicketType;
};

export default function TicketItemComponent({ ticket }: Props) {
  return (
    <Card key={ticket.id}>
      <CardHeader>
        <CardTitle className="flex justify-start items-center gap-2">
          <span className="text-sm">{TICKET_ICONS[ticket.icon]}</span>
          <span className="text-lg">{ticket.title}</span>
        </CardTitle>
        <CardDescription
          className={clsx(ticket.done && "line-through", "truncate")}
        >
          {ticket.desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="underline ">
        <Link className="hover:text-primary" href={ticketPath(ticket)}>
          View
        </Link>
      </CardContent>
    </Card>
  );
}
