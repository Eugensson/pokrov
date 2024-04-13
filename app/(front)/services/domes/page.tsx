import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="w-full h-[80px] md:h-[180px] xl:h-[250px] bg-cover rounded-md"
        style={{
          backgroundImage: "url('/images/servicesDomes.jpg')",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="flex flex-col gap-1 md:gap-2 bg-base-300 rounded-lg shadow-xl p-2 md:p-5">
        <h1 className="font-bold text-xs md:text-xl xl:text-2xl text-center uppercase">
          Проектування та виготовлення куполів
        </h1>
        <p className="text-xs md:text-base xl:text-xl">
          У нашому проектному відділі працюють висококваліфіковані фахівці, які
          проходять спеціальну підготовку та атестацію. Ми застосовуємо сучасний
          підхід до проектування, використовуючи ліцензійну програму для
          створення точної 3D-моделі куполу. Наші інженери уважно вивчають всі
          деталі, що включають характер та кількість необхідних матеріалів,
          технології виробництва та взаємодію фахівців на різних етапах
          проектування.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Ми звертаємо увагу на кліматичні особливості регіону, сумісність з
          закладними деталями, особливості транспортування та можливі способи
          монтажу. Комплексний підхід та висока професійність кожного
          співробітника дозволяє нам створювати максимально точну проектну
          документацію для високотехнологічних виробів. Ми дотримуємось
          поставлених строків та враховуємо всі побажання наших клієнтів.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Після розробки проекту майстри беруться за виготовлення куполу. Вони
          виконують всі необхідні роботи, такі як виготовлення каркасу, обшивку
          конструкції деревом та покриття листом нержавіючої сталі з нанесенням
          нітриду титану. Ми дотримуємось всіх норм безпеки та чітко
          дотримуємось проектної документації, щоб забезпечити безпечну та
          якісну роботу. Роботи виконуються строго відповідно до строку,
          оговореного із замовником.
        </p>
        <ul className="flex justify-around text-xs md:text-base xl:text-xl font-semibold my-2 md:my-5 xl:my-10">
          <li className="hover:text-primary">
            <Link href="/services">Послуги</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/portfolio/domes">Галерея робіт</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
