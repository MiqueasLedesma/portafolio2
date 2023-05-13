import * as React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CardProyect } from "../cardProyect/cardProyect";
import { proyectsProps } from "@/constants";

interface props {}

export default function Proyects({}: props) {
  const [hoverLeft, setHoverLeft] = React.useState(false);
  const [hoverRight, setHoverRight] = React.useState(false);

  const [current, setCurrent] = React.useState(1);

  const totalPages = Math.ceil(proyectsProps.length / 3);

  const proyectsToRender = proyectsProps.slice(
    (current - 1) * 3,
    (current - 1) * 3 + 3
  );

  const handleNext = () => {
    if (current >= totalPages) return;
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current == 1) return;
    return setCurrent(current - 1);
  };

  const renderDots = (current: number) => {};

  return (
    <section className="w-screen h-screen bg-white py-24 p-20 overflow-hidden relative">
      {/* Title */}
      <div>
        <h2 className="text-4xl font-semibold text-slate-700">Proyectos</h2>
        <div className="w-[2rem] h-2 rounded-md bg-blue-600 my-2"></div>
      </div>
      {/* Buttons */}
      <div className="w-scren flex flex-row-reverse my-2">
        <div className="flex flex-row gap-4">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
            className="p-2 rounded-full bg-slate-200 hover:bg-slate-100 transition-all"
          >
            <AiOutlineArrowLeft
              size={30}
              color={hoverLeft ? "blue" : "black"}
            />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
            className="p-2 rounded-full bg-slate-300 hover:bg-slate-200 transition-all"
          >
            <AiOutlineArrowRight
              size={30}
              color={hoverRight ? "blue" : "black"}
            />
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-row gap-6">
        {proyectsToRender &&
          proyectsToRender.map((e, index) => (
            <CardProyect key={index} {...e} />
          ))}
      </div>
    </section>
  );
}
