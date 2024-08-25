import React from "react";

const Layout = ({ children, className = "", id = "" }) => {
  return (
    <div
      id={id}
      className={
        "w-full h-full inline-block z-0 bg-light dark:bg-dark dark:text-light p-32 xl:p-24 lg:p-16 md:p-12 sm:py-12 sm:px-4 " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Layout;
