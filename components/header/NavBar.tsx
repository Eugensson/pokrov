"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainLinks } from "@/constants";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-5 max-xl:hidden">
        {mainLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li key={link.label}>
              <Link
                className={`py-4 font-bold xl:text-lg ${
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
    </nav>
  );
};

export default NavBar;
