import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { CodeTag, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";

const About = ({ className = "" }) => {
  return (
    <Layout
      id="about"
      className=" !py-2 !px-8 !h-fullView flex items-center justify-center"
    >
      <div className="flex items-center justify-center h-full w-full lg:flex-col ">
        {/* Image */}
        <div className="w-[40%] p-20 2xl:p-16 xl:p-8 lg:p-6  lg:!h-[40%] lg:w-full flex items-center justify-center">
          <CodeTag className=" !w-full !h-full text-dark dark:text-light  " />
        </div>
        {/* Intro */}
        <div className="w-[60%]  lg:!h-[60%] flex flex-col gap-2 items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Hi all, I'm "
            className="!mb-0"
            titleClassName=" !text-6xl  text-left xl:!text-5xl lg:!text-center lg:!text-5xl md:text-5xl sm:!text-3xl"
          />
          <AnimatedText
            text="MAJD SOUBH"
            titleClassName=" !text-yellow-500 !text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-5xl md:text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            A Backend Specialist with a solid grounding in front-end tools like
            Vue.js and React with ability of developing full-stack applications
            from concept to deployment, and adept at collaborating with an
            international teams.
          </p>
          <div className="flex items-center gap-6 self-start mt-2 lg:self-center">
            <Link
              href="./Majd-Soubh-Resume.pdf"
              target="_blank"
              download={true}
              className="flex items-center text-light bg-dark p-2 px-5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base "
            >
              My Resume <LinkArrow className="!w-6 ml-1" />
            </Link>
            <Link
              href="mailto:majd-52@hotmail.com"
              className="text-lg underline underline-offset-8 text-dark dark:text-light capitalize font-medium md:text-base"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
