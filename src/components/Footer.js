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
    <footer className="w-full border-t-2 border-solid border-primary dark:border-primary  dark:text-light  font-medium text-lg sm:text-base ">
      <Layout className="!py-10 md:!py-6  flex items-center justify-between lg:flex-col gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="/"> Majd Soubh</Link>
        <Link href="/">
          <div className="flex gap-4">
            <TelegramIcon className={"!w-8"} />
            <LinkedInIcon className={"!w-8"} />
            <FacebookIcon className={"!w-8"} />
            <WhatsappIcon className={"!w-8"} />
          </div>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
