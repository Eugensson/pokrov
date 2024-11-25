import { db } from "@/lib/db";
import { handleError } from "@/lib/utils";
import { authenticateAdmin } from "@/lib/auth";

export const GET = async () => {
  try {
    await authenticateAdmin();

    const products = await db.product.findMany();

    if (products.length === 0) {
      return new Response(JSON.stringify({ message: "No products found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error: any) {
    return handleError(error, "Error fetching products");
  }
};

export const POST = async (req: Request) => {
  try {
    await authenticateAdmin();

    const newProduct = await db.product.create({
      data: {
        title: "sample title",
        slug: "sample-slug",
        description: "sample description",
        category: "sample category",
        price: 0.0,
        discountPercentage: 0.0,
        rating: 0.0,
        stock: 0,
        tags: [],
        brand: "sample brand",
        sku: "sample sku",
        weight: 0.0,
        width: 0.0,
        height: 0.0,
        depth: 0.0,
        warrantyInformation: "No infomation",
        shippingInformation: "No infomation",
        returnPolicy: "No infomation",
        minimumOrderQuantity: 1,
        images: [],
        thumbnail: "",
      },
    });

    return new Response(
      JSON.stringify({ message: "Product created successfully", newProduct }),
      { status: 201 }
    );
  } catch (error: any) {
    return handleError(error, "Error creating product");
  }
};
