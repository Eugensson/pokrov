import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="w-full h-[80px] md:h-[180px] xl:h-[250px] bg-cover rounded-md"
        style={{
          backgroundImage: "url('/images/servicesCross.jpg')",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="flex flex-col gap-1 md:gap-2 bg-base-300 rounded-lg shadow-xl p-2 md:p-5">
        <h1 className="font-bold text-xs md:text-xl xl:text-2xl text-center uppercase">
          Проектування та виготовлення накупольних хрестів
        </h1>
        <p className="text-xs md:text-base xl:text-xl">
          TOB &quot;НВФ &quot;Покров&quot; спеціалізується на проектуванні та
          виготовленні накупольних хрестів різної складності, конфігурацій та
          габаритів. Ми використовуємо унікальну інноваційну технологію
          вакуумно-плазмового напилення, що дозволяє нам створювати навіть
          найбільш нестандартні проекти на основі високоякісної нержавіючої
          сталі, покритої захисним шаром нітрид титану.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Наша компанія пропонує виготовлення накупольних хрестів у трьох
          основних категоріях:
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          1. Вироби, що повністю, включаючи основну частину та всі декоративні
          елементи, складаються зі сталі. Це найбільш розповсюджений вид
          хрестів, який виготовляється за давньою методикою, що вже багато років
          використовується світовими майстрами.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          2. Накупольні хрести з елементами вітражу. Декоративні акценти з
          фацетованого скла надають виробам неповторного вигляду: хрест грає
          різними кольорами в сонячних променях.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          3. Хрести з електричним підсвічуванням елементів. B нічний час вони
          створюють унікальний ефект сяяння куполу.
        </p>
        <p className="text-xs md:text-base xl:text-xl">
          Дві останні категорії виробів - особиста розробка наших спеціалістів.
          Ми готові реалізувати їх під ваше замовлення. Для вас доступні як вже
          готові проекти, так i можливість роботи за наданим вами ескізом.
          Обирайте накупольні хрести від &quot;Покрову&quot; та зробіть свою
          церкву неповторною.
        </p>
        <ul className="flex justify-around text-xs md:text-base xl:text-xl font-semibold my-2 md:my-5 xl:my-10">
          <li className="hover:text-primary">
            <Link href="/services">Послуги</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/portfolio/cross">Галерея робіт</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
