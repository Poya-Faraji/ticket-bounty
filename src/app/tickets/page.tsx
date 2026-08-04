import type { ReactNode } from "react";

import HeadingComponent from "@/components/heading/heading-component";
import TicketsComponent from "@/components/ticket/components/tickets/tickets-component";

export default function Page(): ReactNode {
  return (
    <>
      <HeadingComponent
        title="Tickets"
        description="All your tickets at one place."
      />
      <div className="mt-8 mx-auto max-w-80 grid grid-cols-1 gap-5">
        <TicketsComponent />
      </div>
    </>
  );
}
