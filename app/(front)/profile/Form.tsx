"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Form = () => {
  const router = useRouter();

  const { data: session, update } = useSession();

  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session && session.user) {
      setValue("name", session.user.name!);
      setValue("email", session.user.email!);
    }
  }, [router, session, setValue]);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { name, email, password } = form;

    try {
      const res = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 200) {
        toast.success("Профіль успішно оновлено");

        const newSession = {
          ...session,
          user: {
            ...session?.user,
            name,
            email,
          },
        };

        await update(newSession);
      } else {
        const data = await res.json();

        toast.error(data.message || "Помилка");
      }
    } catch (err: any) {
      const error =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message;

      toast.error(error);
    }
  };

  const toggleVisblePass = () => setIsVisiblePass((prev) => !prev);

  return (
    <div className="max-w-sm mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Профіль</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-2">
            <label className="label" htmlFor="name">
              Ім&apos;я
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Ім'я обов'язкове поле",
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.name?.message && (
              <div className="text-error text-xs mt-2">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="my-2">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email обов'язкове поле",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email хибний",
                },
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.email?.message && (
              <div className="text-error text-xs mt-2">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="my-2 relative">
            <label className="label" htmlFor="password">
              Новий пароль
            </label>
            <input
              type={isVisiblePass ? "text" : "password"}
              id="password"
              placeholder="******"
              autoComplete="off"
              {...register("password", {})}
              className="input input-bordered w-full max-w-sm"
            />
            {isVisiblePass ? (
              <FaRegEyeSlash
                className="absolute bottom-4 right-4 w-4 h-4 cursor-pointer"
                onClick={toggleVisblePass}
              />
            ) : (
              <FaRegEye
                className="absolute bottom-4 right-4 w-4 h-4 cursor-pointer text-neutral/75"
                onClick={toggleVisblePass}
              />
            )}
            {errors.password?.message && (
              <div className="text-error text-xs mt-2">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="my-2 relative">
            <label className="label" htmlFor="confirmPassword">
              Підтвердження паролю
            </label>
            <input
              type={isVisiblePass ? "text" : "password"}
              id="confirmPassword"
              placeholder="******"
              autoComplete="off"
              {...register("confirmPassword", {
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Паролі повинні співпадати!";
                },
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.confirmPassword?.message && (
              <div className="text-error text-xs mt-2">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <div className="my-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full mt-5"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Оновити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
