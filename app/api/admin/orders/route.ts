import { db } from "@/lib/db";
import { handleError } from "@/lib/utils";
import { authenticateAdmin } from "@/lib/auth";

export const GET = async () => {
  try {
    await authenticateAdmin();

    const orders = await db.order.findMany();

    if (orders.length === 0) {
      return new Response(JSON.stringify({ message: "No orders found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error: any) {
    return handleError(error, "Error fetching orders");
  }
};
