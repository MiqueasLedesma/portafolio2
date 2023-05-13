import * as React from "react";
import { CardSkill } from "../cardSkill/cardSkill";
import Image from "next/image";
import { cardProps } from "@/constants";
import { motion } from "framer-motion";

interface props {
  ref: React.RefObject<HTMLDivElement>;
}

export default function Skills(props: props) {
  const { ref } = props;
  return (
    <section className="w-screen h-screen bg-blue-700 py-24 p-20 snap-start select-none text-white flex flex-col gap-8 overflow-hidden relative">
      <Image
        className="absolute top-0 left-0"
        src="icons/cube32.svg"
        alt=""
        width={150}
        height={150}
      />
      <Image
        className="absolute top-0 right-[10rem]"
        src="icons/cube6.svg"
        alt=""
        width={60}
        height={60}
      />
      <Image
        className="absolute bottom-0 right-0"
        src="icons/cube32x.svg"
        alt=""
        width={150}
        height={150}
      />
      <Image
        className="absolute bottom-16 left-24"
        src="icons/equis.svg"
        alt=""
        width={45}
        height={45}
      />
      <div className="md:flex md:flex-col md:items-center md:justify-center">
        <h1 className="text-4xl font-semibold">Mi stack:</h1>
        <div className="w-[2rem] h-2 rounded-md bg-white my-2"></div>
      </div>
      <motion.div
        initial={{ translateX: "50%" }}
        whileInView={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.5, root: ref }}
        className="flex flex-row flex-wrap gap-[2rem] justify-center items-center my-auto md:gap-[1rem]"
      >
        {cardProps.map((e) => (
          <CardSkill key={e.image} {...e} />
        ))}
      </motion.div>
    </section>
  );
}
