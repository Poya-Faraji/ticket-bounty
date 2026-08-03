import type { ReactNode } from "react";

import Link from "next/link";

import { homePath, ticketsPath } from "@/utils/dynamic-path";

export default function HeaderComponent(): ReactNode {
  return (
    <header className="px-5 py-4 shadow-sm border-b border-border bg-background">
      <nav className="w-[min(1200px,calc(100%-2rem))] mx-auto">
        <ul className="flex justify-between">
          <li className="font-bold hover:text-primary">
            <Link href={homePath()}>Home</Link>
          </li>
          <li className="underline hover:text-primary">
            <Link href={ticketsPath()}>Tickets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
