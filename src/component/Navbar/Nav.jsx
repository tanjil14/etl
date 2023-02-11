import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../img/logo/etl-sticky-logo.png";
import logoWhite from "../../img/logo/etl_logo_white.png";
import NavM from "./NavM";
import NavMenu from "./NavMenu";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [changeNav, setChangeNav] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };
  window.addEventListener("scroll", changeNavBg);
  return (
    <nav
      className={`z-50 fixed shadow w-full top-0 left-0 ${
        changeNav ? "bg-white" : "bg-black"
      } ${!changeNav && "bg-opacity-80 md:bg-opacity-30 py-1"} ${
        changeNav && "hidden"
      } md:block`}
    >
      <div
        className={`relative md:flex items-center justify-between
         py-1 md:px-12 px-7 transition-all duration-400 ease-in container mx-auto font-medium`}
      >
        <div className="text-2xl cursor-pointer flex items-center">
          <a href="/" className="logo w-[140px]">
            <img src={changeNav ? logo : logoWhite} alt="" />
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-xl absolute right-8 top-4 cursor-pointer md:hidden bg-black p-3 bg-opacity-60"
        >
          <FaBars color="white" />
        </div>
        {open ? <NavMenu /> : <NavM scroll={changeNav}/>}
      </div>
      
    </nav>
  );
};

export default Nav;
