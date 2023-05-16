import React from "react";
import { useLayoutContext } from "../layout/Layout";

type Props = {
  image: string;
  title: string;
  desc: string;
  github: string;
};

export const CardProyect = (props: Props) => {
  const { image, desc, title, github } = props;
  const { open, setOpen, setModalInfo } = useLayoutContext();

  const handleClick = () => {
    setOpen(!open);
    setModalInfo({ image, desc, title, github });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="bg-cover hover:bg-center transition-all ease-out duration-500 h-[350px] w-[400px] border-2 border-black hover:cursor-pointer xs:w-[90vw]"
    ></div>
  );
};
