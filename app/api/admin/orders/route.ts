import { currentUser } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  const user = await currentUser();

  if (!user || user?.role !== "ADMIN") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const orders = await prisma.order.findMany({
    include: {
      user: true,
      paymentResult: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return new Response(JSON.stringify(orders), { status: 200 });
};
