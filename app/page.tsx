import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { WhyItWorks } from "./components/sections/WhyItWorks";
import { Problem } from "./components/sections/Problem";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Gallery } from "./components/sections/Gallery";
import { Process } from "./components/sections/Process";
import { Projects } from "./components/sections/Projects";
import { Achievements } from "./components/sections/Achievements";
import { Network } from "./components/sections/Network";
import { Education } from "./components/sections/Education";
import { About } from "./components/sections/About";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyItWorks />
        <About />
        <Problem />
        <HowItWorks />
        <Education />
        <Projects />
        <Achievements />
        <Gallery />
        <Process />
        <Network />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
