import type { ReactNode } from "react";

import Link from "next/link";

export default function HeaderComponent(): ReactNode {
  return (
    <header className="px-5 py-4 shadow-sm">
      <nav>
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
