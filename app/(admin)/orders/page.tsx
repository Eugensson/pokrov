import { Metadata } from "next";

import { columns } from "@/app/(admin)/orders/columns";
import { DataTable } from "@/app/(admin)/orders/data-table";

export const metadata: Metadata = {
  title: "Orders",
};

const Orders = async () => {
  return <DataTable columns={columns} />;
};

export default Orders;
