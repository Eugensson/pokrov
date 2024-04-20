"use client";

import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import { useSession } from "next-auth/react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

import { OrderItem } from "@/lib/models/OrderModel";

export default function OrderDetails({
  orderId,
  paypalClientId,
}: {
  orderId: string;
  paypalClientId: string;
}) {
  const { trigger: deliverOrder, isMutating: isDelivering } = useSWRMutation(
    `/api/orders/${orderId}`,

    async (url) => {
      const res = await fetch(`/api/admin/orders/${orderId}/deliver`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      res.ok
        ? toast.success("Замовлення прийнято!")
        : toast.error(data.message);
    }
  );

  const { data: session } = useSession();

  function createPayPalOrder() {
    return fetch(`/api/orders/${orderId}/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((order) => order.id);
  }

  function onApprovePayPalOrder(data: any) {
    return fetch(`/api/orders/${orderId}/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((orderData) => {
        toast.success("Order paid successfully");
      });
  }

  const { data, error } = useSWR(`/api/orders/${orderId}`);

  if (error) return error.message;

  if (!data) return "Завантаження...";

  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    shippingPrice,
    totalPrice,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
  } = data;

  return (
    <div className="p-1">
      <h1 className="text-base font-bold py-4">Замовлення №: {orderId}</h1>
      <div className="grid md:grid-cols-6 gap-4 xl:grid-cols-4 xl:gap-5 my-4">
        <div className="md:col-span-4 xl:col-span-3">
          <div className="card bg-base-300">
            <div className="card-body p-4">
              <h2 className="card-title text-base">Адреса доставки</h2>
              <p>{shippingAddress.fullName}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.city},{" "}
                {shippingAddress.postalCode}, {shippingAddress.country}{" "}
              </p>
              {isDelivered ? (
                <div className="text-success">Доставка {deliveredAt}</div>
              ) : (
                <div className="text-success">Самовивіз</div>
              )}
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body p-4">
              <h2 className="card-title text-base">Спосіб оплати</h2>
              <p>{paymentMethod}</p>
              {paymentMethod ? (
                <div className="text-success">
                  На рахунок згідно рахунку-фактури
                </div>
              ) : (
                <div className="text-success">
                  Кур&apos;єру під час доставки
                </div>
              )}
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body p-4">
              <h2 className="card-title text-base">Відомості про замовлення</h2>
              <table className="table">
                <thead className="text-xs xl:text-base">
                  <tr>
                    <th className="p-2">Замовлення</th>
                    <th className="p-2">Кількість</th>
                    <th className="p-2">Ціна</th>
                  </tr>
                </thead>
                <tbody className="text-xs xl:text-base">
                  {items.map((item: OrderItem) => (
                    <tr key={item.slug}>
                      <td className="p-2">
                        <Link
                          href={`/product/${item.slug}`}
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          <span className="px-2">
                            {item.name} ({item.color} {item.size})
                          </span>
                        </Link>
                      </td>
                      <td className="p-2">{item.qty}</td>
                      <td className="p-2">&#8372; {item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 md:col-span-2 xl:col-span-1">
          <div className="card-body p-4">
            <h2 className="card-title text-base">Підсумок замовлення</h2>
            <ul>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Замовлення</div>
                  <div>&#8372;{itemsPrice}</div>
                </div>
              </li>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Доставка</div>
                  <div>&#8372;{shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Разом</div>
                  <div>&#8372;{totalPrice}</div>
                </div>
              </li>

              {session?.user.isAdmin && (
                <li>
                  <button
                    className="btn w-full my-2"
                    onClick={() => deliverOrder()}
                    disabled={isDelivering}
                  >
                    {isDelivering && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Доставлено
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
