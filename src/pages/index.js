import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Statistics from "@/components/Statistics.js";
import About from "@/components/About.js";
import Projects from "@/components/Projects.js";
import Articles from "@/components/Articles.js";
import ContactUs from "@/components/Contact.js";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <About />
      <Statistics />
      <Qualification />
      <Skills />
      <Projects />
      <Articles />
      <ContactUs />
      <Footer />

      {/* <HireMe /> */}
    </div>
  );
}
