import Link from "next/link";

import { ticketData } from "@/mock/tickcts-mock";
import { ticketsPath } from "@/utils/dynamic-path";

import PlaceholderComponent from "@/components/placeholder/placholder-component";
import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { ticketId } = await params;

  const ticket = ticketData.find((ticket) => ticket.path === ticketId);

  if (ticket === undefined) {
    return (
      <PlaceholderComponent
        title={`No ticket found !`}
        returnBtn={
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={ticketsPath()}
          >
            Return to ticket page
          </Link>
        }
      />
    );
  }

  return (
    <div className="w-[min(1200px,calc(100%-2rem))] mx-auto mt-8 flex justify-center animate-fade-in-from-top">
      <TicketItemComponent ticket={ticket} showDetail={false} />
    </div>
  );
}
