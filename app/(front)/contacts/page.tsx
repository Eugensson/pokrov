import Link from "next/link";
import { Metadata } from "next";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail, IoLocationOutline } from "react-icons/io5";

import Map from "@/components/Map";
import ConatactForm from "./ConatactForm";

export const metadata: Metadata = {
  title: "ТОВ НВФ Покров | Контакти",
  description: "Контактна інформація",
};

const page = () => {
  return (
    <section className="py-1 md:py-2 xl:py-5">
      <h1 className="divider divider-accent text-xl font-bold uppercase">
        Контакти
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-5">
        <div className="flex flex-col gap-2 p-4">
          <h2 className="divider divider-accent font-semibold uppercase">
            Зателефонуйте:
          </h2>
          <Link
            href="tel:+380965300300"
            className="font-bold hover:text-primary"
          >
            +38 096 5 300 300
          </Link>
          <Link
            href="tel:+380665300300"
            className="font-bold hover:text-primary"
          >
            +38 066 5 300 300
          </Link>
          <Link
            href="tel:+380682300300"
            className="font-bold hover:text-primary"
          >
            +38 068 2 300 300
          </Link>
          <h2 className="divider divider-accent font-semibold uppercase">
            Напишіть нам:
          </h2>
          <Link
            href="mailto:pokrov-ltd@ukr.net"
            className="font-bold hover:text-primary"
          >
            pokrov-ltd@ukr.net
          </Link>
          <h2 className="divider divider-accent font-semibold uppercase">
            Завітайте до нас:
          </h2>
          <p className="font-bold text-sm lg:text-base">18021, Україна,</p>
          <p className="font-bold text-sm lg:text-base">
            Черкаська обл., м. Черкаси,
          </p>
          <p className="font-bold text-sm lg:text-base">
            вул. Macимa Залізняка, 167
          </p>
        </div>
        <div className="flex flex-col p-4 bg-base-200">
          <ConatactForm />
        </div>
        <div className="md:col-span-2 xl:col-span-1">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default page;
