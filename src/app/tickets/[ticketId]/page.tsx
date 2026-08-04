import Link from "next/link";

import { ticketData } from "@/mock/tickcts-mock";
import { ticketsPath } from "@/utils/dynamic-path";

import PlaceholderComponent from "@/components/placeholder/placholder-component";
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
    <div>
      <div>{ticket?.title}</div>
      <div>{ticket?.desc}</div>
    </div>
  );
}
