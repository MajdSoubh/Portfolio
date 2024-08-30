import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Layout from "./Layout";

const Details = ({ type, time, place, info }) => {
  const itemRef = useRef(null);
  return (
    <li
      ref={itemRef}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex  flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={itemRef} />
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type} &nbsp;
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const experienceScroll = useRef(null);

  const { scrollYProgress } = useScroll({
    target: experienceScroll,
    offset: ["start end", "end center"],
  });
  return (
    <Layout>
      <h2 className="font-bold  mb-16  w-full text-center !text-5xl lg:!text-4xl  xs:!text-3xl">
        Education
      </h2>
      <div
        ref={experienceScroll}
        className=" relative  w-[75%] mx-auto lg:w-[90%] md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute  left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col justify-between items-start ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Information Technology"
            time="2018-2023"
            place="Tishreen University"
            info="Relevant courses included Software Engineering, Data Structures and Algorithms, Database Management Systems, Web Development and Artificial Intelligence."
          />
          <Details
            type="Master Web Science"
            time="2023-present"
            place="Syrian Virtual University"
            info="This program offers advanced expertise in web technologies and internet systems, covering topics like web development,
data mining, analysis, security, and cloud computing"
          />
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
