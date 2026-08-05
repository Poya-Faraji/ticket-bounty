import Link from "next/link";

import { ticketsPath } from "@/utils/dynamic-path";

import PlaceholderComponent from "@/components/placeholder/placholder-component";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
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
