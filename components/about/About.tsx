import * as React from "react";

interface props {}

export default function About({}: props) {
  return (
    <section className="h-screen w-screen bg-blue-400">
      <aside className="w-1/2 h-screen bg-slate-200 p-14 max-md:w-2/3 max-sm:w-screen">
        <h2 className="text-blue-600 font-bold text-4xl mt-10">
          Bienvenido a mi portafolio
        </h2>
        <h4>
          Soy un desarrollador web full-stack con amplios conocimientos en
          tecnologias como:
        </h4>
        <h4>React, NodeJS, Express, Nextjs, React Native entre otros.</h4>
      </aside>
    </section>
  );
}
