"use client";

import useSWR from "swr";
import Link from "next/link";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ValidationRule, useForm } from "react-hook-form";

import { formatId } from "@/lib/utils";
import { Product } from "@/lib/models/ProductModel";

export default function ProductEditForm({ productId }: { productId: string }) {
  const router = useRouter();

  const [category, setCategory] = useState<string>("cross");

  const { data: product, error } = useSWR(`/api/admin/products/${productId}`);

  const { trigger: updateProduct, isMutating: isUpdating } = useSWRMutation(
    `/api/admin/products/${productId}`,

    async (url, { arg }) => {
      const res = await fetch(`${url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arg),
      });

      const data = await res.json();

      if (!res.ok) return toast.error(data.message);

      toast.success("Продукт успішно оновлено");

      router.push("/admin/products");
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Product>();

  useEffect(() => {
    if (!product) return;
    setValue("name", product.name);
    setValue("slug", product.slug);
    setValue("price", product.price);
    setValue("image", product.image);
    setValue("category", product.category);
    setValue("brand", product.brand);
    setValue("countInStock", product.countInStock);
    setValue("description", product.description);
  }, [product, setValue]);

  const formSubmit = async (formData: any) => {
    await updateProduct({ ...formData, category });
  };

  if (error) return error.message;

  if (!product) return "Завантаження...";

  const FormInput = ({
    id,
    name,
    label,
    required,
    pattern,
  }: {
    id: keyof Product;
    name: string;
    label: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className="md:flex mb-6">
      <label className="label md:w-1/5" htmlFor={id}>
        {label}
      </label>
      <div className="md:w-4/5">
        <input
          type="text"
          id={id}
          {...register(id, {
            required: required && `${name} is required`,
            pattern,
          })}
          className="input input-bordered w-full max-w-md"
        />
        {errors[id]?.message && (
          <div className="text-error">{errors[id]?.message}</div>
        )}
      </div>
    </div>
  );

  const uploadHandler = async (e: any) => {
    const toastId = toast.loading("Оновлення зображення...");

    try {
      const resSign = await fetch("/api/cloudinary-sign", {
        method: "POST",
      });

      const { signature, timestamp } = await resSign.json();

      const file = e.target.files[0];

      const formData = new FormData();

      formData.append("file", file);

      formData.append("signature", signature);

      formData.append("timestamp", timestamp);

      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      setValue("image", data.secure_url);

      toast.success("Файл успішно оновлений", {
        id: toastId,
      });
    } catch (err: any) {
      toast.error(err.message, {
        id: toastId,
      });
    }
  };

  return (
    <section className="py-1 md:py-2 xl:py-5 text-xs xl:text-base">
      <h1 className="text-xl py-4">
        Редагувати продукт - {formatId(productId)}
      </h1>

      <form onSubmit={handleSubmit(formSubmit)}>
        <FormInput name="Name" label="Найменування" id="name" required />
        <FormInput name="Slug" label="Slug товару" id="slug" required />
        <FormInput name="Image" label="Зображення" id="image" required />
        <div className="md:flex mb-6">
          <label className="label md:w-1/5" htmlFor="imageFile">
            Оновити зображення
          </label>
          <div className="md:w-4/5">
            <input
              type="file"
              className="file-input w-full max-w-md"
              id="imageFile"
              onChange={uploadHandler}
            />
          </div>
        </div>
        <FormInput name="Price" label="Ціна за одиницю" id="price" required />
        <div className="md:flex mb-6">
          <label className="label md:w-1/5" htmlFor="imageFile">
            Категорія
          </label>
          <select
            name="Category"
            id="category"
            required
            className="select select-bordered w-full max-w-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="cross" selected>
              Хрести
            </option>
            <option value="domes">Куполи</option>
            <option value="sheets">Аркуші</option>
            <option value="decor">Декор</option>
          </select>
        </div>
        <FormInput
          name="Description"
          label="Опис товару"
          id="description"
          required
        />
        <FormInput
          name="Count In Stock"
          label="Кількість"
          id="countInStock"
          required
        />

        <button type="submit" disabled={isUpdating} className="btn btn-primary">
          {isUpdating && <span className="loading loading-spinner"></span>}
          Оновити
        </button>
        <Link className="btn ml-4 " href="/admin/products">
          Відмінити
        </Link>
      </form>
    </section>
  );
}
