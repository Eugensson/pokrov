import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./rating";
import { ProductPrice } from "./product-price";
import { Badge } from "./ui/badge";
import { Product } from "@prisma/client";

export const ProductCard = ({ product }: { product: Product }) => {
  const imageUrl = product.thumbnail ?? "/images/placeholder.png";

  return (
    <Card className="h-fit">
      <CardContent className="p-0">
        <figure className="overflow-hidden relative">
          <Link href={`/product/${product.id}`}>
            <Image
              src={imageUrl}
              alt={product.title || "Product image"}
              width={350}
              height={350}
              className="object-cover aspect-square bg-center hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>
          <Badge
            className="absolute top-4 right-4 px-4 py-1.5 rounded"
            variant="destructive"
          >
            - {product.discountPercentage} %
          </Badge>
        </figure>
      </CardContent>
      <CardHeader>
        <CardTitle>
          <Link
            href={`/product/${product.id}`}
            className="text-sm font-medium uppercase line-clamp-2"
          >
            {product.title}
          </Link>
        </CardTitle>
        <CardDescription className="flex flex-col gap-2">
          <div className="flex items-center">
            <span className="flex-1">Brand:</span>
            <Link
              href={`/shop?q=all&category=all&price=all&brand=${product.brand}&rating=all&sort=newest&page=1`}
              className="flex-1 capitalize hover:underline"
            >
              {product.brand}
            </Link>
          </div>
          <div className="flex items-center">
            <span className="flex-1">Category:</span>
            <Link
              href={`/shop?q=all&category=${product.category}&price=all&brand=all&rating=all&sort=newest&page=1`}
              className="flex-1 capitalize hover:underline"
            >
              {product.category}
            </Link>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="pb-4 justify-between items-center">
        <Rating value={Number(product.rating)} />
        <ProductPrice value={product.price} />
      </CardFooter>
    </Card>
  );
};
