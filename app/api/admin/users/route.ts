import { db } from "@/lib/db";
import { handleError } from "@/lib/utils";
import { authenticateAdmin } from "@/lib/auth";

export const GET = async () => {
  try {
    await authenticateAdmin();
    const users = await db.user.findMany();

    if (users.length === 0) {
      return new Response(JSON.stringify({ message: "No users found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return handleError(error, "Error fetching users");
  }
};
