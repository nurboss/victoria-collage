import logo from "../../../public/images/logo.svg";

import { Menu } from "lucide-react";
const Header = () => {
  return (
    <header className="my-container flex justify-between items-center  mt-5 sm:mt-6 lg:mt-10">
      <img
        className="w-[80px] md:w-[100px] 2xl:w-[150px]"
        src={logo}
        alt="logo"
      />
      <Menu />
    </header>
  );
};

export default Header;
