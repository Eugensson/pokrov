import { ProductList } from "@/components/product-list";
import { getProducts } from "@/data/products";

const Shop = async () => {
  const { products } = await getProducts();

  return <ProductList products={products} />;
};

export default Shop;
