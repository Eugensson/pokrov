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
  return (
    <section className="flex flex-col py-1 md:py-2 xl:py-5">{children}</section>
  );
}
