import type { ReactNode } from "react";

import Link from "next/link";

import { homePath, ticketsPath } from "@/utils/dynamic-path";

import { buttonVariants } from "../ui/button";

export default function HeaderComponent(): ReactNode {
  return (
    <header className="px-5 py-4 border-b border-border bg-background">
      <nav className="w-[min(1200px,calc(100%-2rem))] mx-auto">
        <ul className="flex justify-between">
          <li>
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={homePath()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={ticketsPath()}
            >
              Tickets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
