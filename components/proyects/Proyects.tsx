import * as React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CardProyect } from "../cardProyect/cardProyect";
import { proyectsProps } from "@/constants";
import { useWindowSize } from "@/hooks/useWindowSize";
import { deviceType } from "@/utils/deviceType";

interface props {}

export default function Proyects({}: props) {
  const [hoverLeft, setHoverLeft] = React.useState(false);
  const [hoverRight, setHoverRight] = React.useState(false);

  const [current, setCurrent] = React.useState(1);

  const windowSize = useWindowSize();
  const device = deviceType(windowSize?.width);

  React.useEffect(() => {
    console.log(device);
  }, [device]);

  const selectDevice = (device: string | undefined) => {
    if (device === "Desktop") return 3;
    return 1;
  };

  const totalPages = Math.ceil(proyectsProps.length / selectDevice(device));

  const proyectsToRender = proyectsProps.slice(
    (current - 1) * selectDevice(device),
    (current - 1) * selectDevice(device) + selectDevice(device)
  );

  const handleNext = () => {
    if (current >= totalPages) return;
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current == 1) return;
    return setCurrent(current - 1);
  };

  return (
    <section
      style={{ backgroundImage: "url(images/projects.jpg)" }}
      className="w-screen h-screen bg-cover bg-center md:bg-right-bottom"
    >
      <div className="w-full h-full bg-slate-900 bg-opacity-50 py-24 p-20 overflow-hidden relative md:flex md:flex-col md:gap-12 xs:py-4 xs:items-center xs:justify-center">
        {/* Title */}
        <div className="md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-4xl font-semibold text-white/75 md:text-center">
            Proyectos
          </h2>
          <div className="w-[2rem] h-2 rounded-md bg-blue-300 my-2"></div>
        </div>
        {/* Buttons */}
        <div className="w-full flex flex-row-reverse my-2 md:items-center md:justify-center">
          <div className="flex flex-row md:w-full gap-4 md:justify-between">
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
        <div className="flex flex-row gap-6 justify-center md:flex-col md:justify-center md:items-center">
          {proyectsToRender &&
            proyectsToRender.map((e, index) => (
              <CardProyect key={index} {...e} />
            ))}
        </div>
      </div>
    </section>
  );
}
