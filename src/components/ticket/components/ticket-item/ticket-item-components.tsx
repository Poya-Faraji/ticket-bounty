import Link from "next/link";

import { ticketPath } from "@/utils/dynamic-path";
import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";

import { TICKET_ICONS } from "@/components/ticket/utils/ticket-constants";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket } from "@/generated/prisma/client";


type Props = {
  ticket: Ticket;
  showDetail?: boolean;
};

export default function TicketItemComponent({
  ticket,
  showDetail = true,
}: Props) {
  const actionBtn = (
    <Link
      className={clsx(
        buttonVariants({ variant: "outline", size: "icon-sm" }),
        "underline hover:text-primary",
      )}
      href={ticketPath(ticket)}
    >
      <LucideSquareArrowOutUpRight className="h-4 w-4" />
    </Link>
  );

  return (
    <div className="w-full max-w-105 flex gap-x-1 animate-fade-in-from-top">
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex justify-start items-center gap-2">
            <span className="text-sm">{TICKET_ICONS[ticket.icon]}</span>
            <span className="text-lg">{ticket.title}</span>
          </CardTitle>
          <CardDescription
            className={clsx(
              ticket.done && "line-through",
              showDetail && "truncate",
            )}
          >
            <span
              className={clsx(
                showDetail && "line-clamp-3 whitespace-break-spaces",
              )}
            >
              {ticket.desc}
            </span>
          </CardDescription>
        </CardHeader>
      </Card>

      {showDetail && <div className="flex flex-col gap-y-1">{actionBtn}</div>}
    </div>
  );
}
