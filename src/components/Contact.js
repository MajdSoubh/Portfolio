import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wed72jh",
        "template_oqgwup6",
        form.current,
        "BGAn9WBywi6SJ1OyA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      <AnimatedText
        className="mb-10 2xl:!text-6xl lg:!text-5xl  xs:!text-3xl"
        text="Contact Me"
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto w-[70%] lg:w-full"
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <CustomInput label="Name" name="from_name" type="text" />
          <CustomInput label="Email" name="from_email" type="email" />
          <CustomInput label="Message" name="message" type="textarea" />
          <div className="self-end">
            <button className="px-10 py-1.5 rounded uppercase font-semibold  text-lg xs:text-md hover:shadow hover:shadow-primary hover:bg-primary/85 dark:hover:bg-primaryDark/85 dark:hover:shadow-primaryDark text-light dark:text-dark cursor-pointer bg-primary dark:bg-primaryDark transition-all">
              Send
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default ContactUs;
