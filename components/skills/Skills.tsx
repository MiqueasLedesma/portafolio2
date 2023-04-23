import * as React from "react";
import CardSkill from "../cardSkill/CardSkill";

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
    <section className="w-screen h-screen bg-slate-50 p-20 snap-start">
      <h2 className="text-2xl font-bold border-b-2 w-fit border-current">
        Tecnologías:
      </h2>
      <CardSkill {...cardProps} />
    </section>
  );
}
