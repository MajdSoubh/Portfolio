import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  Medium,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={className + " relative group"}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-200",
          ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const handleClick = () => {
    toggle();
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={className + " relative group text-light dark:text-dark my-2"}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-200`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-light dark:bg-dark dark:text-light w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" flex-col items-center justify-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-100 ease-out  block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-100 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : " opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-100 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      {/* Menu */}
      <div className="w-full flex justify-between items-center lg:hidden">
        {/* Sections */}
        <nav>
          <CustomLink href="#about" title="About" className="mr-4" />

          <CustomLink href="#statistics" title="Statistics" className="mr-4" />

          <CustomLink href="#projects" title="Projects" className="mr-4" />

          <CustomLink href="#articles" title="Articles" className="mr-4" />
        </nav>
        {/* Social */}
        <nav className="flex items-center justify-center gap-2">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/MajdSoubh"
            target={"_blank"}
            className="w-6 mr-2 "
          >
            <GithubIcon className="w-[1.6rem]" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/majd-soubh/"
            target={"_blank"}
            className="w-6 mr-2"
          >
            <LinkedInIcon className="w-[1.6rem]" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://medium.com/@majdsoubh"
            target={"_blank"}
            className="w-6 mr-2"
          >
            <Medium className="w-[1.6rem]" />
          </motion.a>

          {/* Theme */}
          <button
            className={
              "ml-3 rounded-full flex items-center justify-center bg-dark p-1 text-light dark:bg-light dark:text-dark"
            }
            onClick={() => {
              mode == "dark" ? setMode("light") : setMode("dark");
            }}
          >
            {mode == "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[60vw] sm:w-full flex flex-col justify-between items-center gap-16 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-sm dark:backdrop-blur-md  py-16"
        >
          {/* Sections */}
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="#about"
              title="About"
              toggle={() => setIsOpen(!isOpen)}
            />

            <CustomMobileLink
              href="#statistics"
              title="Statistics"
              toggle={() => setIsOpen(!isOpen)}
            />

            <CustomMobileLink
              href="#projects"
              title="Projects"
              toggle={() => setIsOpen(!isOpen)}
            />

            <CustomMobileLink
              href="#articles"
              title="Articles"
              toggle={() => setIsOpen(!isOpen)}
            />
          </nav>
          {/* Social */}
          <nav className="flex items-center justify-center gap-2 mt-2">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/MajdSoubh"
              target={"_blank"}
              className="w-6 mr-2 "
            >
              <GithubIcon className="w-[1.6rem]" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/majd-soubh/"
              target={"_blank"}
              className="w-6 mr-2"
            >
              <LinkedInIcon className="w-[1.6rem]" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://medium.com/@majdsoubh"
              target={"_blank"}
              className="w-6 mr-2"
            >
              <Medium className="w-[1.6rem]" />
            </motion.a>
            {/* Theme */}
            <button
              className={
                "ml-3 rounded-full flex items-center justify-center  p-1 bg-light text-dark dark:bg-dark dark:text-light"
              }
              onClick={() => {
                mode == "dark" ? setMode("light") : setMode("dark");
              }}
            >
              {mode == "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      {/* Logo  */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
