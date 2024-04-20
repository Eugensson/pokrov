import Link from "next/link";
import Image from "next/image";

import { convertDocToObj } from "@/lib/utils";
import { Rating } from "@/components/products/Rating";
import AddToCart from "@/components/products/AddToCart";
import productService from "@/lib/services/productService";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="px-1 md:py-2 xl:py-5 text-xs md:text-sm xl:text-base">
      <p className="my-6">
        Повернутися до{" "}
        <Link href="/search" className="font-semibold hover:text-primary">
          каталогу
        </Link>
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        <Image
          priority
          src={product.image}
          alt={product.name}
          width={640}
          height={640}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <ul className="space-y-4">
          <li>
            <h1 className="text-xl">{product.name}</h1>
          </li>
          <li>
            <Rating
              value={product.rating}
              caption={`${product.numReviews} відгуків`}
            />
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            Опис продукту: <p>{product.description}</p>
          </li>
        </ul>

        <div className="card bg-base-300 shadow-xl">
          <div className="flex flex-col justify-between card-body ">
            <div className="mb-2 flex justify-between">
              <p>Ціна</p>
              <div>&#8372; {product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <p>Статус</p>
              <div>
                {product.countInStock > 0 ? "B наявності" : "Під замовлення"}
              </div>
            </div>
            {product.countInStock !== 0 && (
              <div className="card-actions justify-center">
                <AddToCart
                  item={{
                    ...convertDocToObj(product),
                    qty: 0,
                    color: "",
                    size: "",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
