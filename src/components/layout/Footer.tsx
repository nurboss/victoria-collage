import logo from "../../../public/images/logo.svg";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="my-container flex flex-col lg:flex-row gap-5 w-full justify-between my-10 mt-100">
      <div>
        <img
          className="w-[60px] md:w-[100px] 2xl:w-[150px]"
          src={logo}
          alt="logo"
        />
        <p className="text-[8px] md:text-sm mt-2 md:mt-5">
          © 2025 Victoria College of Arts and Design, All rights reserved.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-5 border border-accent-blue px-3 md:px-6 py-3 h-fit">
        <div className="flex gap-5">
          <button className="text-accent-blue text-[12px] md:text-[15px]">
            Policies
          </button>
          <button className="text-accent-blue text-[12px] md:text-[15px]">
            Contact us
          </button>
          <button className="text-accent-blue text-[12px] md:text-[15px]">
            Meet the Team
          </button>
        </div>
        <div className="flex gap-3 text-accent-blue">
          <Facebook className="w-[15px] lg:w-[20px]" />
          <Instagram className="w-[15px] lg:w-[20px]" />
          <Linkedin className="w-[15px] lg:w-[20px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
