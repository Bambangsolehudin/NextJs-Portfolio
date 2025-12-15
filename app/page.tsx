// app/page.tsx
"use client";

// import Image from "next/image";
// import Lanyard from "./components/Lanyard/Lanyard";
// import RotatingText from "./components/RotatingText/RotatingText";
// import SplitText from "./components/SplitText/SplitText";
// import BlurText from "./components/BlurText/BlurText";
// import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
// import Squares from "./components/Squares/Squares";
// import SplashCursor from "./components/SplashCursor/SplashCursor";
// import GradientText from "./components/GradientText/GradientText";
// import CircularText from "./components/CircularText/CircularText";
// import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
// import Journey from "./componentsPage/Journey";
// import Ribbons from './components/Ribbons/Ribbons';
// import Navbar from "./componentsPage/Navbar";


import Services from "./componentsPage/Services/Services";
import About from "./componentsPage/About";
import Projects from "./componentsPage/Projects";
import Hero from "./componentsPage/Hero";
import Contact from "./componentsPage/Contact";

import { useRef, useCallback } from "react"; // Tambahkan ini
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";


export default function Home() {
  const contactRef = useRef<HTMLElement>(null); // Definisikan ref

  const scrollToContact = useCallback(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth", // Ini yang membuat scroll mulus
        block: "start",
      });
    }
  }, []);

  return (
    <>
      
        <Hero scrollToContact={scrollToContact} />

      

        <button>Contact</button>


        {/* <ScrollVelocity 
          texts={[ 'JavaScript' ]} 
        /> */}


        <div className="container md:px-10 px-4 mx-auto min-h-screen">
          {/* Services */}

          <section className="About mt-10">
            <About page="home" />
          </section>

          <section className="services mt-10">
            <Services />
          </section>

          <section className="project mt-10">
            <Projects page="home" limit={4} />
          </section>

          <section className="contact mt-10" ref={contactRef}>
            <Contact  />
          </section>




        </div>
     
    </>
  );
}
