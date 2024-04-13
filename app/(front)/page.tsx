import { Metadata } from "next";

import Slider from "@/components/Slider";
import OurProducts from "@/app/(front)/OurProducts";
import OurServices from "@/app/(front)/OurServices";
import OurPreference from "@/app/(front)/OurPreference";
import QualityGuarantee from "@/app/(front)/QualityGuarantee";

export const metadata: Metadata = {
  title: "ТОВ НВФ Покров | Головна",
  description: "Послуги з нанесення зностостійкого декоративного покриття",
};

export default async function Home() {
  return (
    <section className="py-1 md:py-2 xl:py-4">
      <Slider />
      <OurPreference />
      <OurServices />
      <OurProducts />
      <QualityGuarantee />
    </section>
  );
}
