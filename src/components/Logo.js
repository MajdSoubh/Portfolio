import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <MotionLink
        href="/"
        className="w-16 h-16 text-2xl sm:w-12 sm:h-12 sm:text-xl bg-dark text-light flex items-center justify-center rounded-full  font-bold border border-solid border-transparent  dark:border-light"
        whileHover={{
          //   scale: 1.5,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        MS
      </MotionLink>
    </div>
  );
};

export default Logo;
