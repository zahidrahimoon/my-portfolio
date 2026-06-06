import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { WhyItWorks } from "./components/sections/WhyItWorks";
import { Problem } from "./components/sections/Problem";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Gallery } from "./components/sections/Gallery";
import { WhatWeRun } from "./components/sections/WhatWeRun";
import { Testimonials } from "./components/sections/Testimonials";
import { Network } from "./components/sections/Network";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyItWorks />
        <Problem />
        <HowItWorks />
        <Gallery />
        <WhatWeRun />
        <Testimonials />
        <Network />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
