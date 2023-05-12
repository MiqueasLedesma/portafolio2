"use client";
import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type CardProps = {
  image: string;
  title: string;
};

type Props = {
  cardProps: CardProps[];
};

export default function Carrousel({ cardProps }: Props) {
  const [currentImg, setCurrentImg] = React.useState(0);

  const nextImg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardProps[currentImg + 1]) return setCurrentImg(0);
    return setCurrentImg(currentImg + 1);
  };

  const prevImg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentImg == 0) return setCurrentImg(cardProps.length - 1);
    return setCurrentImg(currentImg - 1);
  };

  return (
    <div className="h-fit w-fit py-16 px-4 relative group">
      <div className="flex top-4 justify-center py-2">
        {cardProps &&
          cardProps.map((dot, index) => (
            <div
              className="text-xl cursor-pointer"
              key={index}
              onClick={() => setCurrentImg(index)}
            >
              <RxDotFilled />
            </div>
          ))}
      </div>
      <div
        style={{
          backgroundImage: `url(${cardProps[currentImg].image})`,
        }}
        className="w-[200px] h-[200px] rounded-2xl bg-center bg-no-repeat bg-cover transition-all duration-500"
      ></div>
      {/* Left Arrow */}
      <div
        onClick={prevImg}
        className="absolute hidden max-md:visible group-hover:block top-[45%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft size={20} />
      </div>
      {/* Right Arrow */}
      <div
        onClick={nextImg}
        className="absolute hidden max-md:visible group-hover:block top-[45%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white  cursor-pointer"
      >
        <BsChevronCompactRight size={20} />
      </div>
      {/* Title */}
      <h2 className="text-xl font-semibold text-center whitespace-nowrap">
        {cardProps[currentImg].title}
      </h2>
    </div>
  );
}
