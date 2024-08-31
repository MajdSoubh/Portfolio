import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ left = 0, top = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <figure
      ref={ref}
      className={`absolute  stroke-dark dark:stroke-light`}
      style={{ left: left, top: top }}
    >
      <svg
        className=" -rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="77"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="77"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
        />
        <circle
          cx="77"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 fill-primary dark:fill-primaryDark "
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
