import Link from "next/link";
import Image from "next/image";
import { BsInfoSquare } from "react-icons/bs";

import { Product } from "@/lib/models/ProductModel";
import { Rating } from "@/components/products/Rating";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <article className="card bg-base-100 shadow-xl">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={275}
            height={275}
            className="object-cover w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <Rating value={product.rating} caption={`(${product.numReviews})`} />
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">&#8372; {product.price}</span>
          <Link href={`/product/${product.slug}`}>
            <BsInfoSquare className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </article>
  );
}
