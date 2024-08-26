import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Statistics from "@/components/statistics.js";
import About from "@/components/about.js";
import Projects from "@/components/projects.js";
import Articles from "@/components/articles.js";
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
