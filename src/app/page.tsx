import { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <main>
      <div className="mt-8 w-[min(1200px,calc(100%-2rem))] mx-auto">
        <h1 className="font-heading text-2xl font-bold">Home</h1>
        <p className="text-muted-foreground">Your home to start.</p>
      </div>
    </main>
  );
}
