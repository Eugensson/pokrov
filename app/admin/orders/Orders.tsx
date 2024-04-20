"use client";

import useSWR from "swr";
import Link from "next/link";

import { Order } from "@/lib/models/OrderModel";

export default function Orders() {
  const { data: orders, error } = useSWR(`/api/admin/orders`);
  if (error) return "An error has occurred.";
  if (!orders) return "Loading...";

  return (
    <section className="py-1 md:py-2 xl:py-5">
      <h1 className="py-4 text-xl font-bold">Замовлення</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="font-bold text-xs xl:text-base uppercase">
            <tr>
              <th className="p-2">Id</th>
              <th className="p-2">Користувач</th>
              <th className="p-2">Дата</th>
              <th className="p-2">Сума</th>
              <th className="p-2">Оплата</th>
              <th className="p-2">Доставка</th>
              <th className="p-2">Додатково</th>
            </tr>
          </thead>
          <tbody className="text-xs xl:text-base">
            {orders.map((order: Order) => (
              <tr key={order._id}>
                <td className="p-2">..{order._id.substring(20, 24)}</td>
                <td className="p-2">{order.user?.name || "Видалити"}</td>
                <td className="p-2">{order.createdAt.substring(0, 10)}</td>
                <td className="p-2">&#8372; {order.totalPrice}</td>
                <td className="p-2">
                  {order.isPaid && order.paidAt
                    ? `${order.paidAt.substring(0, 10)}`
                    : "Не оплачено"}
                </td>
                <td className="p-2">
                  {order.isDelivered && order.deliveredAt
                    ? `${order.deliveredAt.substring(0, 10)}`
                    : "Самовивіз"}
                </td>
                <td className="p-2">
                  <Link href={`/order/${order._id}`} passHref>
                    Деталі
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
