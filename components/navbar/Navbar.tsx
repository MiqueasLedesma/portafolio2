import * as React from "react";
import { useLayoutContext } from "../layout/Layout";
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

  // const menuHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  // };

  return (
    <nav className="fixed w-full h-20 p-6 top-0 flex bg-opacity-30 items-center justify-between select-none z-20">
      <h2
        className={`text-2xl max-md:text-xl font-normal ${page && selectColorNavbar(page)}`}
      >
        Miqueas Ledesma
      </h2>
      <ul
        className={`flex flex-row justify-center gap-8 ${
          page && selectColorNavbar(page)
        } max-md:text-sm font-normal max-sm:hidden max-md:gap-4`}
      >
        <li
          value="about"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:border-current hover:max-md:text-sm ${
            currentPage == "about" && "border-b-2 text-lg border-current"
          }`}
        >
          Sobre mí
        </li>
        <li
          value="skills"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:border-current hover:max-md:text-sm ${
            currentPage == "skills" && "border-b-2 text-lg border-current"
          }`}
        >
          Habilidades
        </li>
        <li
          value="proyects"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:border-current hover:max-md:text-sm ${
            currentPage == "proyects" && "border-b-2 text-lg border-current"
          }`}
        >
          Proyectos
        </li>
        <li
          value="contact"
          onClick={handleClick}
          className={`hover:cursor-pointer hover:font-sans transition-all duration-150 hover:text-lg hover:border-b-2 hover:border-current hover:max-md:text-sm ${
            currentPage == "contact" && "border-b-2 text-lg border-current"
          }`}
        >
          Contacto
        </li>
      </ul>
    </nav>
  );
}
