import Link from "next/link";

import { ticketsPath } from "@/utils/dynamic-path";
import { ErrorBoundary } from "react-error-boundary";

import PlaceholderComponent from "@/components/placeholder/placholder-component";
import TicketItemComponent from "@/components/ticket/components/ticket-item/ticket-item-components";
import { buttonVariants } from "@/components/ui/button";

import { getTicket } from "@/services/ticket/ticket-service";

type Props = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (ticket === null) {
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
