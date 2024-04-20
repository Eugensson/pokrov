import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <section className="px-1 md:py-2 xl:py-5 text-xs md:text-sm xl:text-base">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-10">
        <div
          className="w-full h-[100px] md:h-[250px] xl:h-[650px] bg-cover rounded-md"
          style={{
            backgroundImage: "url('/images/services/cross.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 10%",
          }}
        ></div>
        <div>
          <h2 className="divider divider-accent font-semibold">
            Проектування та виготовлення хрестів
          </h2>
          <ul className="flex flex-col gap-3 md:gap-5">
            <li>
              <p>
                TOB &quot;НВФ &quot;Покров&quot; спеціалізується на проектуванні
                та виготовленні накупольних хрестів різної складності,
                конфігурацій та габаритів. Ми використовуємо унікальну
                інноваційну технологію вакуумно-плазмового напилення, що
                дозволяє нам створювати навіть найбільш нестандартні проекти на
                основі високоякісної нержавіючої сталі, покритої захисним шаром
                нітрид титану.
              </p>
            </li>
            <li>
              <p>
                Наша компанія пропонує виготовлення накупольних хрестів у трьох
                основних категоріях:
              </p>
            </li>
            <li>
              <p>
                1. Вироби, що повністю, включаючи основну частину та всі
                декоративні елементи, складаються зі сталі. Це найбільш
                розповсюджений вид хрестів, який виготовляється за давньою
                методикою, що вже багато років використовується світовими
                майстрами.
              </p>
            </li>
            <li>
              <p>
                2. Накупольні хрести з елементами вітражу. Декоративні акценти з
                фацетованого скла надають виробам неповторного вигляду: хрест
                грає різними кольорами в сонячних променях.
              </p>
            </li>
            <li>
              <p>
                3. Хрести з електричним підсвічуванням елементів. B нічний час
                вони створюють унікальний ефект сяяння куполу.
              </p>
            </li>
            <li>
              <p>
                Дві останні категорії виробів - особиста розробка наших
                спеціалістів. Ми готові реалізувати їх під ваше замовлення. Для
                вас доступні як вже готові проекти, так i можливість роботи за
                наданим вами ескізом. Обирайте накупольні хрести від
                &quot;Покрову&quot; та зробіть свою церкву неповторною.
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
                href="/portfolio/cross"
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
