import { Metadata } from "next";

import Form from "@/app/(front)/profile/Form";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function Profile() {
  return <Form />;
}
