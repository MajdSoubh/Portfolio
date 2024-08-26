import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Statistics from "./statistics.js";
import About from "./about";
import Projects from "./projects.js";
import Articles from "./articles.js";
import ContactUs from "@/components/Contact.js";

export default function Home() {
  return (
    <div className="">
      <About />
      <Statistics />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Articles />
      <ContactUs />

      {/* <HireMe /> */}
    </div>
  );
}
