import { Metadata } from "next";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const metadata: Metadata = {
  title: "Users",
};

const Users = () => {
  return <DataTable columns={columns} />;
};

export default Users;
