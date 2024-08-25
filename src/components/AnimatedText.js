import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial: {},
  animate: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={
        "w-full mx-auto py-2 flex items-center justify-center text-center dark:text-light sm:py-0"
      }
    >
      <motion.h1
        className={
          "inline-block w-full dark:text-light text-dark font-bold capitalize text-6xl " +
          className
        }
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
