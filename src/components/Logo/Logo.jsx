import Link from "next/link";
import Image from "next/image";

const Logo = ({width, height}) => {
  return (
    <Link href="/">
          <Image
            src={"/logo.svg"}
            width={width}
            height={height}            
            alt="Логотип компанії"
          />
    </Link>
  );
};

export default Logo;