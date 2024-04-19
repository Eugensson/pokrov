import Logo from "@/components/Logo";
import Menu from "@/components/header/Menu";
import NavBar from "@/components/header/NavBar";
import MobileMenuButton from "@/components/MobileMenuButton";

const Header = () => {
  return (
    <header className="navbar justify-between bg-neutral/70 text-neutral-content">
      <MobileMenuButton />
      <Logo />
      <NavBar />
      <Menu />
    </header>
  );
};

export default Header;
