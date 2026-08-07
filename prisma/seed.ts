import { PrismaClient } from "@/generated/prisma/client";
import { ticketData } from "@/mock/tickcts-mock";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DIRECT_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function seed() {
  const t0 = performance.now();
  console.log("Database seeding started...");
  await prisma.ticket.deleteMany({});

  await prisma.ticket.createMany({
    data: ticketData,
  });

  const t1 = performance.now();
  console.log(`Tickets seeded successfully in ${t1 - t0}ms`);
}

seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
