import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 md:gap-2">
        <div
          className="w-full h-[100px] md:h-[250px] xl:h-auto bg-cover rounded-md"
          style={{
            backgroundImage: "url('/decor.jpg')",
          }}
        ></div>
        <div>
          <h1 className="divider divider-accent font-bold xl:text-lg">
            Декоративні елементи
          </h1>
          <ul className="flex flex-col gap-1 md:gap-2 text-xs md:text-sm xl:text-base">
            <li>
              <p>
                Ми застосовуємо технологію напилення нітриду титану не лише на
                аркуші для покрівлі куполів та хрестів, але й на різних
                предметах завдяки нашим сучасним технологіям. Ця технологія
                дозволяє нам отримати ефект не тільки золота, але i міді,
                небесно-голубого aбo зеленого кольорів в поєднанні з різними
                поверхнями, такими як суперзеркало та шліфування (HL).
                Результатом є дивовижний вигляд предмета.
              </p>
            </li>
            <li>
              <p>
                Наша фірма гарантує атмосферостійкість напиленого покриття
                протягом 50 років згідно з результатами випробувань дії
                промислової атмосфери за ГOCT9.308-85, ГOCT9.908-85б,
                ГOCT92-1346-83 на вироби з магнітної нержавіючої сталі 12X17 за
                ГOCT1982-73 i немагнітної нержавіючої сталі 04X18H9 за
                ГOCT19282-73.
              </p>
            </li>
            <li>
              <p>
                Якщо ви бажаєте дізнатися більше про напилення нітриду титану на
                декоративні елементи, звертайтеся до наших фахівців.
              </p>
            </li>
          </ul>
          <ul className="flex justify-around text-xs md:text-sm xl:text-base p-5">
            <li>
              <Link href="/services" className="btn btn-ghost">
                Повернутися
              </Link>
            </li>
            <li>
              <Link href="/portfolio/decor" className="btn btn-ghost">
                Галерея робіт
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
