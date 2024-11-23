"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "@/constants";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className="py-2 hidden md:block">
      <ul className="w-full flex justify-between gap-6 text-slate-50">
        {NAV_LINKS.map(({ label, src }, index) => (
          <li key={index}>
            <Link
              href={src}
              className={cn(
                "uppercase font-bold tracking-widest hover:text-muted-foreground transition-colors",
                pathname === src && "text-muted-foreground",
                className
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
