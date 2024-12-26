import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Layout from "./Layout";
import { AcademicIcon, WorkIcon } from "./Icons";
import AnimatedText from "./AnimatedText";

const WorkDetials = ({
  position,
  company,
  companyLink = null,
  time,
  address,
  work,
  accomplishments = [],
}) => (
  <div className="last:mb-8">
    <LiIcon className={`md:left-0`} />
    <motion.div
      initial={{ y: 60 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`flex  flex-col items-start justify-between `}
    >
      <div className="">
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;
          <a
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
            href={companyLink || "#"}
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
      </div>
    </motion.div>
  </div>
);
const EducationDetails = ({ type, time, place, info }) => (
  <div className="last:mb-8">
    <LiIcon className={`md:left-0`} />
    <motion.div
      initial={{ y: 60 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {type}
      </h3>
      <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {place}
      </span>
      <p className="font-medium w-full md:text-sm">{info}</p>
    </motion.div>
  </div>
);

const Qualification = () => {
  const experienceScroll = useRef(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: experienceScroll,
    offset: ["start end", "end center"],
  });

  const [timeLineData, setTimeLineData] = useState([]);
  const [IsWork, setIsWork] = useState(true);

  const showWork = () => {
    const content = [
      {
        position: "Software Engineer",
        companyLink: "http://intenta.de",
        company: "LIT",
        time: "Nov 2023 - Jun 2024",
        address: "Lebanon, Remote",
        work: "LIT, is a subsidiary of Intenta GmbH in Germany, focuses on developing smart sensors and car driving assistant products.",
        accomplishments: [
          "Collaborating with cross-functional teams to optimize localization algorithms, resulting in a 25% increase in availability and ensuring continuous service for end-users",
          "Refactored 6+ key components, improving code efficiency by 30%",
          "Generating automated tests for 5 critical features, resulting in improved feature stability",
          "Performed code reviews, ensuring high-quality code and consistent development standards",
        ],
      },
      {
        position: "Full-Stack Developer",
        company: "Freelancer",
        time: "2021-Present",
        address: "Remote",
        work: "Launched custom web applications for 4 clients, leveraging PHP, Laravel, React and Vue.js to meet their needs.",
        accomplishments: [
          "Worked on planning, designing, developing and testing small to mid-scaled projects",
          "Continuous maintainance for the systems",
        ],
      },
    ];
    setTimeLineData(content);
    setIsWork(true);
  };
  const showEduction = () => {
    const content = [
      {
        type: "Bachelor Of Information Technology",
        time: "2018-2023",
        place: "Tishreen University",
        info: "Relevant courses included Software Engineering, Data Structures and Algorithms, Database Management Systems, Web Development and Artificial Intelligence.",
      },
      {
        type: "Master Web Science",
        time: "2023-present",
        place: "Syrian Virtual University",
        info: "This program offers advanced expertise in web technologies and internet systems, covering topics like web development, data mining, analysis, security, and cloud computing",
      },
    ];
    setTimeLineData(content);
    setIsWork(false);
  };

  useEffect(() => {
    showWork();
  }, []);

  return (
    <Layout>
      <AnimatedText
        className="mb-8 !text-5xl lg:!text-4xl  xs:!text-3xl"
        text="Qualification"
        extra="My Journey"
      />

      {/* Timeline Switcher */}
      <div className="w-full flex justify-center items-center gap-8">
        <button
          onClick={showWork}
          className={`font-bold flex items-center py-2 px-3 gap-4 text-xl tracking-wide  transition-all ${
            IsWork
              ? " rounded-md  bg-primary/80  text-white "
              : "text-gray-600 dark:text-gray-200"
          }`}
        >
          <WorkIcon
            className={` fill-gray-600 dark:fill-white !w-8 ${
              IsWork ? " !fill-white " : " "
            }`}
          />
          Work
        </button>

        <button
          onClick={showEduction}
          className={`font-bold items-center flex py-2 px-3 gap-4 text-xl tracking-wide  transition-all ${
            !IsWork
              ? "  rounded-md bg-primary/80 text-white "
              : "text-gray-600 dark:text-gray-200"
          }`}
        >
          <AcademicIcon
            className={` fill-gray-600 dark:fill-white !w-8 ${
              !IsWork ? " !fill-white " : ""
            }`}
          />
          Education
        </button>
      </div>

      {/* Timeline data */}
      <div
        ref={experienceScroll}
        className=" mt-12 mx-auto h-full xl:w-full lg:w-[95%] w-[75%] relative items-start flex lg:justify-end flex-wrap flex-row-reverse gap-[8%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute  left-1/2 -translate-x-1/2 md:left-0 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] "
        />
        <LiIcon className={`md:left-0 top-[100%]`} />
        {timeLineData.map((data, i) => (
          <div
            key={i}
            className={
              " w-[46%] md:w-full md:ml-8 self-start " +
              (i % 2 ? "mt-[210px] mb-16 last:mb-0" : "mt-0 ") +
              "  md:mt-0 md:mb-4 md:last:mb-0"
            }
          >
            {/* Render work details component if content is experience */}
            {IsWork && (
              <WorkDetials
                position={data.position}
                company={data.company}
                companyLink={data.companyLink}
                time={data.time}
                address={data.address}
                work={data.work}
                accomplishments={data.accomplishments}
              />
            )}
            {/* Render education details component if content is educition */}
            {!IsWork && (
              <EducationDetails
                type={data.type}
                info={data.info}
                time={data.time}
                place={data.place}
              />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Qualification;
