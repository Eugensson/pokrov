import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <Image
        src="/images/logo.svg"
        alt="Логотип компанії"
        width={96}
        height={96}
        className={cn("aspect-square", className)}
      />
    </Link>
  );
};
