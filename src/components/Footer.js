import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import {
  FacebookIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsappIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-white  dark:text-light  font-medium text-lg sm:text-base ">
      <Layout className="!py-10 md:!py-6  flex items-center justify-between lg:flex-col gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="/"> Majd Soubh</Link>
        <Link href="/">
          <div className="flex gap-4">
            <TelegramIcon className="w-[1.6rem] !stroke-light !fill-light" />
            <LinkedInIcon className="w-[1.6rem] !stroke-light !fill-light" />
            <FacebookIcon className="w-[1.6rem] !stroke-light !fill-light" />
            <WhatsappIcon className="w-[1.6rem] !stroke-light !fill-light" />
          </div>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
