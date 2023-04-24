import * as React from "react";
import Carrousely from "../carrousely/carrousely";

interface props {}

export default function Skills({}: props) {
  const cardProps = {
    title: "Front-End",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Bootstrap",
      "Tailwind",
      "Styled-Components",
    ],
  };

  return (
    <section className="w-screen h-screen bg-blue-700 p-20 snap-start text-white flex flex-col gap-8">
      <h2 className="text-3xl font-bold underline">Tecnologías:</h2>
      <h4 className="text-2xl font-semibold underline">Front-end:</h4>
      <Carrousely />
      <h4 className="text-2xl font-semibold underline">Back-end:</h4>
    </section>
  );
}
