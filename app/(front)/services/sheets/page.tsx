import Link from "next/link";

const page = () => {
  return (
    <section className="px-1 md:py-2 xl:py-5 text-xs md:text-sm xl:text-base">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-10">
        <div
          className="w-full h-[100px] md:h-[250px] xl:h-[550px] bg-cover rounded-md"
          style={{
            backgroundImage: "url('/sheets.jpg')",
            backgroundPosition: "25% 15%",
          }}
        ></div>
        <div>
          <h2 className="divider divider-accent font-semibold">
            Реалізація аркушів з нержавіючої сталі
          </h2>
          <ul className="flex flex-col gap-3 md:gap-5">
            <li>
              <p>
                TOB &quot;HBФ &quot;Покров&quot; пропонує високоякісні аркуші з
                нержавіючої сталі для покриття будівель та церковних куполів.
                Наша продукція доступна в широкому асортименті спектра кольорів,
                включаючи золотий, мідний, зелений та небесно-синій.
              </p>
            </li>
            <li>
              <p>
                Ми досягаємо такого різноманіття кольорів завдяки використанню
                не тільки нітрид-титанових напилень, але й інших сплавів з
                титану. Це дозволяє дизайнерам та архітекторам мати безліч
                можливостей для реалізації своїх нестандартних ідей.
              </p>
            </li>
            <li>
              <p>
                Наші аркуші виготовлені з високоякісної технічної магнітної
                сталі, відповідно до американського стандарту AISI 430 (розмір
                1000*2000*0.4мм). За потреби ми можемо також виготовити аркуші з
                харчової, немагнітної сталі AISI304, вкритої сполуками титану.
              </p>
            </li>
            <li>
              <p>
                Ми гарантуємо якість нашої продукції, яка підтверджена
                сертифікатами та спеціальними аналізами, проведеними на базі
                лабораторії TOB &quot;НВФ &quot;Покров&quot;.
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
                href="/portfolio/sheets"
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
