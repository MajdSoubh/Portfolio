import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Layout from "./Layout";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  accomplishments = [],
}) => {
  return (
    <li
      id="exp"
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex  flex-col items-start justify-between md:w-[80%] "
    >
      <LiIcon />
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
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm mb-1">{work}</p>
        {accomplishments.length && (
          <ul className=" list-disc ml-4">
            {accomplishments.map((a, i) => (
              <li key={i} className="font-medium w-full text-sm">
                <p>{a}</p>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
      <LiIcon top={"100%"} />
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
      <h2 className="font-bold mb-16  w-full text-center !text-5xl lg:!text-4xl  xs:!text-3xl">
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
            work="SCASE LTD, is a subsidiary of Intenta GmbH in Germany, focuses on developing smart sensors and car driving
assistant products."
            accomplishments={[
              "Refactored 6+ key components, improving code efficiency by 30%",
              "Analyzing and improving car localization algorithms to maintain accuracy and stability",
              "Implemented comprehensive test suites, ensuring functionality and compliance with intended requirements across multiple features",
            ]}
          />
        </ul>
      </div>
    </Layout>
  );
};

export default Experience;
