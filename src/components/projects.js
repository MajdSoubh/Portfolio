import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EStore from "../../public/images/projects/e-store.PNG";
import Surveys from "../../public/images/projects/surveys.PNG";
import ZIPURL from "../../public/images/projects/zip-url.PNG";
import TicTacToe from "../../public/images/projects/tic-tac-toe.png";
import Console from "../../public/images/projects/console.png";
import PMS from "../../public/images/projects/pms.PNG";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link = null,
  github,
}) => {
  return (
    <div className="w-full h-full flex items-center justify-between relative rounded-lg  border border-solid border-primary dark:border-primaryDark bg-light  dark:bg-dark shadow-2xl p-6 py-4 lg:flex-col  xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      {/* Image */}
      <div className="w-1/2  lg:w-full lg:h-[50%] cursor-pointer overflow-hidden rounded-lg ">
        <div className="flex items-center justify-center w-full h-full">
          <MotionImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={img}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full "
          />
        </div>
      </div>
      {/* Description */}
      <div className="w-1/2 lg:w-full flex flex-col h-full lg:h-auto items-start justify-around pl-6 lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <div className="hover:underline underline-offset-2">
          <h2 className="text-left text-xl font-bold my-2 w-full text-dark dark:text-light sm:text-sm">
            {title}
          </h2>
        </div>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {/* Links */}
        <div className="flex items-center mt-4 justify-between w-full ">
          <Link href={github} className="w-10" target="_blank">
            <GithubIcon />
          </Link>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="ml-4  rounded-lg bg-dark text-light p-2 px-4 text-md font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Visit Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
const Project = ({ type, title, img, link = null, github }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-between rounded-2xl  border border-solid border-primary bg-light dark:bg-dark dark:border-primaryDark relative p-6 xs:p-4 ">
      <div className="absolute top-0  -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light dark:border-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      {/* Image */}
      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </div>
      {/* Description */}
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <div className="hover:underline underline-offset-2 ">
          <h2 className="text-left text-xl font-bold my-2 w-full lg:text-2xl">
            {title}
          </h2>
        </div>
        <div className="flex items-center justify-between w-full my-2 ">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="text-dark  text-lg font-semibold underline underline-offset-2 dark:text-light md:text-base"
            >
              Visit Demo
            </Link>
          )}
          <Link href={github} className="w-8 md:w-6" target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  return (
    <Layout id="projects" className="pt-16">
      <AnimatedText
        className="mb-16 !text-5xl lg:!text-4xl  xs:!text-3xl"
        text="Every bug is an opportunity to grow"
      />
      <div className="grid grid-cols-12 gap-24  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        {/* E-Store */}
        <div className="col-span-12">
          <FeaturedProject
            title="E-Store"
            summary="The online store application enables administrators to add products and view reports, while allowing users to purchase
products. It is built using Vue, Vuex and Tailwind CSS for the front end, and uses Laravel for the back end.
"
            link="http://lcommerce.atwebpages.com/home"
            type="Featured Project"
            img={EStore}
            github="https://github.com/MajdSoubh/Laravel-Vue-Ecommerce"
          />
        </div>
        {/* Survey Time */}
        <div className="col-span-12">
          <FeaturedProject
            title="Survey Time"
            summary="Web application for creating surveys and sharing them with others to gather their responses, built using Vue, Vuex,
Tailwind CSS as front-end and Laravel as back-end."
            type="Featured Project"
            img={Surveys}
            github="https://github.com/MajdSoubh/Surveys"
          />
        </div>
        {/* ZIP URL */}
        <div className="col-span-12">
          <FeaturedProject
            title="ZIP URL"
            summary="PHP-MVC project aimed at creating and managing short URLs, leveraging the Model-View-Controller (MVC) architectural
pattern."
            type="Featured Project"
            img={ZIPURL}
            github="https://github.com/MajdSoubh/ZIP-URL"
          />
        </div>
        {/* PMS */}
        <div className="col-span-12">
          <FeaturedProject
            title="PMS"
            summary="PMS is a Laravel and React-based web application designed to streamline operations within pharmacies, reducing the
need for manual work."
            type="Featured Project"
            img={PMS}
            github="https://github.com/MajdSoubh/PMS"
          />
        </div>

        <div className="col-span-6 xl:col-span-12">
          <FeaturedProject
            title="Imposiable Tic Tac Toe"
            link="https://majdsoubh.github.io/Tic-Tac-Toe/"
            img={TicTacToe}
            summary="This is a Tic Tac Toe game developed using HTML, CSS, and JavaScript. The game uses the Minimax algorithm to determine
the best move for the computer player."
            github="https://github.com/MajdSoubh/Tic-Tac-Toe"
          />
        </div>
        <div className="col-span-6 xl:col-span-12">
          <FeaturedProject
            title="Ask Me (C++ Console)"
            img={Console}
            summary="AskMe is a C++ console project built using object-oriented concepts that allows users to ask and answer questions."
            github="https://github.com/MajdSoubh/AskMe"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
