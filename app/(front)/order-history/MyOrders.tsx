"use client";

import useSWR from "swr";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Order } from "@/lib/models/OrderModel";

export default function MyOrders() {
  const router = useRouter();

  const { data: orders, error } = useSWR(`/api/orders/mine`);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  if (error) return "Сталася помилка.";

  if (!orders) return "Завантаження...";

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="font-bold text-xs xl:text-base uppercase">
          <tr className="text-md uppercase">
            <th className="p-2">Ідентифікатор</th>
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
              <td className="p-2">{order._id.substring(20, 24)}</td>
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
              <td>
                <Link href={`/order/${order._id}`} passHref>
                  Подробиці
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
