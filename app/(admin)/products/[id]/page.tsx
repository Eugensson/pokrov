import { EditProductForm } from "@/app/(admin)/products/[id]/edit-product-form";

import { getUniqueBrands, getUniqueCategories } from "@/lib/products";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  return {
    title: `Edit product ${id}`,
  };
};

const EditProduct = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const brands = await getUniqueBrands();
  const categories = await getUniqueCategories();

  return (
    <EditProductForm productId={id} categories={categories} brands={brands} />
  );
};

export default EditProduct;
