import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Layout from "./Layout";
import { BackendIcon, DownArrowIcon, FrontendIcon } from "./Icons";
import AnimatedText from "./AnimatedText";

const SkillList = ({ children, name, className = "", icon = null }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={
        "w-full overflow-hidden self-start cursor-pointer   px-4 py-3 rounded-xl transition-all  border-dark  border-2 hover:text-dark hover:bg-white dark:border-white dark:!text-white dark:bg-dark hover:shadow hover:shadow-dark dark:hover:shadow-white " +
        (isOpen ? " " : " ") +
        className
      }
    >
      {/* Interface */}
      <div
        className="flex justify-between items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex gap-4 items-center">
          {icon}

          <p className="font-bold text-xl tracking-widest">{name}</p>
        </div>
        <div>
          <DownArrowIcon
            className={` transition-transform !w-8 fill-dark dark:fill-white ${
              isOpen ? " -rotate-[180deg]" : " "
            }`}
          />
        </div>
      </div>
      {/* Menu */}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            transition: { duration: 0.4 },
          }}
          className={"w-full  my-8 flex flex-col gap-4"}
        >
          {children}
        </motion.div>
      )}
    </div>
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
    if (!latest || !percentageEle.current) return;
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
      <AnimatedText
        className="mb-10 !text-5xl lg:!text-4xl  xs:!text-3xl"
        text="Skills"
        extra="My Technical Skills"
      />

      <div className=" w-full grid grid-cols-2 gap-8 ">
        <SkillList
          icon={<FrontendIcon className={"!w-8 "} />}
          name="Frontend Stack"
          className="col-span-1 lg:col-span-2"
        >
          <Skill
            className="md:col-span-2 col-span-1"
            name="HTML, CSS"
            amount="80"
          />
          <Skill
            className="md:col-span-2 col-span-1"
            name="JavaScript"
            amount="80"
          />
          <Skill
            className="md:col-span-2 col-span-1"
            name="Ajax, JQuery"
            amount="80"
          />
          <Skill
            className="md:col-span-2 col-span-1"
            name="Vuejs"
            amount="70"
          />
          <Skill
            className="md:col-span-2 col-span-1"
            name="React"
            amount="50"
          />
          <Skill
            className="md:col-span-2 col-span-1"
            name="Bootstrap, TailwindCSS"
            amount="85"
          />
        </SkillList>
        <SkillList
          icon={<BackendIcon className={"!w-8 "} />}
          name="Backend Stack"
          className="col-span-1 lg:col-span-2"
        >
          <Skill
            className="md:col-span-2 col-span-1"
            name="Laravel, PHP"
            amount="80"
          />
          <Skill
            className="md:col-span-2 col-span-1"
            name="Node.js, express.js"
            amount="80"
          />
          <Skill className="md:col-span-2 col-span-1" name="C++" amount="65" />
          <Skill
            className="md:col-span-2 col-span-1"
            name="Mysql, MongoDB"
            amount="75"
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
          <Skill
            className="md:col-span-2 col-span-1"
            name="Docker"
            amount="60"
          />
        </SkillList>
      </div>
    </Layout>
  );
};

export default Skills;
