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
        <span>Copyright &copy; {new Date().getFullYear()} Majd Soubh</span>
        <Link href="/">
          <div className="flex gap-4">
            <TelegramIcon className="!w-7 !stroke-dark dark:!stroke-light !fill-dark dark:!fill-light" />
            <LinkedInIcon className="!w-7 !stroke-dark dark:!stroke-light !fill-dark dark:!fill-light" />
            <FacebookIcon className="!w-7 !stroke-dark dark:!stroke-light !fill-dark dark:!fill-light" />
            <WhatsappIcon className="!w-7 !stroke-dark dark:!stroke-light !fill-dark dark:!fill-light" />
          </div>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
