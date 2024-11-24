import { Product } from "@prisma/client";
import { ProductCard } from "./product-card";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <section>
      {products.length ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="pt-6 text-center">No products found</p>
      )}
    </section>
  );
};
