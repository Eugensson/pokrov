"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

import { mainLinks } from "@/constants";
import useLayoutService from "@/lib/hooks/useLayout";
import Social from "./Social";

const Sidebar = () => {
  const pathname = usePathname();
  const { toggleDrawer } = useLayoutService();

  return (
    <ul className="p-5 w-80 min-h-full bg-base-200 z-[2] flex flex-col justify-between gap-5">
      <li>
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <IoCloseOutline className="w-10 h-10" />
        </label>
      </li>
      <li>
        <ul className="flex flex-col gap-3">
          {mainLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li key={link.label} onClick={toggleDrawer}>
                <Link
                  className={`py-2 font-bold text-lg md:text-xl ${
                    isActive
                      ? "hover:text-primary text-primary"
                      : "hover:text-primary"
                  }`}
                  href={link.route}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <Social />
      </li>
    </ul>
  );
};

export default Sidebar;
