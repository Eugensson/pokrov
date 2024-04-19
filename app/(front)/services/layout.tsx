import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ТОВ НВФ Покров | Послуги",
  description: "Послуги, які надаються компанією",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
