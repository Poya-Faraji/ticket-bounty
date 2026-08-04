import type { ReactNode } from "react";

import Link from "next/link";

import { homePath, ticketsPath } from "@/utils/dynamic-path";
import clsx from "clsx";
import { LucideKanban } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import ThemeSwitcherComponent from "../theme-switcher/theme-switcher-component";

export default function HeaderComponent(): ReactNode {
  return (
    <header className="px-5 py-4 border-b border-border bg-background">
      <div className="w-[min(1200px,calc(100%-2rem))] mx-auto flex justify-between items-center">
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={homePath()}
        >
          <LucideKanban />
          <span className="text-lg font-semibold">TicketBounty</span>
        </Link>
        <div className="flex justify-center items-center gap-x-8">
          <ThemeSwitcherComponent />
          <nav>
            <ul role="list">
              <li></li>
              <li>
                <Link
                  className={clsx(
                    buttonVariants({ variant: "outline" }),
                    "bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary/80",
                  )}
                  href={ticketsPath()}
                >
                  Tickets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
