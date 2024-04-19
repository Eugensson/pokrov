import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenuButton = () => {
  return (
    <label htmlFor="my-drawer" className="btn btn-square btn-ghost xl:hidden">
      <GiHamburgerMenu className="w-6 h-6" />
    </label>
  );
};

export default MobileMenuButton;
