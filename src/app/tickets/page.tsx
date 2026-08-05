import { type ReactNode, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import HeadingComponent from "@/components/heading/heading-component";
import PlaceholderComponent from "@/components/placeholder/placholder-component";
import TicketsListComponent from "@/components/ticket/components/tickets-list/tickets-list-component";
import { SpinnerCustom } from "@/components/ui/spinner";

export default function Page(): ReactNode {
  const suspenseFallback = <SpinnerCustom>Loading...</SpinnerCustom>;
  const errorFallback = <PlaceholderComponent title="Error getting tickets" />;

  return (
    <>
      <HeadingComponent
        title="Tickets"
        description="All your tickets at one place."
      />

      <div className="mt-8 mx-auto max-w-80 grid grid-cols-1 gap-5">
        <ErrorBoundary fallback={errorFallback}>
          <Suspense fallback={suspenseFallback}>
            <TicketsListComponent />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}
