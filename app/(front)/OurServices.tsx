import Link from "next/link";
import { RxGear } from "react-icons/rx";
import { FaAward } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";

const OurServices = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 xl:gap-4 py-2 md:py-3">
      <li>
        <article className="group relative block h-40 md:h-60">
          <div className="relative flex h-full transform items-end border-1 rounded-lg bg-base-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-2 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <RiProductHuntLine className="w-12 h-12 text-primary mb-2" />
              <h2 className="text-xl font-bold">Послуги</h2>
            </div>

            <div className="absolute p-2 md:p-5 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <p className="text-xs md:text-base">
                ТОВ НВФ &quot;Покров&quot; займається напиленням нітрид-титану
                на листову нержавіючу сталь та декоративні елементи
                (рушникосушки, поручні басейнів, змішувачі тощо).
              </p>

              <Link
                href="/services"
                className="block mt-2 md:mt-5 font-bold hover:text-primary"
              >
                Докладніше
              </Link>
            </div>
          </div>
        </article>
      </li>
      <li>
        <article className="group relative block h-40 md:h-60">
          <div className="relative flex h-full transform items-end border-1 rounded-lg  border-black/20 bg-base-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <RxGear className="w-12 h-12 text-primary mb-2" />
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Можливості
              </h2>
            </div>

            <div className="absolute p-2 md:p-5 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <p className="text-xs md:text-base">
                Технологія вакуумного напилення, також відома як фізичне
                відкладення парової фази (PVD), є процесом, при якому тонкі шари
                матеріалу відкладаються на поверхні...
              </p>

              <Link
                href="/technology"
                className="block mt-2 md:mt-5 font-bold hover:text-primary"
              >
                Докладніше
              </Link>
            </div>
          </div>
        </article>
      </li>
      <li>
        <article className="group relative block h-40 md:h-60">
          <div className="relative flex h-full transform items-end border-1 rounded-lg  border-black/20 bg-base-300 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <FaAward className="w-12 h-12 text-primary mb-2" />
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Гарантія якості
              </h2>
            </div>

            <div className="absolute p-2 md:p-5 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
              <p className="text-xs md:text-base">
                Ми гарантуємо 50-річну стійкість наших виробів, вкритих нітридом
                титану, до дії атмосферних (в тому числі, й агресивних, і
                промислових) явищ...
              </p>

              <Link
                href="/assurance"
                className="block mt-2 md:mt-5 font-bold hover:text-primary"
              >
                Докладніше
              </Link>
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default OurServices;
