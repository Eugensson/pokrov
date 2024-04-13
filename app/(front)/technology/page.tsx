import Image from "next/image";
import { IoCheckboxOutline } from "react-icons/io5";

const page = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-4 py-1 md:py-3">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-5 xl:gap-10 bg-base-300 rounded-lg shadow-xl p-2 md:p-4">
        <div
          className="w-full h-[150px] md:h-[200px] xl:h-auto bg-cover rounded-md"
          style={{
            backgroundImage: "url('/images/technology.jpg')",
            backgroundPosition: "0% 35%",
          }}
        ></div>
        <ul className="w-full flex flex-col gap-2 xl:gap-4">
          <li>
            <h1 className="font-bold text-sm md:text-xl xl:text-2xl text-center uppercase">
              Технологія нанесення покриття
            </h1>
          </li>
          <li>
            <p className="text-xs md:text-base xl:text-xl">
              Технологія вакуумного напилення, також відома як фізичне
              відкладення парової фази (PVD), є процесом, при якому тонкі шари
              матеріалу відкладаються на поверхні іншого матеріалу за допомогою
              вакуумної камери.
            </p>
          </li>
          <li>
            <p className="text-xs md:text-base xl:text-xl">
              У процесі вакуумного напилення, матеріал, який потрібно відкласти
              на поверхню, нагрівається до високої температури, після чого він
              випаровується і знаходиться в газоподібній фазі. Далі він
              конденсується на поверхні деталі, що має бути покритою, утворюючи
              тонкий шар.
            </p>
          </li>
          <li>
            <p className="text-xs md:text-base xl:text-xl">
              Процес вакуумного напилення може бути використаний для відкладання
              різних матеріалів, включаючи метали, кераміку, пластмасу, скло та
              інші матеріали. Ця технологія застосовується в багатьох галузях,
              таких як виробництво напівпровідників, аерокосмічна та
              автомобільна промисловість, медицина, електроніка та інші.
            </p>
          </li>
          <li>
            <p className="text-xs md:text-base xl:text-xl">
              Основними перевагами вакуумного напилення є висока якість тонкого
              шару, дуже малі розміри і товщина шару, висока адгезія до
              поверхні, висока чистота та точність розміщення матеріалу на
              поверхні. Однак, ця технологія має свої обмеження, зокрема
              відносно до розміру деталі, яку потрібно покрити, та витрат на
              обладнання та матеріали.
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-base-300 rounded-lg shadow-xl p-2 md:p-4">
        <h2 className="font-bold text-sm md:text-xl xl:text-2xl mb-2 md:mb-5">
          Технологія вакуумного напилення має декілька переваг, серед яких:
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              <span className="font-semibold">Висока якість покриття:</span>{" "}
              вакуумне напилення забезпечує однорідне, безпомилкове покриття,
              яке має високу адгезію до поверхні.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              <span className="font-semibold">Висока точність:</span> технологія
              вакуумного напилення дозволяє контролювати товщину покриття з
              високою точністю, що дозволяє досягти потрібної якості продукту.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              <span className="font-semibold">Економія матеріалів:</span>{" "}
              вакуумне напилення вимагає менше матеріалів для покриття поверхні
              порівняно з іншими технологіями, що дозволяє зменшити витрати на
              матеріали.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              <span className="font-semibold">
                He впливає на властивості матеріалу:
              </span>{" "}
              технологія вакуумного напилення не змінює фізичні та хімічні
              властивості матеріалу, що дозволяє зберігати його властивості.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              <span className="font-semibold">Висока стійкість:</span> покриття,
              отримане за допомогою вакуумного напилення, має високу стійкість
              до зносу, корозії та інших впливів навколишнього середовища.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              <span className="font-semibold">Безпека:</span> вакуумне напилення
              є безпечним для довкілля та людей, оскільки не використовує
              хімічні речовини, що можуть бути шкідливими.
            </p>
          </li>
          <li>
            <p className="text-xs md:text-base xl:text-xl">
              Такі переваги дозволяють технології вакуумного напилення бути
              корисною в багатьох галузях, включаючи медицину, електроніку,
              виробництво напівпровідників, промисловість та інші.
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-base-300 rounded-lg shadow-xl p-2 md:p-4">
        <h2 className="font-bold text-sm md:text-xl xl:text-2xl mb-2 md:mb-5">
          Вакуумна технологія напилення нітриду титану складається з етапів:
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              Підготовка матеріалу або виробу, який буде оброблятись, за
              допомогою ретельної механічної та електрохімічної обробки.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              Знегазування вакуумом безпосередньо в установці.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              Іонне очищення поверхні для підвищення якості покриття.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              Розпилення покриття нітриду титану на поверхню виробу.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              Формування нітрид-титанової плівки на поверхні виробу.
            </p>
          </li>
          <li className="flex items-center gap-2 xl:gap-4">
            <IoCheckboxOutline className="min-w-4 min-h-4 md:min-w-8 md:min-h-8" />
            <p className="text-xs md:text-base xl:text-xl">
              Термічна обробка плівки при температурі, що дещо перевищує
              температуру розпилення, для закріплення ефекту покриття.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default page;
