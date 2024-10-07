import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "@/assets/images/githubdp.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              src={githubdp}
              alt="Ricardo portrait"
              width="250"
              height="250"
              className="h-80 w-80 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Bayram.</span> I'm a{" "}
        <span className="font-bold">backend engineer</span> at{" "}
        <span className="font-bold">100haryt.com</span>. I specialize in Node.js, NestJS, Express, Fastify, GraphQL, and AWS with over 2 years of experience.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/BayramBabagulyyew"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/bayram-babagulyyew-7b72b5306/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
