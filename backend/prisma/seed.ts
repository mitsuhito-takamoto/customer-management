import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@example.com";
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: "Admin User",
      email: adminEmail,
      password: "$2b$10$8YfV75yNcQh9QxWJ2I3a1eA8kZf2u21kJY3Ukt8azYk6jQ7gaLxTu",
      role: "admin"
    }
  });

  console.log("Seed completed:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
