import React from "react";

type Props = {
  image: string;
};

export const CardProyect = (props: Props) => {
  const { image } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="bg-cover hover:bg-center transition-all ease-out duration-500 h-[350px] w-[400px] border-2 border-black hover:cursor-pointer"
    >
      <div className="w-full"></div>
    </div>
  );
};
