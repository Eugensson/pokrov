import { Metadata } from "next";

import { FaAward } from "react-icons/fa";

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
    <section>
      <Slider />
      <OurPreference />
      <OurServices />
      <OurProducts />
      <QualityGuarantee />
    </section>
  );
}
