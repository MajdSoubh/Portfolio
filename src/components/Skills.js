import {
  inView,
  motion,
  motionValue,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import Layout from "./Layout";

const SkillTree = ({ name, left, top }) => {
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

const Skill = ({ name, amount, className = "" }) => {
  const motionValue = useMotionValue(0);
  const percentageEle = useRef();
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(percentageEle, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(amount);
    }
  }, [motionValue, isInView, amount]);

  springValue.on("change", (latest) => {
    if (latest.toFixed(0) <= amount) {
      percentageEle.current.textContent = latest.toFixed(0);
    }
  });

  return (
    <div className={"flex flex-col gap-2 " + className}>
      <div className="flex justify-between">
        <p className="font-medium text-lg md:text-sm mr-2">{name}</p>
        <span className="font-bold text-lg mr-1">
          <span ref={percentageEle}></span>%
        </span>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${amount}%`, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="rounded-md h-2 w-0 bg-primary dark:bg-primaryDark"
      ></motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <Layout>
      <h2 className="font-bold w-full text-center !text-5xl lg:!text-4xl  xs:!text-3xl">
        Skills
      </h2>

      {/*   <div className="w-full h-screen relative  rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
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

        <SkillTree name="HTML" left="32%" top="35%" />
        <SkillTree name="Tailwind CSS" left="30%" top="62%" />
        <SkillTree name="CSS" left="72%" top="65%" />
        <SkillTree name="Data Structures" left="78%" top="78%" />
        <SkillTree name="OOP" left="35%" top="79%" />
        <SkillTree name="Vuejs" left="68%" top="22%" />
        <SkillTree name="Algorithms" left="65%" top="38%" />
        <SkillTree name="React" left="50%" top="70%" />
        <SkillTree name="Mysql" left="30%" top="24%" />
        <SkillTree name="Laravel" left="46%" top="18%" />
        <SkillTree name="PHP" left="58%" top="83%" />
        <SkillTree name="Java Script" left="23%" top="50%" />
        <SkillTree name="C++" left="77%" top="50%" />
      </div> */}
      <div className="w-full mt-5 grid grid-cols-2 place-content-center gap-y-8 gap-x-16   md:px-4">
        <Skill
          className="md:col-span-2 col-span-1"
          name="Laravel, PHP"
          amount="80"
        />
        <Skill className="md:col-span-2 col-span-1" name="Mysql" amount="75" />
        <Skill
          className="md:col-span-2 col-span-1"
          name="HTML, CSS, JavaScript, Ajax, JQuery"
          amount="80"
        />
        <Skill className="md:col-span-2 col-span-1" name="Vuejs" amount="70" />
        <Skill className="md:col-span-2 col-span-1" name="React" amount="50" />
        <Skill
          className="md:col-span-2 col-span-1"
          name="Bootstrap, TailwindCSS"
          amount="85"
        />
        <Skill
          className="md:col-span-2 col-span-1"
          name="OOP, Design Patterns"
          amount="70"
        />
        <Skill
          className="md:col-span-2 col-span-1"
          name="Git, Github, Gitlab"
          amount="80"
        />
        <Skill className="md:col-span-2 col-span-1" name="C++" amount="65" />
      </div>
    </Layout>
  );
};

export default Skills;
