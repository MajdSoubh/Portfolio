import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const media = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setMode("dark");
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
        setMode("light");
      }
    } else {
      const mediaTheme = media ? "dark" : "light";

      if (mediaTheme === "dark") document.documentElement.classList.add("dark");
      setMode(mediaTheme);
    }
  }, []);

  useEffect(() => {
    if (mode == "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwitcher;
