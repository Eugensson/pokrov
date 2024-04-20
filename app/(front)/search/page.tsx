import Link from "next/link";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

import { Rating } from "@/components/products/Rating";
import ProductItem from "@/components/products/ProductItem";
import productServices from "@/lib/services/productService";

const sortOrders = ["newest", "lowest", "highest", "rating"];

const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];

const ratings = [5, 4, 3, 2, 1];

export async function generateMetadata({
  searchParams: { q = "all", category = "all", price = "all", rating = "all" },
}: {
  searchParams: {
    q: string;
    category: string;
    price: string;
    rating: string;
    sort: string;
    page: string;
  };
}) {
  if (
    (q !== "all" && q !== "") ||
    category !== "all" ||
    rating !== "all" ||
    price !== "all"
  ) {
    return {
      title: `Search ${q !== "all" ? q : ""}
          ${category !== "all" ? ` : Category ${category}` : ""}
          ${price !== "all" ? ` : Price ${price}` : ""}
          ${rating !== "all" ? ` : Rating ${rating}` : ""}`,
    };
  } else {
    return {
      title: "Search Products",
    };
  }
}

export default async function ProductsPage({
  searchParams: {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
  },
}: {
  searchParams: {
    q: string;
    category: string;
    price: string;
    rating: string;
    sort: string;
    page: string;
  };
}) {
  const getFilterUrl = ({
    c,
    s,
    p,
    r,
    pg,
  }: {
    c?: string;
    s?: string;
    p?: string;
    r?: string;
    pg?: string;
  }) => {
    const params = { q, category, price, rating, sort, page };
    if (c) params.category = c;
    if (p) params.price = p;
    if (r) params.rating = r;
    if (pg) params.page = pg;
    if (s) params.sort = s;
    return `/search?${new URLSearchParams(params).toString()}`;
  };

  const categories = await productServices.getCategories();

  const { countProducts, products, pages } = await productServices.getByQuery({
    category,
    q,
    price,
    rating,
    page,
    sort,
  });

  return (
    <div className="grid md:grid-cols-5 md:gap-5 p-1">
      <div className="p-2 text-sm xl:text-base">
        <div className="divider">Категорія</div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className={`link link-hover ${
                "all" === category && "link-primary"
              }`}
              href={getFilterUrl({ c: "all" })}
            >
              Усі категорії
            </Link>
          </li>
          {categories.map((c: string) => (
            <li key={c}>
              <Link
                className={`link link-hover ${
                  c === category && "link-primary"
                }`}
                href={getFilterUrl({ c })}
              >
                {c === "Cross" && "Хрести"}
                {c === "Domes" && "Куполи"}
                {c === "Decor" && "Декор"}
                {c === "Sheets" && "Аркуші"}
              </Link>
            </li>
          ))}
        </ul>
        <div className="divider">Ціна</div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className={`link link-hover ${"all" === price && "link-primary"}`}
              href={getFilterUrl({ p: "all" })}
            >
              Будь-яка
            </Link>
          </li>
          {prices.map((p) => (
            <li key={p.value}>
              <Link
                href={getFilterUrl({ p: p.value })}
                className={`link link-hover ${
                  p.value === price && "link-primary"
                }`}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="divider">Відгуки клієнтів</div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href={getFilterUrl({ r: "all" })}
              className={`link link-hover ${
                "all" === rating && "link-primary"
              }`}
            >
              Будь-які
            </Link>
          </li>
          {ratings.map((r) => (
            <li key={r}>
              <Link
                href={getFilterUrl({ r: `${r}` })}
                className={`link link-hover ${
                  `${r}` === rating && "link-primary"
                }`}
              >
                <Rating caption={""} value={r}></Rating>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-4 p-4">
        <div className="flex flex-col xl:flex-row xl:justify-between gap-1 p-4">
          <div className="flex flex-col md:flex-row md:items-center text-sm xl:text-base">
            <p>
              Результат:
              <span className="ml-2">
                {products.length === 0 ? "0" : countProducts}
              </span>
            </p>
            {q !== "all" && q !== "" && " : " + q}
            {category !== "all" && " : " + category}
            {price !== "all" && " : Price " + price}
            {rating !== "all" && " : Rating " + rating + ""}
            &nbsp;
            {(q !== "all" && q !== "") ||
            category !== "all" ||
            rating !== "all" ||
            price !== "all" ? (
              <Link
                className="btn btn-sm btn-ghost text-sm xl:text-base"
                href="/search"
              >
                Очистити
              </Link>
            ) : null}
          </div>
          <div className="flex flex-col md:flex-row text-sm xl:text-base">
            Сортувати за:{" "}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`mx-2 link link-hover ${
                  sort == s ? "link-primary" : ""
                } `}
                href={getFilterUrl({ s })}
              >
                {s === "newest" && <span>новинками</span>}
                {s === "lowest" && (
                  <span className="flex items-center gap-1">
                    <BsArrowUp />
                    ціни
                  </span>
                )}
                {s === "highest" && (
                  <span className="flex items-center gap-1">
                    <BsArrowDown />
                    ціни
                  </span>
                )}
                {s === "rating" && <span>рейтингом</span>}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="grid gap-2 xl:gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
          <div className="flex gap-2 w-[10%] mx-auto py-4">
            {products.length > 0 &&
              Array.from(Array(pages).keys()).map((p) => (
                <Link
                  key={p}
                  className={`join-item btn ${
                    Number(page) === p + 1 ? "btn-active" : ""
                  } `}
                  href={getFilterUrl({ pg: `${p + 1}` })}
                >
                  {p + 1}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
