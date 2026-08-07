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
  const start = performance.now();
  console.log("Database seeding started...");

  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({
    data: ticketData,
  });

  const end = performance.now();
  console.log(`Tickets seeded successfully in ${end - start}ms`);
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });