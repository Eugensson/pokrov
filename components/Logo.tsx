import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="max-xl:hidden font-bold text-xl uppercase">
      <Image
        src={"/images/logo.svg"}
        alt="Логотип компанії"
        width={100}
        height={80}
        className="object-cover w-[80px] h-auto"
      />
    </Link>
  );
};

export default Logo;
