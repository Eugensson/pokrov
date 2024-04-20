import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <h1 className="divider divider-accent py-1 md:py-2 xl:py-3 text-xl font-bold uppercase">
        Галерея робіт
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4">
        <li>
          <article className="card bg-base-100 rounded-md shadow-xl">
            <figure>
              <Image
                src="/images/portfolio/domes.jpg"
                alt="Купол церковний"
                width={275}
                height={275}
                className="object-cover w-full h-[275px]"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">Купола церковні</h2>
              <div className="card-actions justify-end">
                <Link href="/portfolio/domes" className="btn btn-ghost">
                  Переглянути
                </Link>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="card bg-base-100 rounded-md shadow-xl">
            <figure>
              <Image
                src="/images/portfolio/cross.jpg"
                alt="Процес освячення церкви"
                width={275}
                height={275}
                className="object-cover w-full h-[275px]"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">Хрести накупольні</h2>
              <div className="card-actions justify-end">
                <Link href="/portfolio/cross" className="btn btn-ghost">
                  Переглянути
                </Link>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="card bg-base-100 rounded-md shadow-xl">
            <figure>
              <Image
                src="/images/portfolio/sheets.jpg"
                alt="Аркуші із нержавіючої сталі"
                width={275}
                height={275}
                className="object-cover w-full h-[275px]"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">
                Аркуші із нержавіючої сталі
              </h2>
              <div className="card-actions justify-end">
                <Link href="/portfolio/sheets" className="btn btn-ghost">
                  Переглянути
                </Link>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="card bg-base-100 rounded-md shadow-xl">
            <figure>
              <Image
                src="/images/portfolio/decor.jpg"
                alt="Декоративні елементи з нанесеним покриттям"
                width={275}
                height={275}
                className="object-cover w-full h-[275px]"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">Декоративні елементи</h2>
              <div className="card-actions justify-end">
                <Link href="/portfolio/decor" className="btn btn-ghost">
                  Переглянути
                </Link>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </>
  );
};

export default page;
