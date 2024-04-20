"use client";

import useSWR from "swr";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { ValidationRule, useForm } from "react-hook-form";

import { formatId } from "@/lib/utils";
import { User } from "@/lib/models/UserModel";

export default function UserEditForm({ userId }: { userId: string }) {
  const { data: user, error } = useSWR(`/api/admin/users/${userId}`);

  const router = useRouter();

  const { trigger: updateUser, isMutating: isUpdating } = useSWRMutation(
    `/api/admin/users/${userId}`,

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

      toast.success("Дані про користувача успішно оновлено");

      router.push("/admin/users");
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<User>();

  useEffect(() => {
    if (!user) return;
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("isAdmin", user.isAdmin);
  }, [user, setValue]);

  const formSubmit = async (formData: any) => {
    await updateUser(formData);
  };

  if (error) return error.message;

  if (!user) return "Завантаження...";

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof User;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className="md:flex my-3">
      <label className="label md:w-1/5" htmlFor={id}>
        {name}
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

  return (
    <section className="py-1 md:py-2 xl:py-5 text-xs xl:text-base">
      <h1 className="text-xl py-4">
        Редагувати інформацію про користувача - {formatId(userId)}
      </h1>

      <form onSubmit={handleSubmit(formSubmit)}>
        <FormInput name="Ім'я" id="name" required />
        <FormInput name="Email" id="email" required />

        <div className="flex items-center gap-5 my-3">
          <label className="label md:w-1/5" htmlFor="isAdmin">
            Адміністратор
          </label>
          <div className="md:w-4/5">
            <input
              id="isAdmin"
              type="checkbox"
              className="toggle"
              {...register("isAdmin")}
            />
          </div>
        </div>

        <button type="submit" disabled={isUpdating} className="btn btn-primary">
          {isUpdating && <span className="loading loading-spinner"></span>}
          Оновити
        </button>
        <Link className="btn ml-4" href="/admin/users">
          Відхилити
        </Link>
      </form>
    </section>
  );
}
