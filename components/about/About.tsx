import * as React from "react";
import { TypeAnimation } from "react-type-animation";

interface props {}

export default function About({}: props) {
  return (
    <section className="h-screen w-screen bg-backgroundAbout bg-cover flex flex-row">
      <div className="w-1/2 h-screen bg-slate-900 bg-opacity-40 p-14 max-md:w-2/3 items-center justify-center max-sm:w-screen gap-8 flex flex-col">
        <h2 className="text-blue-400 text-4xl mt-10 font-bold select-none">
          <TypeAnimation
            sequence={[
              "Soy un desarrollador Front-end",
              2000,
              "Soy un desarrollador Back-end",
              1500,
              "Soy un desarrollador Full-stack",
              2000,
            ]}
            speed={10}
            style={{ fontSize: "1em" }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-xl max-md:text-2xl select-none">
            Bienvenido a mi portafolio.
          </h4>
        </div>
        <button className="text-white font-bold p-2 rounded-md bg-violet-600 hover:bg-violet-300 hover:text-black transition-all duration-500">
          Concatctarme
        </button>
        <button className="md:hidden text-white p-2 rounded-md font-normal bg-blue-700 hover:bg-blue-300 hover:text-black transition-all duration 500">
          Ver CV
        </button>
      </div>

      <div className="w-1/2 bg-slate-100 bg-opacity-10 h-screen flex justify-center items-center max-md:hidden">
        <button className="p-2 font-bold text-white bg-violet-600 hover:bg-violet-300 hover:text-black duration-500 rounded-md w-fit h-fit">
          Ver CV
        </button>
      </div>
    </section>
  );
}
