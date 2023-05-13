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
    <section className="h-screen w-screen flex flex-row relative overflow-hidden">
      <motion.div
        initial={""}
        whileInView={"visible"}
        viewport={{ once: true }}
        className="h-screen w-1/2 py-20 px-16 items-center gap-4 flex flex-col max-md:w-screen"
      >
        <h2 className="text-blue-600 text-5xl select-none mt-4 font-bold">
          Desarrollador
        </h2>
        <h2 className="text-blue-600 text-5xl select-none">
          <TypeAnimation
            sequence={["Front-end", 2000, "Back-end", 1500, "Full-stack", 2000]}
            speed={10}
            style={{ fontSize: "1em", fontWeight: "bold" }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex flex-col gap-8">
          <h4 className="text-blue-600 text-2xl max-md:text-2xl select-none font-semibold">
            Bienvenido a mi portafolio.
          </h4>
          <h4 className="text-slate-600 font-semibold text-lg max-md:text-xl select-none">
            Me encuentro actualmente desarrollando ideas y soluciones digitales.
          </h4>
          <p className="text-slate-600 font-semibold text-sm select-none">
            Mi objetivo es proporcionar un servicio excepcional que sea
            confiable, rápido y eficiente. Me enfoco en entender las necesidades
            de mis clientes y trabajo duro para asegurarme de que los resultados
            entregados sean precisos y satisfactorios.
          </p>
        </div>

        <div className="flex flex-row gap-8 my-auto">
          <button
            value={"contact"}
            onClick={handleClick}
            className="text-white font-bold py-2 px-4  rounded-md shadow-sm shadow-black bg-blue-500 hover:bg-blue-800 transition-all duration-500"
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
      </motion.div>
      <div className="w-1/2 h-screen bg-about bg-cover max-md:hidden"></div>
    </section>
  );
}
