"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useCartService from "@/lib/hooks/useCartStore";

export default function CartDetails() {
  const router = useRouter();

  const { items, itemsPrice, decrease, increase } = useCartService();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <section className="px-1 md:py-2 xl:py-5 text-xs md:text-sm xl:text-base">
      <h1 className="py-4 text-lg">Кошик замовлення</h1>

      {items.length === 0 ? (
        <p className="my-6">
          Кошик порожній. Повернутися до{" "}
          <Link href="/search" className="font-semibold hover:text-primary">
            Каталогу
          </Link>
        </p>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Найменування</th>
                  <th>Кількість</th>
                  <th>Ціна</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => decrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.qty}</span>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => increase(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>&#8372; {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card bg-base-300">
            <div className="card-body">
              <ul>
                <li>
                  <div className="pb-3 text-xl">
                    Підсумок ({items.reduce((a, c) => a + c.qty, 0)}) : &#8372;{" "}
                    {itemsPrice}
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/shipping")}
                    className="btn btn-primary w-full"
                  >
                    Оформити
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
