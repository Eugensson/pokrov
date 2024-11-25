import { Metadata } from "next";

import { ProductList } from "@/components/product-list";

import { getProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
};

const Shop = async () => {
  const products = await getProducts();

  return (
    <div className="container">
      <ProductList products={products} />
    </div>
  );
};

export default Shop;
