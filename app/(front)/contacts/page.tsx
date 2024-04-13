import Link from "next/link";
import { Metadata } from "next";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail, IoLocationOutline } from "react-icons/io5";

import Map from "@/components/Map";
import ConatactForm from "./ConatactForm";

export const metadata: Metadata = {
  title: "ТОВ НВФ Покров | Контакти",
  description: "Контактна інформація ТОВ НВФ Покров",
};

const page = () => {
  return (
    <section className="py-2 md:py-5 lg:py-10">
      <h1 className="hidden">Контакти</h1>
      <ul className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto mb-2 md:mb-5">
        <li className="card bg-base-300 shadow-xl p-3 lg:p-5">
          <p className="font-bold mb-3 lg:mb-5 lg:text-lg uppercase text-center">
            Зателефонуйте:
          </p>
          <div className="flex flex-col gap-2 mt-auto">
            <Link
              href="tel:+380965300300"
              className="font-bold text-sm lg:text-base hover:text-primary"
            >
              +38 096 5 300 300
            </Link>
            <Link
              href="tel:+380665300300"
              className="font-bold text-sm lg:text-base hover:text-primary"
            >
              +38 066 5 300 300
            </Link>
            <Link
              href="tel:+380682300300"
              className="font-bold text-sm lg:text-base hover:text-primary"
            >
              +38 068 2 300 300
            </Link>
          </div>
          <FaPhoneVolume className="absolute bottom-5 right-5 w-5 h-5 text-primary" />
        </li>
        <li className="card bg-base-300 shadow-xl p-3 lg:p-5">
          <p className="font-bold mb-3 lg:mb-5 lg:text-lg uppercase text-center">
            Напишіть нам:
          </p>
          <div className="flex flex-col space-y-2 mt-auto">
            <Link
              href="mailto:pokrov-ltd@ukr.net"
              className="font-bold text-sm lg:text-base hover:text-primary"
            >
              pokrov-ltd@ukr.net
            </Link>
          </div>
          <IoMail className="absolute bottom-5 right-5 w-6 h-6 text-primary" />
        </li>
        <li className="card bg-base-300 shadow-xl p-3 lg:p-5">
          <p className="font-bold mb-3 lg:mb-5 lg:text-lg uppercase text-center">
            Завітайте до нас:
          </p>
          <div className="flex flex-col gap-2 mt-auto">
            <p className="font-bold text-sm lg:text-base">
              Україна, Черкаська область,
            </p>
            <p className="font-bold text-sm lg:text-base">м.Черкаси,</p>
            <p className="font-bold text-sm lg:text-base">
              вул. M.Залізняка, 167
            </p>
          </div>
          <IoLocationOutline className="absolute bottom-5 right-5 w-6 h-6 text-primary" />
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
        <ConatactForm />
        <Map />
      </div>
    </section>
  );
};

export default page;
