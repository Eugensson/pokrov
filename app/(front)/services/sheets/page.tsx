import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="w-full h-[80px] md:h-[180px] xl:h-[250px] bg-cover rounded-md"
        style={{
          backgroundImage: "url('/images/servicesSheets.jpg')",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col gap-1 md:gap-2 bg-base-300 rounded-lg shadow-xl p-2 md:p-5">
        <h1 className="font-bold text-xs md:text-xl xl:text-2xl text-center uppercase">
          Реалізація аркушів з нержавіючої сталі
        </h1>
        <p className="text-xs md:text-base xl:text-xl">
          TOB &quot;HBФ &quot;Покров&quot; пропонує високоякісні аркуші з
          нержавіючої сталі для покриття будівель та церковних куполів. Наша
          продукція доступна в широкому асортименті кольорів, включаючи золотий,
          мідний, зелений та небесно-синій.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Ми досягаємо такого різноманіття кольорів завдяки використанню не
          тільки нітрид-титанових напилень, але й інших сплавів з титану. Це
          дозволяє дизайнерам та архітекторам мати безліч можливостей для
          реалізації своїх нестандартних ідей.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Наші аркуші виготовлені з високоякісної технічної магнітної сталі,
          відповідно до американського стандарту AISI 430 (розмір
          1000*2000*0.4мм). За потреби ми можемо також виготовити аркуші з
          харчової, немагнітної сталі AISI304, вкритої сполуками титану.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Ми гарантуємо якість нашої продукції, яка підтверджена сертифікатами
          та спеціальними аналізами, проведеними на базі лабораторії TOB
          &quot;НВФ &quot;Покров&quot;.
        </p>
        <ul className="flex justify-around text-xs md:text-base xl:text-xl font-semibold my-2 md:my-5 xl:my-10">
          <li className="hover:text-primary">
            <Link href="/services">Послуги</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/portfolio/sheets">Галерея робіт</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
