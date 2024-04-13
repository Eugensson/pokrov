import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import Menu from "@/components/header/Menu";
import NavBar from "@/components/header/NavBar";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div className="flex items-center">
            <label
              htmlFor="my-drawer"
              className="btn btn-square btn-ghost xl:hidden"
            >
              <GiHamburgerMenu className="w-6 h-6" />
            </label>
            <Link
              href="/"
              className="max-md:hidden font-bold text-3xl uppercase"
            >
              Покров
            </Link>
          </div>
          <NavBar />
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
