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

  if (!data) return "Loading...";

  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
  } = data;

  return (
    <div>
      <h1 className="text-2xl py-4">Order {orderId}</h1>
      <div className="grid md:grid-cols-4 md:gap-5 my-4">
        <div className="md:col-span-3">
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Адреса доставки</h2>
              <p>{shippingAddress.fullName}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.city},{" "}
                {shippingAddress.postalCode}, {shippingAddress.country}{" "}
              </p>
              {isDelivered ? (
                <div className="text-success">Доставка {deliveredAt}</div>
              ) : (
                <div className="text-error">Самовивіз</div>
              )}
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body">
              <h2 className="card-title">Спосіб оплати</h2>
              <p>{paymentMethod}</p>
              {isPaid ? (
                <div className="text-success">Paid at {paidAt}</div>
              ) : (
                <div className="text-error">Not Paid</div>
              )}
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body">
              <h2 className="card-title">Відомості про замовлення</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Замовлення</th>
                    <th>Кількість</th>
                    <th>Ціна</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item: OrderItem) => (
                    <tr key={item.slug}>
                      <td>
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
                      <td>{item.qty}</td>
                      <td>&#8372; {item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Підсумок замовлення</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Замовлення</div>
                    <div>&#8372;{itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Податок</div>
                    <div>&#8372;{taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Вартість доставки</div>
                    <div>&#8372;{shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Підсумкова вартість</div>
                    <div>&#8372;{totalPrice}</div>
                  </div>
                </li>

                {!isPaid && paymentMethod === "PayPal" && (
                  <li>
                    <PayPalScriptProvider
                      options={{ clientId: paypalClientId }}
                    >
                      <PayPalButtons
                        createOrder={createPayPalOrder}
                        onApprove={onApprovePayPalOrder}
                      />
                    </PayPalScriptProvider>
                  </li>
                )}
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
                      Позначити як доставлене
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
