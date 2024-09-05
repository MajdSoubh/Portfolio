import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LeftArrow, RightArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import EStore from "../../public/images/projects/e-store.PNG";
import Surveys from "../../public/images/projects/surveys.PNG";
import ZIPURL from "../../public/images/projects/zip-url.PNG";
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
  link = null,
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
        "  w-full h-full flex items-center justify-between relative rounded-lg  bg-light  dark:bg-dark  p-6 py-4 lg:flex-col  " +
        className
      }
    >
      {/* Image */}
      <div className="w-1/2 h-[200px] lg:w-full lg:h-28 cursor-pointer overflow-hidden rounded-lg ">
        <div className="flex items-center justify-center w-full h-full">
          <MotionImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={process.env.NODE_ENV == "development" ? img : imgProd}
            alt={title}
            priority
            className={"w-full h-full "}
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
        <div className="flex items-center mt-4 justify-between w-full ">
          <Link href={github} className="w-10" target="_blank">
            <GithubIcon />
          </Link>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="ml-4  rounded-lg bg-primary/75 text-light p-2 px-4 text-md font-semibold  sm:px-4 sm:text-base"
            >
              Visit Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Store",
      summary:
        "The online store application enables administrators to add products and view reports, while allowing users to purchase products.",
      link: "http://lcommerce.atwebpages.com/home",
      tags: ["Laravel", "Vue", "Vuex", "TailwindCSS"],
      imgProd: "./images/projects/e-store.png",
      img: EStore,
      github: "https://github.com/MajdSoubh/Laravel-Vue-Ecommerce",
    },
    {
      title: "Survey Time",
      summary:
        "Web application for creating surveys and sharing them with others to gather their responses.",
      link: "http://lcommerce.atwebpages.com/home",
      tags: ["Laravel", "Vue", "Vuex"],
      img: Surveys,
      imgProd: "./images/projects/surveys.png",
      github: "https://github.com/MajdSoubh/Surveys",
    },
    {
      title: "ZIP URL",
      summary:
        "PHP-MVC project aimed at creating and managing short URLs, leveraging the Model-View-Controller (MVC) architectural pattern.",
      link: "http://lcommerce.atwebpages.com/home",
      tags: ["PHP", "JS", "MVC"],
      img: ZIPURL,
      imgProd: "./images/projects/zip-url.png",
      github: "https://github.com/MajdSoubh/ZIP-URL",
    },
    {
      title: "PMS",
      summary:
        "PMS web application designed to streamline operations within pharmacies, reducing the need for manual work.",
      link: "http://lcommerce.atwebpages.com/home",
      img: PMS,
      imgProd: "./images/projects/pms.png",
      tags: ["Laravel", "React", "TailwindCSS"],
      github: "https://github.com/MajdSoubh/PMS",
    },
    {
      title: "Imposiable Tic Tac Toe",
      summary:
        "This Tic Tac Toe game uses the Minimax algorithm to determine the best move for the computer player.",
      link: "http://lcommerce.atwebpages.com/home",
      tags: ["HTML", "CSS", "JS"],
      imgProd: "./images/projects/tic-tac-toe.png",
      img: TicTacToe,
      github: "https://github.com/MajdSoubh/Tic-Tac-Toe/",
      link: "https://majdsoubh.github.io/Tic-Tac-Toe/",
    },
    {
      title: "Ask Me (C++ Console)",
      summary:
        "AskMe is a C++ console project built using object-oriented concepts that allows users to ask and answer questions.",
      github: "https://github.com/MajdSoubh/AskMe",
      link: "http://lcommerce.atwebpages.com/home",
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
        className="mb-16 !text-5xl lg:!text-4xl  xs:!text-3xl"
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
            link={projects[index].link}
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