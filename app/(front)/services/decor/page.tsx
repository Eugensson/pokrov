import Link from "next/link";

const page = () => {
  return (
    <section className="px-1 md:py-2 xl:py-5 text-xs md:text-sm xl:text-base">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-10">
        <div
          className="w-full h-[100px] md:h-[250px] xl:h-[550px] bg-cover rounded-md"
          style={{
            backgroundImage: "url('/images/services/decor.jpg')",
            backgroundPosition: "25% 15%",
          }}
        ></div>
        <div>
          <h2 className="divider divider-accent font-semibold">
            Декоративні елементи
          </h2>
          <ul className="flex flex-col gap-3 md:gap-5">
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
          <ul className="flex justify-between p-5">
            <li>
              <Link
                href="/services"
                className="btn btn-ghost text-xs md:text-sm xl:text-base"
              >
                Повернутися
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/decor"
                className="btn btn-ghost text-xs md:text-sm xl:text-base"
              >
                Галерея робіт
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
