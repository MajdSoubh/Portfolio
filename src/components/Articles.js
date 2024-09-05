import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Article = ({ title, link, date }) => {
  return (
    <motion.li
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative transition-all w-full text-dark p-4 py-6 my-4 rounded-xl flex items-center justify-between gap-2   first:mt-0  border-2  border-primary dark:!text-white dark:bg-dark bg-gray-100 cursor-pointer hover:shadow hover:shadow-primary hover:bg-white   sm:flex-col "
    >
      <Link href={link} target="_blank">
        <h2 className=" capitalize font-semibold hover:underline text-xl xs:text-lg">
          {title}
        </h2>
      </Link>
      <span className="font-semibold pl-4  sm:self-start sm:pl-0  xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ title, summary, img, link, time }) => {
  return (
    <li className=" relative col-span-1 w-full  rounded-xl  border border-solid  bg-light dark:bg-dark p-8">
      {/* Image */}
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <MotionImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className=" capitalize text-2xl font-bold my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Articles = () => {
  return (
    <Layout id="articles">
      {/* Featured Articles */}
      {/* Articles */}
      <AnimatedText
        className="mb-10 !text-5xl lg:!text-4xl  xs:!text-3xl"
        text="Articles"
        extra="My Published Articles"
      />

      <ul>
        <Article
          title="Implementing PHP Routing with Dynamic Parameters"
          date="2024-08-21"
          link="https://medium.com/@majdsoubh/implementing-php-routing-with-dynamic-parameters-18940bd80795"
        />
      </ul>
    </Layout>
  );
};

export default Articles;
