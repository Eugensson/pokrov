import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <section className="flex flex-col mx-auto">
      <h2 className="divider divider-accent py-1 md:py-2 xl:py-5 text-lg font-semibold uppercase">
        Послуги
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 md:gap-3 xl:gap-5">
        <li>
          <article className="card bg-base-100 hover:shadow-xl">
            <figure>
              <Image
                src={"/images/domes.jpg"}
                alt="Церковний купол"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">
                Проектування та виготовлення куполів
              </h2>
              <div className="card-actions justify-end">
                <Link href="/services/domes" className="btn btn-shost">
                  Докладніше
                </Link>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="card bg-base-100 hover:shadow-xl">
            <figure>
              <Image
                src={"/images/cross.jpg"}
                alt="Освяченя церкви"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">
                Проектування та виготовлення хрестів
              </h2>
              <div className="card-actions justify-end">
                <Link href="/services/cross" className="btn btn-shost">
                  Докладніше
                </Link>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="card bg-base-100 hover:shadow-xl">
            <figure>
              <Image
                src={"/images/sheets.jpg"}
                alt="Аркуші вкриті нітридом тітану"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">
                Реалізація аркушів із нержавіючої сталі
              </h2>
              <div className="card-actions justify-end">
                <Link href="/services/sheets" className="btn btn-shost">
                  Докладніше
                </Link>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="card bg-base-100 hover:shadow-xl">
            <figure>
              <Image
                src={"/images/decor.jpg"}
                alt="Декоративні елементи вкриті нітридом тітану"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">
                Декоративні елементи з нержавіючої сталі
              </h2>
              <div className="card-actions justify-end">
                <Link href="/services/decor" className="btn btn-shost">
                  Докладніше
                </Link>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default OurServices;
