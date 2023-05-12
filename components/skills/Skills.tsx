import * as React from "react";
import Carrousel from "../carrousel/carrousel";

interface props {}

export default function Skills({}: props) {
  const frontSkills = [
    {
      image: "icons/html-logo.svg",
      title: "HTML",
    },
    {
      image: "icons/css-logo.svg",
      title: "CSS",
    },
    {
      image: "icons/js-logo.svg",
      title: "JavaScript",
    },
    {
      image: "icons/typescript-logo.svg",
      title: "Typescript",
    },
    {
      image: "icons/react-logo.svg",
      title: "React",
    },
    {
      image: "icons/redux-logo.svg",
      title: "Redux",
    },
    {
      image: "icons/nextjs-logo.svg",
      title: "NextJS",
    },
    {
      image: "icons/bootstrap-logo.svg",
      title: "Bootstrap",
    },
    {
      image: "icons/styled-logo.svg",
      title: "Styled-Components",
    },
    {
      image: "icons/tailwind-logo.svg",
      title: "Tailwind CSS",
    },
  ];

  const backSkills = [
    {
      image: "icons/nodejs-logo.svg",
      title: "NodeJS",
    },
    {
      image: "icons/sequelize-logo.svg",
      title: "Sequelize",
    },
    {
      image: "icons/express-logo.svg",
      title: "Express",
    },
    {
      image: "icons/typescript-logo.svg",
      title: "Typescript",
    },
    {
      image: "icons/postgresql-logo.svg",
      title: "PostgreSQL",
    },
  ];

  return (
    <section className="w-screen h-screen bg-blue-700 p-20 snap-start text-white flex flex-col gap-8">
      <div className="flex flex-row gap-12 w-full justify-center items-center max-md:flex-col">
        <div>
          <h2 className="text-2xl font-semibold text-center">Front-End:</h2>
          <Carrousel cardProps={frontSkills} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center">Back-End:</h2>
          <Carrousel cardProps={backSkills} />
        </div>
      </div>
    </section>
  );
}
