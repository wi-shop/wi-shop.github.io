import Hero from "./components/Home/Hero";
import Stats from "./components/Home/Stats";
import Contact from "./components/Home/Contact";
import About from "./components/Home/About";
import { Services } from "./components/Home/Services";
import { TimelineDemo } from "./components/Home/Demo";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <TimelineDemo/>
      <Contact/>
    </div>
  );
}
