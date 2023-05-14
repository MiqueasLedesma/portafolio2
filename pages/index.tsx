import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import { useLayoutContext } from "@/components/layout/Layout";
import { Modal } from "@/components/modal/modal";
import Proyects from "@/components/proyects/Proyects";
import Skills from "@/components/skills/Skills";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  const { setCurrentPage, open } = useLayoutContext();
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const proyectsRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

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
    <>
      {open && <Modal />}
      <div
        style={{ scrollSnapStop: "always" }}
        ref={scrollRef}
        onScroll={() => handleScroll()}
        className="snap-y snap-mandatory overflow-auto overflow-x-hidden h-screen w-screen font-poppins"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.5, root: scrollRef }}
          id="about"
          className="snap-start"
          ref={aboutRef}
        >
          <About />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.5, root: scrollRef }}
          id="skills"
          className="snap-start"
          ref={skillsRef}
        >
          <Skills ref={scrollRef} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: "-50%" }}
          whileInView={{ opacity: 1, translateX: "0%" }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.5, root: scrollRef }}
          id="proyects"
          className="snap-start"
          ref={proyectsRef}
        >
          <Proyects />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.5, root: scrollRef }}
          id="contact"
          className="snap-start"
          ref={contactRef}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
}
