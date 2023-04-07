import * as React from "react";
import { useLayoutContext } from "../layout/Layout";
import menuLogo from "../../public/icons/menu-icon.svg";
import Image from "next/image";
import selectColorNavbar from "@/utils/selectColorNavbar";

interface props {}

export default function Navbar({}: props) {
  const page = useLayoutContext();
  const { currentPage, setCurrentPage } = page;

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.getAttribute("value");
    if (value != null) {
      setCurrentPage(value);
      const element = document.getElementById(value);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <nav className="fixed w-full h-20 p-6 top-0 flex bg-opacity-30 items-center justify-between">
      <h2 className={`text-2xl max-md:text-xl text-white`}>
        Hola 👋, soy Miqueas Ledesma
      </h2>
      <button onClick={menuHandle} className="sm:hidden">
        <Image src={menuLogo} width={26} height={26} alt="menulogo.svg" />
      </button>
      <ul
        className={`flex flex-row justify-center gap-8 ${
          page && selectColorNavbar(page)
        } max-md:text-sm font-normal max-sm:hidden max-md:gap-4`}
      >
        <li
          value="about"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:max-md:text-sm ${
            currentPage == "about" && "border-b-2 text-lg"
          }`}
        >
          Sobre mí
        </li>
        <li
          value="proyects"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:max-md:text-sm ${
            currentPage == "proyects" && "border-b-2 text-lg"
          }`}
        >
          Proyectos
        </li>
        <li
          value="skills"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:max-md:text-sm ${
            currentPage == "skills" && "border-b-2 text-lg"
          }`}
        >
          Habilidades
        </li>
        <li
          value="contact"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:max-md:text-sm ${
            currentPage == "contact" && "border-b-2 text-lg"
          }`}
        >
          Contacto
        </li>
      </ul>
    </nav>
  );
}
