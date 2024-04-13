import { FaLeaf } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { AiFillControl } from "react-icons/ai";
import { IoShieldCheckmark } from "react-icons/io5";

const OurPreference = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 py-1 md:py-3">
      <li className="card gap-1 bg-base-300 border shadow-xl p-1 md:p-3">
        <FaDroplet className="w-8 h-8 md:w-12 md:h-12 text-blue-900 mx-auto" />
        <h3 className="font-bold text-xs md:text-lg text-center md:min-h-[60px]">
          Стійкість до атмосферних явищ та хімічних речовин
        </h3>
        <p className="text-xs md:text-base text-center">
          Покриття захищає поверхню від атмосферного впливу та хімічних речовин,
          підвищуючи довговічність виробів.
        </p>
      </li>
      <li className="card gap-1 bg-base-300 border shadow-xl p-1 md:p-3">
        <AiFillControl className="w-8 h-8 md:w-12 md:h-12 text-red-500 mx-auto" />
        <h3 className="font-bold text-xs md:text-lg text-center md:min-h-[60px]">
          Контроль кольору та відбиваності
        </h3>
        <p className="text-xs md:text-base text-center">
          Регулюємо колір покриття, відтінки кольорів та рівень відбиваності
          поверхні (від дзеркальної до матової).
        </p>
      </li>
      <li className="card gap-1 bg-base-300 border shadow-xl p-1 md:p-3">
        <IoShieldCheckmark className="w-8 h-8 md:w-12 md:h-12 text-indigo-500 mx-auto" />
        <h3 className="font-bold text-xs md:text-lg text-center md:min-h-[60px]">
          Стійкість до корозії
        </h3>
        <p className="text-xs md:text-base text-center">
          Покриття має високу стійкість до корозії, що забезпечує тривалий
          термін експлуатації виробів.
        </p>
      </li>
      <li className="card gap-1 bg-base-300 border shadow-xl p-1 md:p-3">
        <FaLeaf className="w-8 h-8 md:w-12 md:h-12 text-green-900 mx-auto" />
        <h3 className="font-bold text-xs md:text-lg text-center md:min-h-[60px]">
          Екологічна безпека
        </h3>
        <p className="text-xs md:text-base text-center">
          Процес виконується в вакуумі, що дозволяє знизити рівень забруднення
          довкілля.
        </p>
      </li>
    </ul>
  );
};

export default OurPreference;
