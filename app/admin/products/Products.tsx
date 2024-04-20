"use client";

import useSWR from "swr";
import Link from "next/link";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import { formatId } from "@/lib/utils";
import { Product } from "@/lib/models/ProductModel";

export default function Products() {
  const { data: products, error } = useSWR(`/api/admin/products`);

  const router = useRouter();

  const { trigger: deleteProduct } = useSWRMutation(
    `/api/admin/products`,
    async (url, { arg }: { arg: { productId: string } }) => {
      const toastId = toast.loading("Видалення продукту...");

      const res = await fetch(`${url}/${arg.productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      res.ok
        ? toast.success("Продукт успішно видалено", {
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

      toast.success("Продукт створено");
      router.push(`/admin/products/${data.product._id}`);
    }
  );

  if (error) return "Сталася помилка.";

  if (!products) return "Завантаження...";

  return (
    <section className="py-1 md:py-2 xl:py-5">
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-xl font-bold">Продукція</h1>
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
          <thead className="font-bold text-xs xl:text-base uppercase">
            <tr>
              <th className="p-2">Id</th>
              <th className="p-2">Найменування товару</th>
              <th className="p-2">Ціна, &#8372;</th>
              <th className="p-2">Категорія</th>
              <th className="p-2">Кількість</th>
              <th className="p-2">Додатково</th>
            </tr>
          </thead>
          <tbody className="text-xs xl:text-base">
            {products.map((product: Product) => (
              <tr key={product._id}>
                <td className="p-2">{formatId(product._id!)}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">
                  {product.category === "cross" && "Хрести"}
                  {product.category === "domes" && "Куполи"}
                  {product.category === "sheets" && "Аркуші"}
                  {product.category === "decor" && "Декор"}
                </td>
                <td className="p-2">{product.countInStock}</td>
                <td className="p-2">
                  <Link
                    href={`/admin/products/${product._id}`}
                    type="button"
                    className="btn btn-ghost btn-sm"
                  >
                    <MdEdit className="w-5 h-5" />
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => deleteProduct({ productId: product._id! })}
                    type="button"
                    className="btn btn-ghost btn-sm"
                  >
                    <MdDeleteForever className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
