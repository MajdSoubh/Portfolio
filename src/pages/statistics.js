import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

// Numbers
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Stats = () => {
  return (
    <Layout id="statistics" className="!py-8 md:!py-0">
      <AnimatedText
        text="Keep coding, Keep growing"
        className="mb-10 2xl:!text-6xl lg:!text-5xl  xs:!text-3xl"
      />
      <div className="w-full ">
        {/* Stats */}
        <div className=" flex  justify-between  flex-row items-center ">
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold xl:self-center md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={400} />+
            </span>
            <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              coding challenges
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:self-center">
              <AnimatedNumbers value={7} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              Projects Completed
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:self-center">
              <AnimatedNumbers value={2} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              Years of experience
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stats;
