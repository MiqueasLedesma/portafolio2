import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import { useLayoutContext } from "@/components/layout/Layout";
import Proyects from "@/components/proyects/Proyects";
import Skills from "@/components/skills/Skills";
import React from "react";

export default function Home() {
  const layoutState = useLayoutContext();
  const { currentPage, setCurrentPage } = layoutState;

  // console.log(currentPage);

  const aboutRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const proyectsRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      const { top, bottom } = aboutRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= window.innerHeight) {
        setCurrentPage("about");
      }
    }
    if (contactRef.current) {
      const { top, bottom } = contactRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= window.innerHeight) {
        setCurrentPage("contact");
      }
    }
    if (proyectsRef.current) {
      const { top, bottom } = proyectsRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= window.innerHeight) {
        setCurrentPage("proyects");
      }
    }
    if (skillsRef.current) {
      const { top, bottom } = skillsRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= window.innerHeight) {
        setCurrentPage("skills");
      }
    }
  };

  return (
    <div
      onScroll={() => handleScroll()}
      className="snap-y snap-mandatory overflow-auto overflow-x-hidden h-screen w-screen"
    >
      <div id="about" className="snap-start" ref={aboutRef}>
        <About />
      </div>
      <div id="proyects" className="snap-start" ref={proyectsRef}>
        <Proyects />
      </div>
      <div id="skills" className="snap-start" ref={skillsRef}>
        <Skills />
      </div>
      <div id="contact" className="snap-start" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
