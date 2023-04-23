import * as React from "react";

interface props {
  title: string;
  skills: string[];
}

export default function CardSkill({ title, skills }: props): JSX.Element {
  return (
    <div className="bg-slate-300 h-fit w-fit">
      <div className="flex flex-col h-fit bg-yellow-200">
        <h3 className="text-blue-600 font-bold">{title}</h3>
        <ul className="w-40">
          {skills.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
