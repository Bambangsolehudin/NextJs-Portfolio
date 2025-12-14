// // app/page.tsx
// "use client";

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
// import Services from "./componentsPage/Services/Services";
// import Journey from "./componentsPage/Journey";
// import About from "./componentsPage/About";

// import Ribbons from './components/Ribbons/Ribbons';
// import Projects from "./componentsPage/Projects";
// import Navbar from "./componentsPage/Navbar";


// export default function Home() {
//   return (
//     <>
//       <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
//         <Navbar />
//         {/* <SplashCursor  /> */}
//         <div className="absolute top-0 right-0 left-0 bottom-0 w-full md:h-full h-[42vh]">
//           {/* <Squares 
//             speed={0.5} 
//             squareSize={40}
//             direction='diagonal' // up, down, left, right, diagonal
//             borderColor='#F1FFB2'
//             hoverFillColor='#C6F10E'
//           /> */}
//         </div>
//         <div className="container mx-auto px-4 md:h-screen h-[42vh]">
//           <div className="grid grid-cols-12 px-4">
//             <div className="md:col-span-6 col-span-12 ">
//               <div className="flex items-center h-full pt-4">
//                 <div className="flex flex-col md:gap-6 gap-12">
//                   <AnimatedContent
//                     distance={150}
//                     direction="horizontal"
//                     reverse={false}
//                     config={{ tension: 80, friction: 20 }}
//                     initialOpacity={0.2}
//                     animateOpacity
//                     scale={1.1}
//                     threshold={0.2}
//                   >
//                     <div 
//                     className="flex items-center  gap-2">
//                       <h1 className="md:text-2xl text-base text-white font-bold">I'm Ready For Job</h1>
//                       <RotatingText 
//                           texts={['Frontend Developer', 'Web Development', 'Web Programing']}
//                           mainClassName="px-2 sm:px-2 md:px-3 
//                           bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg 
//                           md:text-2xl text-sm font-bold inline-flex transition-all
//                           "
//                           staggerFrom={"last"}
//                           initial={{ y: "100%" }}
//                           animate={{ y: 0 }}
//                           exit={{ y: "-120%" }}
//                           staggerDuration={0.025}
//                           splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//                           transition={{ type: "spring", damping: 30, stiffness: 400 }}
//                           rotationInterval={2000}
//                       />
//                     </div>
//                   </AnimatedContent>
//                   <div className="">
//                     <SplitText 
//                       text="I'm Bambang Solehudin"
//                       className="md:text-6xl text-3xl font-semibold text-left text-white"
//                       delay={50}
//                       animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
//                       animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
//                       threshold={0.2}
//                       rootMargin="-50px"
//                     />
//                     <div></div>
//                     <SplitText 
//                       text="Frontend Developer"
//                       className="md:text-4xl text-xl font-semibold text-start pt-4 text-[#C6F10E]"
//                       delay={75}
//                       animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
//                       animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
//                       threshold={0.2}
//                       rootMargin="-50px"
//                     />
//                   </div>
//                   {/* <BlurText 
//                     text="Frontend-focused Software Developer with 4 years of experience building responsive, 
//                       high-performance web and mobile apps using Vue.js, Nuxt.js, React.js, and React Native.
//                       Skilled in scalable UI development and RESTful API integration, with basic backend knowledge. Dedicated to continuous learning and user-centered solutions.
//                     "
//                     delay={75}
//                     animateBy="words"
//                     direction="top"
//                     className="md:text-xl text-base mb-8 text-white/70"
//                   /> */}
//                   <div className="flex items-center">
//                     <GradientText
//                       colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
//                       animationSpeed={3}
//                       showBorder={false}
//                       className="md:px-8 md:py-6 px-4 py-2 rounded-lg border"
//                     >
//                       Download CV
//                     </GradientText>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="md:col-span-6 hidden md:block col-span-12  relative">
//               <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
//               <CircularText
//                 text="Ready*For*Job*"
//                 onHover="speedUp"
//                 spinDuration={20}
//                 className="absolute top-60 right-28"
//               />
//             </div>
//           </div>
//         </div>


//         {/* <ScrollVelocity 
//           texts={[ 'JavaScript' ]} 
//         /> */}


//         <div className="container md:px-10 px-4 mx-auto min-h-screen">
//           {/* Services */}

//           <section className="About mt-10">
//             <About />
//           </section>

//           <section className="services mt-10">
//             <Services />
//           </section>

//           <section className="journey mt-10">
//             <Journey />
//           </section>

//           <section className="project mt-10">
//             <Projects />
//           </section>




//         </div>
//       </div>
//     </>
//   );
// }
