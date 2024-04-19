import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <section className="flex flex-col mx-auto">
      <div className="divider divider-accent py-10 text-2xl font-bold uppercase">
        Послуги
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-6">
        <li>
          <article className="card bg-base-200 hover:shadow-2xl">
            <figure>
              <Image
                src={"/images/domes.jpg"}
                alt="Церковний купол"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
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
          <article className="card bg-base-200 hover:shadow-2xl">
            <figure>
              <Image
                src={"/images/cross.jpg"}
                alt="Освяченя церкви"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Проектування та виготовлення накупольних хрестів
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
          <article className="card bg-base-200 hover:shadow-2xl">
            <figure>
              <Image
                src={"/images/sheets.jpg"}
                alt="Аркуші вкриті нітридом тітану"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
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
          <article className="card bg-base-200 hover:shadow-2xl">
            <figure>
              <Image
                src={"/images/decor.jpg"}
                alt="Декоративні елементи вкриті нітридом тітану"
                width={275}
                height={275}
                className="object-cover w-full h-60"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
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
