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

async function main() {
  await prisma.ticket.createMany({
    data: ticketData,
  });

  console.log("Tickets seeded successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
