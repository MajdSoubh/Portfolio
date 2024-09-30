import React from "react";

const Layout = ({ children, className = "", id = "" }) => {
  return (
    <div
      id={id}
      className={
        "w-full h-full inline-block z-0  dark:text-light p-20  lg:p-16 md:p-12 sm:py-12 sm:px-4 " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Layout;
