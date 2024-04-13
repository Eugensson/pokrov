import Link from "next/link";

const page = () => {
  return (
    <section className="py-2">
      <div className="flex flex-col gap-2 md:gap-5 xl:gap-10 w-full bg-base-300 rounded-lg shadow-xl p-1 xl:p-20">
        <h1 className="font-bold text-sm md:text-xl xl:text-2xl text-center uppercase">
          Галерея робіт
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:gap-10">
          <li>
            <article className="group relative block h-40 md:h-80">
              <Link
                href="/portfolio/domes"
                style={{
                  backgroundImage: "url('/images/domes.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0% 25%",
                }}
                className="relative flex h-full transform items-end border-2 rounded-lg  border-black/20 bg-transparent transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <h2 className="absolute top-2 right-2 card bg-base-300/80 p-2 rounded-md text-lg md:text-xl xl:text-2xl font-bold">
                  Куполи
                </h2>
              </Link>
            </article>
          </li>
          <li>
            <article className="group relative block h-40 md:h-80">
              <Link
                href="/portfolio/cross"
                style={{
                  backgroundImage: "url('/images/cross.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0% 25%",
                }}
                className="relative flex h-full transform items-end border-2 rounded-lg  border-black/20 bg-transparent transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <h2 className="absolute top-2 right-2 card bg-base-300/80 p-2 rounded-md text-lg md:text-xl xl:text-2xl font-bold">
                  Хрести
                </h2>
              </Link>
            </article>
          </li>
          <li>
            <article className="group relative block h-40 md:h-80">
              <Link
                href="/portfolio/sheets"
                style={{
                  backgroundImage: "url('/images/sheets.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0% 90%",
                }}
                className="relative flex h-full transform items-end border-2 rounded-lg  border-black/20 bg-transparent transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <h2 className="absolute top-2 right-2 card bg-base-300/80 p-2 rounded-md text-lg md:text-xl xl:text-2xl font-bold">
                  Аркуші
                </h2>
              </Link>
            </article>
          </li>
          <li>
            <article className="group relative block h-40 md:h-80">
              <Link
                href="/portfolio/decor"
                style={{
                  backgroundImage: "url('/images/decor.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="relative flex h-full transform items-end border-2 rounded-lg  border-black/20 bg-transparent transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 "
              >
                <h2 className="absolute top-2 right-2 card bg-base-300/80 p-2 rounded-md text-lg md:text-xl xl:text-2xl font-bold">
                  Декор
                </h2>
              </Link>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default page;
