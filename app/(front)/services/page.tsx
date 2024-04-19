import Link from "next/link";

const page = () => {
  return (
    <section className="px-1 md:py-2 xl:py-5 text-xs md:text-sm xl:text-base">
      <h1 className="divider divider-accent font-bold uppercase">Послуги</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-10">
        <div
          className="w-full h-[100px] md:h-[250px] xl:h-[550px] bg-cover rounded-md"
          style={{
            backgroundImage: "url('/services.jpg')",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="flex flex-col gap-1 md:gap-3 xl:gap-5">
          <h2 className="divider divider-accent font-semibold">Хто ми?</h2>
          <ul className="flex flex-col gap-1 md:gap-2">
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
          <h2 className="divider divider-accent font-semibold">
            Чим ми займаємось?
          </h2>
          <ul className="flex flex-col gap-1 md:gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default page;
