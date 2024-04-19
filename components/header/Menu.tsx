"use client";

import Link from "next/link";
import { RxEnter } from "react-icons/rx";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdSunny, MdNightlight } from "react-icons/md";
import { signIn, signOut, useSession } from "next-auth/react";

import useLayoutService from "@/lib/hooks/useLayout";
import useCartService from "@/lib/hooks/useCartStore";
import { SearchBox } from "@/components/header/SearchBox";

const Menu = () => {
  const { items, init } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const signoutHandler = () => {
    signOut({ callbackUrl: "/signin" });
    init();
  };

  const { data: session } = useSession();

  const { theme, toggleTheme } = useLayoutService();

  const handleClick = () => {
    (document.activeElement as HTMLElement).blur();
  };

  return (
    <>
      <ul className="flex items-center">
        <li>
          {mounted && (
            <label className="swap btn btn-square btn-ghost">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
              />

              {theme === "light" ? (
                <MdNightlight className="w-5 h-5" />
              ) : (
                <MdSunny className="w-5 h-5" />
              )}
            </label>
          )}
        </li>
        <li>
          <Link className="btn btn-ghost rounded-btn" href="/cart">
            <FaCartShopping className="w-5 h-5" />
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}{" "}
              </div>
            )}
          </Link>
        </li>
        {session && session.user ? (
          <>
            <li>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  {session.user.name}
                  <IoIosArrowDown className="w-5 h-5" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[999] p-2 shadow bg-base-300 rounded-box w-52 "
                >
                  {session.user.isAdmin && (
                    <li onClick={handleClick}>
                      <Link href="/admin/dashboard">Панель адміна</Link>
                    </li>
                  )}
                  <li onClick={handleClick}>
                    <Link href="/order-history">Історія замовлень</Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link href="/profile">Профіль</Link>
                  </li>
                  <li onClick={handleClick}>
                    <button type="button" onClick={signoutHandler}>
                      Вийти
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </>
        ) : (
          <li>
            <button
              className="btn btn-ghost rounded-btn"
              type="button"
              onClick={() => signIn()}
            >
              <RxEnter className="w-5 h-5" />
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Menu;
