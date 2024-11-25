import { db } from "@/lib/db";
import { authenticateAdmin } from "@/lib/auth";
import { findUserById, handleError } from "@/lib/utils";

export const GET = async (...args: any) => {
  const [_req, { params }] = await args;
  const { id } = await params;

  try {
    await authenticateAdmin();
    const user = await findUserById(id);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    return handleError(error, "Error fetching user");
  }
};

export const PUT = async (...args: any) => {
  const [req, { params }] = await args;
  const { id } = await params;

  try {
    await authenticateAdmin();
    const { name, email, role } = await req.json();
    await findUserById(id);

    const updatedUser = await db.user.update({
      where: { id },
      data: { name, email, role },
    });

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error: any) {
    return handleError(error, "Error updating user");
  }
};

export const DELETE = async (...args: any) => {
  const [_req, { params }] = await args;
  const { id } = await params;

  try {
    await authenticateAdmin();
    await findUserById(id);

    const deletedUser = await db.user.delete({
      where: { id },
    });

    return new Response(JSON.stringify(deletedUser), { status: 200 });
  } catch (error: any) {
    return handleError(error, "Error deleting user");
  }
};
