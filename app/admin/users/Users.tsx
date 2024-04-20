"use client";

import useSWR from "swr";
import Link from "next/link";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { MdEdit, MdDeleteForever } from "react-icons/md";

import { formatId } from "@/lib/utils";
import { User } from "@/lib/models/UserModel";

export default function Users() {
  const { data: users, error } = useSWR(`/api/admin/users`);

  const { trigger: deleteUser } = useSWRMutation(
    `/api/admin/users`,

    async (url, { arg }: { arg: { userId: string } }) => {
      const toastId = toast.loading("Deleting user...");

      const res = await fetch(`${url}/${arg.userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      res.ok
        ? toast.success("Користувача успішно видалено.", {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          });
    }
  );

  if (error) return "Сталася помилка.";

  if (!users) return "Завантаження...";

  return (
    <section className="py-1 md:py-2 xl:py-5">
      <h1 className="py-4 text-xl font-bold">Користувачі</h1>

      <table className="table table-zebra overflow-x-auto">
        <thead className="font-bold text-xs xl:text-base uppercase">
          <tr>
            <th className="p-2">Id</th>
            <th className="p-2">Ім&apos;я</th>
            <th className="p-2">Електронна скриня</th>
            <th className="p-2">Адмін</th>
            <th className="p-2">Додатково</th>
          </tr>
        </thead>
        <tbody className="text-xs xl:text-base">
          {users.map((user: User) => (
            <tr key={user._id}>
              <td className="p-2">{formatId(user._id)}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.isAdmin ? "Так" : "Ні"}</td>

              <td className="p-2">
                <Link
                  href={`/admin/users/${user._id}`}
                  type="button"
                  className="btn btn-ghost btn-sm"
                >
                  <MdEdit className="w-5 h-5" />
                </Link>
                &nbsp;
                <button
                  onClick={() => deleteUser({ userId: user._id })}
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
    </section>
  );
}
