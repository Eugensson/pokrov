import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};

export const authenticateAdmin = async () => {
  const user = await currentUser();
  if (!user || user.role !== "ADMIN") {
    throw new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  return user;
};
