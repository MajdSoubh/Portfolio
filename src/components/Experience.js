import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Layout from "./Layout";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const itemRef = useRef(null);
  return (
    <li
      ref={itemRef}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex  flex-col items-start justify-between md:w-[80%] "
    >
      <LiIcon reference={itemRef} />
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="sm:ml-2"
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;
          <a
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time}| {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const experienceScroll = useRef(null);

  const { scrollYProgress } = useScroll({
    target: experienceScroll,
    offset: ["start end", "end center"],
  });
  return (
    <Layout>
      <h2 className="font-bold text-8xl mb-32  md:mb-16 w-full text-center 2xl:!text-7xl lg:!text-6xl  xs:!text-3xl ">
        Experience
      </h2>
      <div
        ref={experienceScroll}
        className=" relative  w-[75%] mx-auto lg:w-[90%] md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute  left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col justify-between items-start">
          <Details
            position="Software Engineer"
            companyLink="http://intenta.de"
            company="SCASE"
            time="2023-Present"
            address="Syria, Tartous"
            work="Worked with an internationl team responsible for analyzing and improving car localization algorithms to maintain accuracy and stability."
          />
        </ul>
      </div>
    </Layout>
  );
};

export default Experience;
