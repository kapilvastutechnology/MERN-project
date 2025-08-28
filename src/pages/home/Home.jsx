import AboutSection from "../about/AboutSection.jsx";
import Contact from "../contact/Contact.jsx";
import DisplaySection from "./DisplaySection.jsx";
import Projects from "./Projects.jsx";

export default function Home() {


  return (
    <div>

      <DisplaySection />
      <Projects />
      <AboutSection />
      <Contact/>
    </div>
  )
}