import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <h1 className="hidden">Послуги</h1>
      <div
        className="w-full h-[80px] md:h-[180px] xl:h-[250px] bg-cover rounded-md"
        style={{
          backgroundImage: "url('/images/banner_5.jpg')",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-5">
        <div className="bg-base-300 rounded-lg shadow-xl p-2 md:p-4 xl:p-10">
          <h2 className="font-bold md:text-xl xl:text-2xl mb-2 md:mb-5">
            Хто ми?
          </h2>
          <ul className="flex flex-col gap-2 xl:gap-4 text-xs md:text-base xl:text-lg">
            <li>
              <p>
                TOB &quot;HBФ &quot;Покров&quot; спеціалізується на напиленні
                нітрид-титану на листову нержавіючу сталь та декоративні
                елементи (рушникосушки, поручні для басейнів, змішувачі тощо).
              </p>
            </li>
            <li>
              <p>
                Наші послуги допоможуть зберегти метал в найкращому вигляді,
                забезпечуючи стійкість до корозії та зносу, а також створюючи
                естетичний вигляд для вашого обладнання. Звертайтеся до нас і
                отримуйте найкращі рішення для вашого бізнесу!
              </p>
            </li>
            <li>
              <p>
                Ми прагнемо до постійного розвитку, закупівлі інноваційного
                обладнання та вдосконалення робочих місць. Це є необхідним для
                забезпечення високої якості виготовленої продукції та покращення
                обслуговування клієнтів.
              </p>
            </li>
            <li>
              <p>
                Ми хочемо, щоб ви були задовленні вибором саме нашої компанії,
                та мали бажання розповісти про це всім.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-4 bg-base-300 rounded-lg shadow-xl p-2 md:p-4 xl:p-10">
          <h2 className="font-bold md:text-xl xl:text-2xl mb-0 md:mb-5 xl:mb-10">
            Чим ми займаємось?
          </h2>
          <ul className="flex flex-col gap-2 md:gap-5 xl:gap-10 text-xs md:text-base xl:text-lg">
            <li>
              <Link href="/services/domes" className="hover:text-primary">
                Проектування та виготовлення куполів
              </Link>
            </li>
            <li>
              <Link href="/services/cross" className="hover:text-primary">
                Проектування та виготовлення накупольних хрестів
              </Link>
            </li>
            <li>
              <Link href="/services/sheets" className="hover:text-primary">
                Реалізація аркушів із нержавіючої сталі
              </Link>
            </li>
            <li>
              <Link href="/services/decor" className="hover:text-primary">
                Декоративні елементи з нержавіючої сталі
              </Link>
            </li>
          </ul>
          <Link
            href="/contacts"
            className="hover:text-primary text-xs md:text-base xl:text-lg"
          >
            Контакти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
