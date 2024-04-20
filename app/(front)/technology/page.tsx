import { IoCheckboxOutline } from "react-icons/io5";

const page = () => {
  return (
    <section className="px-1 md:py-2 xl:py-5 text-xs md:text-sm xl:text-base">
      <h1 className="divider divider-accent font-bold uppercase">Технологія</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-10">
        <div
          className="w-full h-[100px] md:h-auto bg-cover rounded-md"
          style={{
            backgroundImage: "url('/images/technology/technology.jpg')",
            backgroundPosition: "0% 30%",
          }}
        ></div>
        <div className="md:col-span-2">
          <p className="mb-1 md:mb-3">
            Технологія вакуумного напилення (фізичне відкладення парової фази,
            PVD) - процес, за якого тонкі шари матеріалу відкладаються на
            поверхні іншого матеріалу.
          </p>
          <p className="mb-1 md:mb-3">
            Матеріал, який потрібно відкласти на поверхню, нагрівається до
            високої температури, випаровується з подальшим конденсуванням на
            поверхні деталі, утворюючи тонкий шар.
          </p>
          <p className="mb-1 md:mb-3">
            В якості матеріалу можуть виступати метали, кераміка, пластик, скло
            тощо. Ця технологія широко застосовується в багатьох галузях,
            зокрема у виробництві напівпровідників, аерокосмічій, автомобільній,
            медичній, електроніка тощо.
          </p>
          <p className="mb-1 md:mb-3">
            Основними перевагами вакуумного напилення є висока якість тонкого
            шару, дуже малі розміри і товщина шару, висока адгезія до поверхні,
            висока чистота та точність розміщення матеріалу на поверхні.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="divider divider-accent font-semibold">
            Переваги технології:
          </h2>
          <ul className="flex flex-col gap-1 md:gap-2">
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                <span className="font-semibold mr-2">
                  Висока якість покриття:
                </span>
                вакуумне напилення забезпечує однорідне, безпомилкове покриття,
                яке має високу адгезію до поверхні.
              </p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                <span className="font-semibold mr-2">Висока точність:</span>
                технологія вакуумного напилення дозволяє контролювати товщину
                покриття з високою точністю, що дозволяє досягти потрібної
                якості продукту.
              </p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                <span className="font-semibold mr-2">Економія матеріалів:</span>
                вакуумне напилення вимагає менше матеріалів для покриття
                поверхні порівняно з іншими технологіями, що дозволяє зменшити
                витрати на матеріали.
              </p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                <span className="font-semibold mr-2">
                  He впливає на властивості матеріалу:
                </span>
                технологія вакуумного напилення не змінює фізичні та хімічні
                властивості матеріалу, що дозволяє зберігати його властивості.
              </p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                <span className="font-semibold mr-2">Висока стійкість:</span>
                покриття, отримане за допомогою вакуумного напилення, має високу
                стійкість до зносу, корозії та інших впливів навколишнього
                середовища.
              </p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                <span className="font-semibold mr-2">Безпека:</span>вакуумне
                напилення є безпечним для довкілля та людей, оскільки не
                використовує хімічні речовини, що можуть бути шкідливими.
              </p>
            </li>
            <li>
              <p>
                Такі переваги дозволяють технології вакуумного напилення бути
                корисною в багатьох галузях, включаючи медицину, електроніку,
                виробництво напівпровідників, промисловість та інші.
              </p>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="divider divider-accent font-semibold">
            Етапи техпроцесу:
          </h2>
          <ul className="flex flex-col gap-1 md:gap-2">
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                Підготовка матеріалу або виробу, який буде оброблятись, за
                допомогою ретельної механічної та електрохімічної обробки.
              </p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>Знегазування вакуумом безпосередньо в установці.</p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>Іонне очищення поверхні для підвищення якості покриття.</p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>Розпилення покриття нітриду титану на поверхню виробу.</p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>Формування нітрид-титанової плівки на поверхні виробу.</p>
            </li>
            <li className="flex items-center gap-2 xl:gap-4">
              <IoCheckboxOutline className="min-w-4 min-h-4" />
              <p>
                Термічна обробка плівки при температурі, що дещо перевищує
                температуру розпилення, для закріплення ефекту покриття.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
