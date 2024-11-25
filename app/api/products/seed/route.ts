import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { PRODUCTS } from "@/constants";

export const GET = async () => {
  try {
    console.log("Seeding started...");

    await db.review.deleteMany();
    console.log("Existing reviews deleted.");
    await db.product.deleteMany();
    console.log("Existing products deleted.");

    for (const product of PRODUCTS) {
      const createdProduct = await db.product.create({
        data: {
          title: product.title,
          slug: product.slug,
          description: product.description,
          category: product.category,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          stock: product.stock,
          tags: product.tags,
          brand: product.brand ?? "Unknown",
          sku: product.sku,
          weight: product.weight,
          width: product.width,
          height: product.height,
          depth: product.depth,
          warrantyInformation: product.warrantyInformation,
          shippingInformation: product.shippingInformation,
          returnPolicy: product.returnPolicy,
          minimumOrderQuantity: product.minimumOrderQuantity,
          images: product.images,
          thumbnail: product.thumbnail,
        },
      });

      console.log(`Product ${createdProduct.slug} added.`);

      if (product.reviews && product.reviews.length > 0) {
        for (const review of product.reviews) {
          await db.review.create({
            data: {
              rating: review.rating,
              comment: review.comment,
              date: new Date(review.date),
              reviewerName: review.reviewerName,
              reviewerEmail: review.reviewerEmail,
              productId: createdProduct.id,
            },
          });
        }
        console.log(`Reviews for product ${createdProduct.slug} added.`);
      }
    }

    return NextResponse.json({
      message: "Seeded successfully!",
    });
  } catch (error: any) {
    console.error("Seeding error at [POST /api/seed]:", error);
    return NextResponse.json(
      {
        message: "Error during seeding",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await db
      .$disconnect()
      .catch((err) => console.error("Failed to disconnect:", err));
  }
};
