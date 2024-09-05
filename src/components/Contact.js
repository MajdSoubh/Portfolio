import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import { LocationIcon, MailIcon, PhoneIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomInput = ({ name, label, type = "text" }) => (
  <div className="w-full flex  justify-center items-center">
    <label className="w-[30%] capitalize font-medium text-lg xs:text-md">
      {label}
    </label>
    {(type === "text" || type === "email") && (
      <input
        className="block w-[70%] py-2 dark:bg-dark rounded border border-primary focus:shadow-primary dark:focus:shadow-primaryDark focus:shadow  dark:border-primaryDark pl-4 focus:outline-none transition-all"
        type={type}
        name={name}
      />
    )}
    {type === "textarea" && (
      <textarea
        className="block w-[70%] py-2 dark:bg-dark rounded border border-primary focus:shadow-primary focus:shadow dark:focus:shadow-primaryDark dark:border-primaryDark pl-4 focus:outline-none transition-all"
        rows="3"
        name={name}
      />
    )}
  </div>
);

const ContactUs = () => {
  return (
    <Layout className="sm:px-8">
      <AnimatedText
        className="mb-10 !text-5xl lg:!text-4xl  xs:!text-3xl"
        text="Contact Me"
        extra="Get in Touch"
      />

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
        className="w-full mx-auto justify-between items-center gap-8 flex md:items-start md:flex-col "
      >
        {/* Phone */}
        <div className="flex items-center justify-center gap-6">
          {/* Icon */}
          <div>
            <PhoneIcon
              className={"!w-10 fill-gray-700 dark:fill-primaryDark"}
            />
          </div>
          {/* Info */}
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Call Me</p>
            <span className="block">+963987518954</span>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-center justify-center gap-6">
          {/* Icon */}
          <div>
            <MailIcon className={"!w-10 fill-gray-700 dark:fill-primaryDark"} />
          </div>
          {/* Info */}
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Email Me</p>
            <span className="block">majd-52@hotmail.com</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-6">
          {/* Icon */}
          <div>
            <LocationIcon
              className={"!w-10 fill-gray-700 dark:fill-primaryDark"}
            />
          </div>
          {/* Info */}
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Location</p>
            <span className="block">Syria, Tartous</span>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};
export default ContactUs;
