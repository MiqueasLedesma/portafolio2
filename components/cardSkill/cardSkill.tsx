import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

export const CardSkill = (props: Props) => {
  const { image, title } = props;
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col justify-center items-center select-none transition-all ease-in-out duration-500 relative"
    >
      <Image src={image} alt="loading..." width={100} height={100} />
      <div
        className={`${
          hover ? "visible" : "hidden"
        } absolute p-2 bg-slate-200 text-blue-600 translate-x-[30%] -translate-y-[150%] z-20 rounded-lg font-semibold`}
      >
        <h2>{title}</h2>
      </div>
    </div>
  );
};
