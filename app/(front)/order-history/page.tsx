import { Metadata } from "next";

import MyOrders from "@/app/(front)/order-history/MyOrders";

export const metadata: Metadata = {
  title: "Order History",
};

export default function OrderHistory() {
  return (
    <section className="p-1">
      <h1 className="py-4 text-xl font-bold">Історія замовлень</h1>
      <MyOrders />
    </section>
  );
}
