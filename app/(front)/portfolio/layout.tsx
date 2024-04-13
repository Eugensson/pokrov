import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ТОВ НВФ Покров | Галерея робіт",
  description: "Світлини виготовленої продукції",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex-grow container mx-auto">{children}</main>;
}
