"use client";
import { Order } from "@/lib/models/OrderModel";
import Link from "next/link";
import useSWR from "swr";

export default function Orders() {
  const { data: orders, error } = useSWR(`/api/admin/orders`);
  if (error) return "An error has occurred.";
  if (!orders) return "Loading...";

  return (
    <div>
      <h1 className="py-4 text-2xl font-bold">Замовлення</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-sm font-bold uppercase">
            <tr>
              <th>Id</th>
              <th>Користувач</th>
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
                <td>..{order._id.substring(20, 24)}</td>
                <td>{order.user?.name || "Deleted user"}</td>
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
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
