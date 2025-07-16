"use client"
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({isDarkMode, setIsDarkMode}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(-16rem)";
        }
    }
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
        }
    }

    useEffect(()=>{
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      })
    })


  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%] dark:hidden">
        <Image
          className="w-full"
          src={assets.header_bg_color}
          alt="header bg"
        />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 duration-500 ${isScrolled ? "bg-white/50 backdrop-blur-lg shadow-sm duration-500 dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image
            className="w-48 mr-14 cursor-pointer"
            src={isDarkMode? assets.logo_dark: assets.logo}
            alt="Logo"
          />
        </a>
        <ul className={`font-Ovo hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScrolled ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={() => setIsDarkMode(prev => !prev)}>
            <Image className="w-6" src={isDarkMode? assets.sun_icon: assets.moon_icon} alt="moon icon" />
          </div>
          <a
            className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full border border-gray-500 ml-4 dark:border-white/50"
            href="#contact"
          >
            Contact
            <Image
              className="w-3"
              src={isDarkMode? assets.arrow_icon_dark: assets.arrow_icon}
              alt="Contact arrow"
            />
          </a>
          <div className="cursor-pointer block md:hidden ml-3" onClick={openMenu}>
            <Image className="w-6" src={isDarkMode?assets.menu_white: assets.menu_black} alt="mneu icon" />
          </div>
        </div>
        {/* Mobile menu */}
        <ul ref={sideMenuRef} className="font-Ovo flex flex-col md:hidden gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              className="w-5 cursor-pointer"
              src={isDarkMode?assets.close_white:assets.close_black}
              alt="close icon"
            />
          </div>
          <li className="hover:border-b-1 hover:transition hover:duration-300">
            <a href="#top" onClick={closeMenu}>Home</a>
          </li>
          <li className="hover:border-b-1 hover:transition hover:duration-300">
            <a href="#about" onClick={closeMenu}>About me</a>
          </li>
          <li className="hover:border-b-1 hover:transition hover:duration-300">
            <a href="#Services" onClick={closeMenu}>Services</a>
          </li>
          <li className="hover:border-b-1 hover:transition hover:duration-300">
            <a href="#work" onClick={closeMenu}>My work</a>
          </li>
          <li className="hover:border-b-1 hover:transition hover:duration-300">
            <a href="#contact" onClick={closeMenu}>Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
