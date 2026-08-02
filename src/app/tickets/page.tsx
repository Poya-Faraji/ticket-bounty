import type { ReactNode } from "react";

import Link from "next/link";

import { ticketData } from "@/mock/tickcts-mock";
import clsx from "clsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page(): ReactNode {
  return (
    <div className="mt-8 w-[min(1200px,calc(100%-2rem))] mx-auto">
      <div>
        <h2 className="font-heading text-2xl font-bold">Tickets</h2>
        <p className="text-muted-foreground">All your tickets at one place.</p>
      </div>

      <div className="mt-8 mx-auto max-w-80 grid grid-cols-1 gap-5">
        {ticketData.map((ticket) => {
          return (
            <Card key={ticket.id}>
              <CardHeader>
                <CardTitle className="text-lg ">{ticket.title}</CardTitle>
                <CardDescription
                  className={clsx(ticket.done && "line-through", "truncate")}
                >
                  {ticket.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="underline ">
                <Link
                  className="hover:text-primary"
                  href={`/tickets/${ticket.path}`}
                >
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
