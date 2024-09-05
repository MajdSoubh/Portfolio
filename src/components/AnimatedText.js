import { motion } from "framer-motion";
import React from "react";

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animation: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const AnimatedText = ({
  text,
  extra = null,
  className = "",
  titleClassName = "",
  extraClassName,
}) => {
  return (
    <motion.div
      className={
        "w-full mx-auto py-2 flex flex-col items-center justify-center text-center  dark:text-light sm:py-0 mb-16  " +
        className
      }
    >
      <motion.h1
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        }}
        viewport={{ once: true }}
        className={
          "inline-block w-full dark:text-light text-dark/85 font-bold capitalize !text-5xl lg:!text-4xl  xs:!text-3xl " +
          titleClassName
        }
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
      {extra && (
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
          className={
            "font-semibold text-primary text-base mt-2 dark:text-primaryDark " +
            extraClassName
          }
        >
          {extra}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedText;
