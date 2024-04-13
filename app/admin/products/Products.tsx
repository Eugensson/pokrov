"use client";
import { Product } from "@/lib/models/ProductModel";
import { formatId } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function Products() {
  const { data: products, error } = useSWR(`/api/admin/products`);

  const router = useRouter();

  const { trigger: deleteProduct } = useSWRMutation(
    `/api/admin/products`,
    async (url, { arg }: { arg: { productId: string } }) => {
      const toastId = toast.loading("Deleting product...");
      const res = await fetch(`${url}/${arg.productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      res.ok
        ? toast.success("Product deleted successfully", {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          });
    }
  );

  const { trigger: createProduct, isMutating: isCreating } = useSWRMutation(
    `/api/admin/products`,
    async (url) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success("Product created successfully");
      router.push(`/admin/products/${data.product._id}`);
    }
  );

  if (error) return "An error has occurred.";
  if (!products) return "Loading...";

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-2xl font-bold">Продукція</h1>
        <button
          disabled={isCreating}
          onClick={() => createProduct()}
          className="btn btn-primary btn-sm"
        >
          {isCreating && <span className="loading loading-spinner"></span>}
          Створити
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="text-sm font-bold uppercase">
            <tr>
              <th>Id</th>
              <th>Найменування товару</th>
              <th>Ціна, &#8372;</th>
              <th>Категорія</th>
              <th>Кількість на складі</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product._id}>
                <td>{formatId(product._id!)}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  {product.category === "cross" && "Хрести"}
                  {product.category === "domes" && "Куполи"}
                  {product.category === "sheets" && "Аркуші"}
                  {product.category === "decor" && "Декор"}
                </td>
                <td>{product.countInStock}</td>
                <td>
                  <Link
                    href={`/admin/products/${product._id}`}
                    type="button"
                    className="btn btn-ghost btn-sm"
                  >
                    Редагувати
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => deleteProduct({ productId: product._id! })}
                    type="button"
                    className="btn btn-ghost btn-sm"
                  >
                    Видалити
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
