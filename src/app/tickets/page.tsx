import type { ReactNode } from "react";

import Link from "next/link";

import { ticketData } from "@/mock/tickcts-mock";
import { ticketPath } from "@/utils/dynamic-path";
import clsx from "clsx";
import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TicketIcons = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
};
export default function Page(): ReactNode {
  return (
    <div className="mt-8 w-[min(1200px,calc(100%-2rem))] mx-auto">
      <div className="border-b border-border bg-background pb-8">
        <h2 className="font-heading text-2xl font-bold">Tickets</h2>
        <p className="text-muted-foreground">All your tickets at one place.</p>
      </div>

      <div className="mt-8 animate-fade-in-from-top mx-auto max-w-80 grid grid-cols-1 gap-5">
        {ticketData.map((ticket) => {
          return (
            <Card key={ticket.id}>
              <CardHeader>
                <CardTitle className="flex justify-start items-center gap-2">
                  <span className="text-sm">{TicketIcons[ticket.icon]}</span>
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
        })}
      </div>
    </div>
  );
}
