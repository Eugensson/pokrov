import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="w-full h-[80px] md:h-[180px] xl:h-[250px] bg-cover rounded-md"
        style={{
          backgroundImage: "url('/images/servicesDecor.jpg')",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="flex flex-col gap-1 md:gap-2 bg-base-300 rounded-lg shadow-xl p-2 md:p-5">
        <h1 className="font-bold text-xs md:text-xl xl:text-2xl text-center uppercase">
          Декоративні елементи
        </h1>
        <p className="text-xs md:text-base xl:text-xl">
          Ми застосовуємо технологію напилення нітриду титану не лише на аркуші
          для покрівлі куполів та хрестів, але й на різних предметах завдяки
          нашим сучасним технологіям. Ця технологія дозволяє нам отримати ефект
          не тільки золота, але i міді, небесно-голубого aбo зеленого кольорів в
          поєднанні з різними поверхнями, такими як суперзеркало та шліфування
          (HL). Результатом є дивовижний вигляд предмета.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Наша фірма гарантує атмосферостійкість напиленого покриття протягом 50
          років згідно з результатами випробувань дії промислової атмосфери за
          ГOCT9.308-85, ГOCT9.908-85б, ГOCT92-1346-83 на вироби з магнітної
          нержавіючої сталі 12X17 за ГOCT1982-73 i немагнітної нержавіючої сталі
          04X18H9 за ГOCT19282-73.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Якщо ви бажаєте дізнатися більше про напилення нітриду титану на
          декоративні елементи, звертайтеся до наших фахівців.
        </p>
        <ul className="flex justify-around text-xs md:text-base xl:text-xl font-semibold my-2 md:my-5 xl:my-10">
          <li className="hover:text-primary">
            <Link href="/services">Послуги</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/portfolio/decor">Галерея робіт</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
