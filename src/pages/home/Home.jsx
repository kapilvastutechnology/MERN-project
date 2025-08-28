// import Footer from "../../components/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Detail from "../details/Detail";
import Menu from "../menu/Menu";
import DisplaySection from "./DisplaySection";
export default function Home() {
  return (
   <div>
    <DisplaySection/>
    <About/>
    <Menu/>
    <Contact/>
    {/* <Footer/> */}
   </div>
  )
}
