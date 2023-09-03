import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
          <Image
            src={"/logo.svg"}
            width={100}
            height={80}
            alt="Логотип компанії"
          />
    </Link>
  );
};

export default Logo;