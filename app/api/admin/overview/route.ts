import { currentUser } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

export const GET = async () => {
  const user = await currentUser();

  if (!user || user?.role !== "ADMIN") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
};
