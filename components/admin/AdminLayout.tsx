import Link from "next/link";

import { auth } from "@/lib/auth";

const AdminLayout = async ({
  activeItem = "dashboard",
  children,
}: {
  activeItem: string;
  children: React.ReactNode;
}) => {
  const session = await auth();

  if (!session || !session.user.isAdmin) {
    return (
      <div className="relative flex flex-grow p-4">
        <div>
          <h1 className="text-2xl">Не авторизований</h1>
          <p>Потрібен дозвіл адміністратора</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-grow">
      <div className="w-full grid md:grid-cols-5">
        <div className="bg-base-200">
          <ul className="menu">
            <li>
              <Link
                className={"dashboard" === activeItem ? "active" : ""}
                href="/admin/dashboard"
              >
                Панель адміністрування
              </Link>
            </li>
            <li>
              <Link
                className={"orders" === activeItem ? "active" : ""}
                href="/admin/orders"
              >
                Замовлення
              </Link>
            </li>
            <li>
              <Link
                className={"products" === activeItem ? "active" : ""}
                href="/admin/products"
              >
                Продукція
              </Link>
            </li>
            <li>
              <Link
                className={"users" === activeItem ? "active" : ""}
                href="/admin/users"
              >
                Користувачі
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 px-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
