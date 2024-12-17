import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LeftArrow, RightArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import EStore from "../../public/images/projects/e-store.PNG";
import Memonto from "../../public/images/projects/memonto-homepage.PNG";
import Surveys from "../../public/images/projects/surveys.PNG";
import ZIPURL from "../../public/images/projects/zip-url.PNG";
import Terminal from "../../public/images/projects/laravel-terminal.jpg";
import Treeify from "../../public/images/projects/treeify.jpeg";
import TicTacToe from "../../public/images/projects/tic-tac-toe.png";
import Console from "../../public/images/projects/console.png";
import PMS from "../../public/images/projects/pms.PNG";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const FeaturedProject = ({
  title,
  summary,
  tags = [],
  img,
  imgProd = "./",
  links = [],
  github,
  className = "",
}) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      // exit={{ x: -300 }} // Ensure exit animation is defined
      transition={{
        duration: 0.5,
      }}
      className={
        " border-dark  border-2 hover:text-dark hover:bg-white dark:border-white w-full h-full flex items-center justify-between relative rounded-lg  bg-light  dark:bg-dark  p-6 py-4 lg:flex-col  " +
        className
      }
    >
      {/* Image */}
      <div className="w-1/2 h-[300px] lg:w-full lg:max-h-80 cursor-pointer overflow-hidden rounded-lg ">
        <div className="flex items-center justify-center w-full h-full">
          <MotionImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={img}
            alt={title}
            priority
            className={"w-auto h-auto object-fill "}
          />
        </div>
      </div>
      {/* Description */}
      <div className="w-1/2 lg:w-full flex flex-col h-full lg:h-auto items-start justify-around pl-6 lg:pl-0 lg:pt-6">
        <div className="hover:underline underline-offset-2">
          <h2 className="text-left text-xl font-bold my-2 w-full text-dark dark:text-light sm:text-sm">
            {title}
          </h2>
        </div>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {/* Tags */}
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="font-bold block">
              #{tag}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex items-center mt-4 gap-6 justify-between w-full ">
          <Link href={github} className="w-10" target="_blank">
            <GithubIcon />
          </Link>
          <div className="flex gap-2">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                target="_blank"
                className=" rounded-lg hover:bg-primary/80 bg-primary transition-colors text-light p-2 px-4 text-md font-semibold  sm:px-4 sm:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Memonto",
      summary:
        "A social media app for sharing posts and real-time chatting, built for seamless and engaging user interactions.",
      tags: ["Node.js", "MongoDB", "Express", "React", "TailwindCSS"],
      imgProd: "./images/projects/memonto-homepage.png",
      img: Memonto,
      github: "https://github.com/MajdSoubh/Memonto",
    },
    {
      title: "E-Store",
      summary:
        "The online store application enables administrators to add products and view reports, while allowing users to purchase products.",
      links: [
        { label: "Demo", link: "http://lcommerce.atwebpages.com" },
        { label: "Admin", link: "http://lcommerce.atwebpages.com/admin" },
      ],
      tags: ["Laravel", "Vue", "Vuex", "TailwindCSS"],
      imgProd: "./images/projects/e-store.png",
      img: EStore,
      github: "https://github.com/MajdSoubh/Laravel-Vue-Ecommerce",
    },
    {
      title: "Survey Time",
      summary:
        "Web application for creating surveys and sharing them with others to gather their responses.",
      tags: ["Laravel", "Vue", "Vuex"],
      img: Surveys,
      imgProd: "./images/projects/surveys.png",
      github: "https://github.com/MajdSoubh/Surveys",
    },
    {
      title: "ZIP URL",
      summary:
        "PHP-MVC project aimed at creating and managing short URLs, leveraging the Model-View-Controller (MVC) architectural pattern.",
      tags: ["PHP", "JS", "MVC"],
      img: ZIPURL,
      imgProd: "./images/projects/zip-url.png",
      github: "https://github.com/MajdSoubh/ZIP-URL",
    },
    {
      title: "PMS",
      summary:
        "PMS web application designed to streamline operations within pharmacies, reducing the need for manual work.",
      img: PMS,
      imgProd: "./images/projects/pms.png",
      tags: ["Laravel", "React", "TailwindCSS"],
      github: "https://github.com/MajdSoubh/PMS",
    },
    {
      title: "Laravel Terminal",
      summary:
        "A Laravel package that allows you to interact with a shell environment directly from your browser. This tool is designed for development purposes only and should not be used in production environments due to security risks associated with exposing shell access.",
      tags: ["Laravel", "PHP"],
      img: Terminal,
      github: "https://github.com/MajdSoubh/Laravel-Terminal",
    },
    {
      title: "Treeify",
      summary:
        "This Laravel package provides an elegant solution for retrieve and display a model's self-relation as a nested tree.",
      tags: ["Laravel", "PHP"],
      img: Treeify,
      github: "https://github.com/MajdSoubh/Treeify",
    },
    {
      title: "Imposiable Tic Tac Toe",
      summary:
        "This Tic Tac Toe game uses the Minimax algorithm to determine the best move for the computer player.",
      tags: ["HTML", "CSS", "JS"],
      imgProd: "./images/projects/tic-tac-toe.png",
      img: TicTacToe,
      github: "https://github.com/MajdSoubh/Tic-Tac-Toe/",
      links: "https://majdsoubh.github.io/Tic-Tac-Toe/",
      links: [
        { label: "Play it", link: "https://majdsoubh.github.io/Tic-Tac-Toe/" },
      ],
    },
    {
      title: "Ask Me (C++ Console)",
      summary:
        "AskMe is a C++ console project built using object-oriented concepts that allows users to ask and answer questions.",
      github: "https://github.com/MajdSoubh/AskMe",
      tags: ["C++", "OOB"],
      imgProd: "./images/projects/console.png",
      img: Console,
    },
  ];
  const [index, setIndex] = useState(0);

  const handleGoToRight = () => {
    if (index + 1 == projects.length) return;

    setIndex(index + 1);
  };
  const handleGoToLeft = () => {
    if (index <= 0) return;
    setIndex(index - 1);
  };
  return (
    <Layout id="projects" className="pt-16 md:!px-8 sm:!px-2">
      <AnimatedText
        className="mb-4 !text-5xl lg:!text-4xl  xs:!text-3xl"
        text="Projects"
        extra="My Featured Projects"
      />

      {/* Project Portfolio */}

      <div className="w-full flex px-4 items-stretch justify-between gap-4 md:gap-0">
        {/* Left Arrow */}
        <div
          className="flex items-center justify-center"
          onClick={handleGoToLeft}
          style={{ opacity: index > 0 ? 1 : 0 }}
        >
          <LeftArrow className={"!w-7 fill-primary"} />
        </div>
        {/* View */}
        <div className="transition-all">
          <FeaturedProject
            className=" min-h-max"
            title={projects[index].title}
            summary={projects[index].summary}
            links={projects[index].links}
            type={projects[index].type}
            tags={projects[index].tags}
            imgProd={projects[index].imgProd}
            img={projects[index].img}
            github={projects[index].github}
          />
        </div>
        {/* Right Arrow */}
        <div
          className="flex items-center justify-center "
          onClick={handleGoToRight}
        >
          <RightArrow
            style={{ opacity: index + 1 < projects.length ? 1 : 0 }}
            className={"!w-7 fill-primary"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
