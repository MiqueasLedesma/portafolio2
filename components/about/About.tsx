import * as React from "react";
import { TypeAnimation } from "react-type-animation";
import { useLayoutContext } from "../layout/Layout";
import { motion } from "framer-motion";

interface props {}

export default function About({}: props) {
  const { setCurrentPage } = useLayoutContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
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

  const handleCV = (e: React.MouseEvent<HTMLButtonElement>): void => {
    window.open("/pdf/Miqueas-Ledesma.pdf", "_blank");
  };

  return (
    <section className="h-screen w-screen flex flex-row relative overflow-hidden md:bg-about md:bg-cover md:bg-center">
      <div className="h-screen w-1/2 py-20 px-16 items-center gap-4 xs:gap-4 flex justify-center flex-col md:w-screen md:gap-12 md:py-4 xs:py-0 md:items-center  xs:items-center md:bg-gray-500 md:bg-opacity-40">
        <div className="flex flex-col items-start justify-start w-full md:items-center md:justify-center">
          {" "}
          <h2 className="text-blue-600 md:text-gray-900 text-5xl select-none mt-4 xs:mt-0 font-bold xs:text-3xl">
            Desarrollador
          </h2>
          <h2 className="text-blue-600 md:text-gray-900 text-5xl select-none xs:text-3xl">
            <TypeAnimation
              sequence={[
                "Front-end",
                2000,
                "Back-end",
                1500,
                "Full-stack",
                2000,
              ]}
              speed={10}
              style={{ fontSize: "1em", fontWeight: "bold" }}
              repeat={Infinity}
            />
          </h2>
        </div>

        <div className="flex flex-col gap-8 xs:gap-4 md:h-1/2 md:justify-around md:pt-8">
          <h4 className="text-blue-600 md:text-gray-900 text-2xl md:text-2xl md:text-center select-none font-semibold xs:text-2xl">
            Bienvenido a mi portafolio.
          </h4>
          <h4 className="text-slate-600 md:text-slate-900 font-semibold text-lg md:text-xl md:text-center select-none xs:text-base">
            Me encuentro actualmente desarrollando ideas y soluciones digitales.
          </h4>
          <p className="text-slate-600 md:text-slate-900 font-semibold text-sm select-none md:text-justify xs:text-xs">
            Mi objetivo es proporcionar un servicio excepcional que sea
            confiable, rápido y eficiente. Me enfoco en entender las necesidades
            de mis clientes y trabajo duro para asegurarme de que los resultados
            entregados sean precisos y satisfactorios.
          </p>
        </div>

        <div className="flex flex-row gap-8 xs:my-0">
          <button
            value={"contact"}
            onClick={handleClick}
            className="text-white font-bold py-2 px-4 rounded-md shadow-sm shadow-black bg-blue-500 hover:bg-blue-800 transition-all duration-500"
          >
            Contactarme
          </button>
          <button
            onClick={handleCV}
            className="text-white font-bold py-2 px-4 rounded-md shadow-sm shadow-black bg-blue-500 hover:bg-blue-800 transition-all duration-500"
          >
            CV
          </button>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-about bg-cover md:hidden"></div>
    </section>
  );
}
