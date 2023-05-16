import React from "react";
import { useLayoutContext } from "../layout/Layout";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

type Props = {};

export const Modal = (props: Props) => {
  const { open, setOpen, modalInfo } = useLayoutContext();
  const { title, image, desc, github } = modalInfo;

  return (
    <div
      onClick={() => setOpen(!open)}
      className="fixed w-screen h-screen flex flex-col justify-center items-center bg-black z-20 bg-opacity-40 md:px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-2/3 md:w-full md:p-2 shadow-blue-800 shadow-xl border-2 border-blue-800 h-fit bg-white p-4 pt-0 rounded-xl bg-opacity-90 flex flex-col justify-center items-center z-30"
      >
        <h2 className="text-4xl text-center font-bold my-4">{title}</h2>
        <Image
          src={`/${image}`}
          alt="loading..."
          width={600}
          height={200}
          className="shadow-md shadow-slate-500 md:shadow-sm border-2 border-slate-500 border-solid"
        />
        <p className="text-center text-xl xs:text-sm my-4">{desc}</p>
        <a
          href={github}
          target="_blank"
          className="flex flex-row gap-2 p-2 bg-white border-2 border-slate-900 w-fit h-fit justify-center items-center"
        >
          <BsGithub size={28} />
          <h2>Repositorio</h2>
        </a>
      </div>
    </div>
  );
};
