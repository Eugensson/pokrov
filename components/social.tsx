import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants";

export const Social = () => {
  return (
    <ul className="flex items-center gap-6 text-slate-50 text-xl">
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <Link
            href={href}
            className="w-[50px] h-[50px] border-2 border-slate-50/20 rounded-full flex justify-center items-center hover:text-muted-foreground transition-colors"
            rel="noreferrer"
            target="_blank"
            aria-label={`Посилання на ${name}`}
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
