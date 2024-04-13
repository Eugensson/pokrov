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

  if (error) return "An error has occurred.";

  if (!orders) return "Loading...";

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-md uppercase">
            <th>Ідентифікатор</th>
            <th>Дата</th>
            <th>Разом</th>
            <th>Оплата</th>
            <th>Доставка</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order) => (
            <tr key={order._id}>
              <td>{order._id.substring(20, 24)}</td>
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>${order.totalPrice}</td>
              <td>
                {order.isPaid && order.paidAt
                  ? `${order.paidAt.substring(0, 10)}`
                  : "not paid"}
              </td>
              <td>
                {order.isDelivered && order.deliveredAt
                  ? `${order.deliveredAt.substring(0, 10)}`
                  : "not delivered"}
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
