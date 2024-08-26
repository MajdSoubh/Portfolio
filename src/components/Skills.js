import { motion } from "framer-motion";
import React from "react";
import Layout from "./Layout";

const Skill = ({ name, left, top }) => {
  return (
    <motion.div
      className="absolute w-fit flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
      whileInView={{
        left: left,
        top: top,
        x: "-50%",
        y: "-50%",
        transition: { duration: 1.5 },
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Layout>
      <h2 className="font-bold text-6xl w-full text-center  lg:!text-6xl  xs:!text-3xl ">
        Skills
      </h2>

      <div className="w-full h-screen relative  rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light py-6 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-4 lg:px-4 md:py-5 md:px-5 md:text-sm xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
          whileHover={{ scale: 1.05 }}
          initial={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          whileInView={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            transition: { duration: 1.5 },
          }}
          viewport={{ once: true }}
        >
          Web
        </motion.div>

        <Skill name="HTML" left="32%" top="35%" />
        <Skill name="Tailwind CSS" left="30%" top="62%" />
        <Skill name="CSS" left="72%" top="65%" />
        <Skill name="Data Structures" left="78%" top="78%" />
        <Skill name="OOP" left="35%" top="79%" />
        <Skill name="Vuejs" left="68%" top="22%" />
        <Skill name="Algorithms" left="65%" top="38%" />
        <Skill name="React" left="50%" top="70%" />
        <Skill name="Mysql" left="30%" top="24%" />
        <Skill name="Laravel" left="46%" top="18%" />
        <Skill name="PHP" left="58%" top="83%" />
        <Skill name="Java Script" left="23%" top="50%" />
        <Skill name="C++" left="77%" top="50%" />
      </div>
    </Layout>
  );
};

export default Skills;
