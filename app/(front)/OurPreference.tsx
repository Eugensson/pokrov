import { FaLeaf } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { AiFillControl } from "react-icons/ai";
import { IoShieldCheckmark } from "react-icons/io5";

const OurPreference = () => {
  return (
    <section className="flex flex-col">
      <h2 className="divider divider-accent py-1 md:py-2 xl:py-5 text-lg font-semibold uppercase">
        Переваги
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 md:gap-3 xl:gap-5 shadow text-xs md:text-sm">
        <li className="stat place-items-center">
          <FaDroplet className="stat-value w-6 md:w-10 h-6 md:h-10 mb-2 md:mb-5 text-blue-900" />
          <p className="stat-title">Стійкість до атмосфери</p>
          <p className="stat-title">та хімічних речовин</p>
        </li>
        <li className="stat place-items-center">
          <AiFillControl className="stat-value w-6 md:w-10 h-6 md:h-10 mb-2 md:mb-5 text-red-500" />
          <p className="stat-title">Широка гамма кольору</p>
          <p className="stat-title">та фактури поверхні (матова-глянець)</p>
        </li>
        <li className="stat place-items-center">
          <IoShieldCheckmark className="stat-value w-6 md:w-10 h-6 md:h-10 mb-2 md:mb-5 text-indigo-500" />
          <p className="stat-title">Корозійна стійкість</p>
          <p className="stat-title">покриття виробів</p>
        </li>
        <li className="stat place-items-center">
          <FaLeaf className="stat-value w-6 md:w-10 h-6 md:h-10 mb-2 md:mb-5 text-green-900" />
          <p className="stat-title">Екологічність виробництва</p>
          <p className="stat-title">та експлуатації</p>
        </li>
      </ul>
    </section>
  );
};

export default OurPreference;
