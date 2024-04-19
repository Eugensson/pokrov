import { FaLeaf } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { AiFillControl } from "react-icons/ai";
import { IoShieldCheckmark } from "react-icons/io5";

const OurPreference = () => {
  return (
    <section className="flex flex-col mx-auto">
      <div className="divider divider-accent py-10 text-2xl font-bold uppercase">
        Переваги
      </div>
      <ul className="w-full flex flex-col md:flex-row mx-auto stats shadow">
        <li className="stat place-items-center">
          <FaDroplet className="w-10 h-10 mb-5 text-blue-900" />
          <p className="stat-title">Стійкість до атмосфери</p>
          <p className="stat-title">та хімічних речовин</p>
        </li>
        <li className="stat place-items-center ">
          <div className="stat-value mb-5">
            <AiFillControl className="w-10 h-10 text-red-500" />
          </div>
          <p className="stat-title">Широка гамма кольору</p>
          <p className="stat-title">та фактури поверхні (матова-глянець)</p>
        </li>
        <li className="stat place-items-center ">
          <div className="stat-value mb-5">
            <IoShieldCheckmark className="w-10 h-10 text-indigo-500" />
          </div>
          <p className="stat-title">Корозійна стійкість</p>
          <p className="stat-title">покриття виробів</p>
        </li>
        <li className="stat place-items-center ">
          <div className="stat-value mb-5 text-green-900">
            <FaLeaf className="w-10 h-10" />
          </div>
          <p className="stat-title">Екологічність виробництва</p>
          <p className="stat-title">та експлуатації</p>
        </li>
      </ul>
    </section>
  );
};

export default OurPreference;
