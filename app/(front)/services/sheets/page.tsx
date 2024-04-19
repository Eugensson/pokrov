import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 md:gap-2">
        <div
          className="w-full h-[100px] md:h-[250px] xl:h-auto bg-cover rounded-md"
          style={{
            backgroundImage: "url('/images/servicessheet.jpg')",
            backgroundPosition: "bottom",
          }}
        ></div>
        <div>
          <h1 className="divider divider-accent font-bold xl:text-lg">
            Реалізація аркушів з нержавіючої сталі
          </h1>
          <ul className="flex flex-col gap-1 md:gap-2 text-xs md:text-sm xl:text-base">
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
          <ul className="flex justify-around text-xs md:text-sm xl:text-base p-5">
            <li>
              <Link href="/services" className="btn btn-ghost">
                Повернутися
              </Link>
            </li>
            <li>
              <Link href="/portfolio/sheets" className="btn btn-ghost">
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
