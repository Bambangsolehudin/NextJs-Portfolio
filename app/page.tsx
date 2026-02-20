"use client";
// app/page.tsx

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



import { useRef, useCallback } from "react"; // Tambahkan ini
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import dynamic from "next/dynamic";


const Services = dynamic(() => import('./componentsPage/Services/Services'), {
  ssr: false,
})
const About = dynamic(() => import('./componentsPage/About'), {
  ssr: false,
})
const Projects = dynamic(() => import('./componentsPage/Projects'), {
  ssr: false,
})
const Hero = dynamic(() => import('./componentsPage/Hero'), {
  ssr: false,
})
const Contact = dynamic(() => import('./componentsPage/Contact'), {
  ssr: false,
})


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
    <div className="">
      <div className="md:px-28">
        <Hero scrollToContact={scrollToContact} />
      </div>

      {/* <ScrollVelocity 
          className="text-clip"
          texts={[ 'JavaScript' ]} 
        /> */}


      <section className="About md:px-28 bg-gray-800 relative w-full">
        <div className="container mx-auto px-4 py-10 md:py-20 md:pt-40 md:pb-60">
          <About page="home" />
        </div>
      </section>

      <div className="mx-auto min-h-screen">
        <section className="md:px-28 md:pb-40 services mt-20 md:-mt-36 ">
          <Services />
        </section>

        <section className="project mt-10 bg-gray-800 md:px-28 px-2">
          <Projects page="home" limit={4} />
        </section>

        <section className="contact md:px-28 px-2 mt-10" ref={contactRef}>
          <Contact />
        </section>


      </div>

    </div>
  );
}
