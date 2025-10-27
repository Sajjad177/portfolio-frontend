"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 z-10">
        <Image
          src={assets.header_bg_color}
          alt="header-bg"
          className="w-full"
        />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* ---------- Desktop Menu ---------- */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm">
          {["Home", "About Me", "Services", "My Work", "Contact Me"].map(
            (item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="fontOvo hover:text-purple-700 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* ---------- Right side buttons ---------- */}
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="moon_icon"
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 fontOvo"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu_icon" className="w-6" />
          </button>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0 bottom-0 w-64 z-50 bg-rose-50 shadow-lg transition-transform duration-500 transform translate-x-full"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close_icon"
              className="cursor-pointer w-6"
            />
          </div>

          {["Home", "About Me", "Services", "My Work", "Contact Me"].map(
            (item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="fontOvo"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
