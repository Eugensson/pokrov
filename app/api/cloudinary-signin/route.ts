import cloudinary from "cloudinary";

import { authenticateAdmin } from "@/lib/auth";

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error("CLOUDINARY_API_SECRET is not defined in the environment");
}

export const POST = async (req: any) => {
  await authenticateAdmin();

  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.v2.utils.api_sign_request(
    { timestamp },
    process.env.CLOUDINARY_API_SECRET!
  );

  return new Response(JSON.stringify({ signature, timestamp }), {
    status: 200,
  });
};
