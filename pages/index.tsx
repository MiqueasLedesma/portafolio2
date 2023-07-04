import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import { useLayoutContext } from "@/components/layout/Layout";
import { Modal } from "@/components/modal/modal";
import Proyects from "@/components/proyects/Proyects";
import Skills from "@/components/skills/Skills";
import { motion } from "framer-motion";
import Head from "next/head";
import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";


export default function Home() {
  const { setCurrentPage, open } = useLayoutContext();
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const proyectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleScroll = () => {
    if (aboutRef.current) {
      const { top, bottom } = aboutRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= windowHeight) {
        setCurrentPage("about");
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (contactRef.current) {
      const { top, bottom } = contactRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= windowHeight) {
        setCurrentPage("contact");
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (proyectsRef.current) {
      const { top, bottom } = proyectsRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= windowHeight) {
        setCurrentPage("proyects");
        proyectsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (skillsRef.current) {
      const { top, bottom } = skillsRef.current.getBoundingClientRect();
      if (top >= 0 && bottom <= windowHeight) {
        setCurrentPage("skills");
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Head>
        <title>My Portafolio</title>
        <link rel="icon" href="icons/port-icon.svg" />
      </Head>
      {open && <Modal />}
      <div
        ref={scrollRef}
        onScroll={() => handleScroll()}
        className="overflow-auto snap-y overflow-x-hidden h-screen w-screen font-poppins"
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
          transition={{ duration: 1 }}
          viewport={{ amount: 0.5, root: scrollRef }}
          id="skills"
          className="snap-start"
          ref={skillsRef}
        >
          <Skills ref={scrollRef} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
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
