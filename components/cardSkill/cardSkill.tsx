import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

export const CardSkill = (props: Props) => {
  const { image, title } = props;
  return (
    <div className="flex flex-col justify-center items-center select-none transition-all ease-in-out duration-500">
      <Image src={image} alt="loading..." width={100} height={100} />
      <h2>{title}</h2>
    </div>
  );
};
