import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid dark:border-light  dark:text-light  font-medium text-lg sm:text-base ">
      <Layout className="!py-10 sm:!py-2 lg:py-1 flex items-center justify-between lg:flex-col gap-2">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="/"> Majd Soubh</Link>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
