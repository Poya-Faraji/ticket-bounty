import type { ReactNode } from "react";

import Link from "next/link";

export default function HeaderComponent(): ReactNode {
  return (
    <header className="px-5 py-4 shadow-sm border-b border-border bg-background">
      <nav className="w-[min(1200px,calc(100%-1rem))] mx-auto">
        <ul className="flex justify-between">
          <li className="font-bold hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="underline hover:text-primary">
            <Link href="tickets">Tickets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
