import { z } from "zod";
import cloudinary from "cloudinary";

import { db } from "@/lib/db";
import { handleError } from "@/lib/utils";
import { authenticateAdmin } from "@/lib/auth";

import { EditProductSchema } from "@/schemas";

if (
  !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
  !process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  throw new Error("Cloudinary configuration is incomplete.");
}

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const GET = async (...args: any) => {
  const [_req, { params }] = await args;
  const { productId } = await params;

  try {
    await authenticateAdmin();

    const product = await db.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return handleError(error, "Error fetching product");
  }
};

export const PUT = async (...args: any) => {
  const [req, { params }] = await args;
  const { productId } = await params;

  if (!productId) {
    return new Response(JSON.stringify({ message: "Product ID is required" }), {
      status: 400,
    });
  }

  try {
    await authenticateAdmin();

    const body = await req.json();
    const parsedData = EditProductSchema.parse(body);

    const productToUpdate = await db.product.findUnique({
      where: { id: productId },
    });

    if (!productToUpdate) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    const updatedProduct = await db.product.update({
      where: { id: productId },
      data: parsedData,
    });

    return new Response(JSON.stringify(updatedProduct), { status: 200 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          message: "Validation error",
          errors: error.errors.map((err) => ({
            path: err.path.join("."),
            message: err.message,
          })),
        }),
        { status: 400 }
      );
    }

    return handleError(error, "Error updating product");
  }
};

export const DELETE = async (...args: any) => {
  const [_req, { params }] = await args;
  const { productId } = await params;

  try {
    await authenticateAdmin();

    const productToDelete = await db.product.findUnique({
      where: { id: productId },
    });

    if (!productToDelete) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    const imageDeletionPromises = productToDelete.images.map(
      (image: string) => {
        const urlParts = image.split("/");
        const fileNameWithExtension = urlParts.pop();

        if (!fileNameWithExtension) {
          throw new Error("Couldn't find fileNameWithExtension with URL");
        }

        const [publicId] = fileNameWithExtension.split(".");
        if (!publicId) {
          throw new Error(
            "It was not possible to select publicId from fileNameWithExtension"
          );
        }

        return cloudinary.v2.uploader.destroy(publicId);
      }
    );

    const results = await Promise.allSettled(imageDeletionPromises);

    const errors = results.filter((result) => result.status === "rejected");
    if (errors.length) {
      console.error("Errors during image deletion:", errors);
    }

    await db.product.delete({
      where: { id: productId },
    });

    return new Response(
      JSON.stringify({ message: "Product and images deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "Error deleting product");
  }
};
