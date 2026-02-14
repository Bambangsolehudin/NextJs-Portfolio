"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

import AnimatedContent from '@/app/components/AnimatedContent/AnimatedContent'
import CircularText from '@/app/components/CircularText/CircularText'
import GradientText from '@/app/components/GradientText/GradientText'
import RotatingText from '@/app/components/RotatingText/RotatingText'
import SplitText from '@/app/components/SplitText/SplitText'
import SplashCursor from "@/app/components/SplashCursor/SplashCursor";
import Particles from "@/app/components/Particles/Particles";
import BlurText from "@/app/components/BlurText/BlurText";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import Galaxy from "@/app/components/Galaxy/Galaxy";

const Lanyard = dynamic(
  () => import('@/app/components/Lanyard/Lanyard'),
  { ssr: false }
);

const Squares = dynamic(
  () => import('@/app/components/Squares/Squares'),
  { ssr: false }
);

export default function Hero({scrollToContact}: any) {
  const position = useMemo(() => [0, 0, 12] as [number, number, number], []);
  const gravity = useMemo(() => [0, -40, 0] as [number, number, number], []);



  return (
    <div className="">
      {/* <SplashCursor  /> */}
      <div className="absolute top-0 bg-transparent right-0 left-0 bottom-0 w-full md:h-full h-[50vh]">
        {/* <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#F1FFB2'
          hoverFillColor='#C6F10E'
        /> */}

          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />

           {/* <Galaxy 
              mouseRepulsion
              mouseInteraction
              density={1}
              glowIntensity={0.3}
              saturation={0}
              hueShift={140}
              twinkleIntensity={0.3}
              rotationSpeed={0.1}
              repulsionStrength={2}
              autoCenterRepulsion={0}
              starSpeed={0.5}
              speed={1}
          /> */}
      </div>
      
      <div className="container mx-auto px-4 md:h-screen h-[50vh]">
        <div className="grid grid-cols-12 px-4">
          <div className="md:col-span-6 col-span-12">
             <div className="flex items-center h-full pt-4">
                <div className="flex flex-col md:gap-12 gap-12">
                  <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                  >
                    <div 
                    className="flex items-center  gap-2">
                      <h1 className="md:text-xl text-base text-white ">I'm Ready For <span className="text-yellow-600 font-bold">Job</span></h1>
                      {/* <RotatingText 
                          texts={['Frontend Development', 'Web Development', 'Software Development']}
                          mainClassName="px-2 sm:px-2 md:px-3 
                          bg-yellow-600 text-white overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg 
                          md:text-2xl text-sm font-bold inline-flex transition-all
                          "
                          staggerFrom={"last"}
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-120%" }}
                          staggerDuration={0.025}
                          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                          transition={{ type: "spring", damping: 30, stiffness: 400 }}
                          rotationInterval={2000}
                      /> */}
                    </div>
                  </AnimatedContent>
                  <div className="">
                    <SplitText 
                      text="I'm Bambang Solehudin"
                      className="md:text-6xl text-3xl font-semibold text-left text-white"
                      delay={50}
                      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      threshold={0.2}
                      rootMargin="-50px"
                    />
                    <div></div>
                    {/* <SplitText 
                      text="Frontend Developer"
                      className="md:text-4xl text-xl font-semibold text-start pt-4 text-white/70"
                      delay={75}
                      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      threshold={0.2}
                      rootMargin="-50px"
                    /> */}
                  </div>
                  {/* <BlurText 
                    text="Frontend-focused Software Developer with 4 years of experience building responsive, 
                      high-performance web and mobile apps using Vue.js, Nuxt.js, React.js, and React Native.
                      Skilled in scalable UI development and RESTful API integration, with basic backend knowledge. Dedicated to continuous learning and user-centered solutions.
                    "
                    delay={75}
                    animateBy="words"
                    direction="top"
                    className="md:text-xl text-base mb-8 text-white/70"
                  /> */}

                   <BlurText 
                    text="Frontend-focused Software Developer with 4 years of experience building responsive, 
                      high-performance web and mobile apps using Vue.js, Nuxt.js, React.js, and React Native.
                      Skilled in scalable UI development and RESTful API integration, with basic backend knowledge. Dedicated to continuous learning and user-centered solutions.
                    "
                    delay={75}
                    animateBy="words"
                    direction="top"
                    className="text-xs md:text-sm   text-white/70"
                  />
                  <span 
                    onClick={scrollToContact}
                    className="flex  items-center cursor-pointer text-yellow-500 underline underline-offset-4" //py-4 px-8 rounded-full border border-yellow-600 md:w-fit
                  >
                    <GradientText
                      colors={["#EAB308"]}
                      animationSpeed={3}
                      showBorder={false}
                      className=""
                    >
                      Let's Connect
                    </GradientText>
                     <FaArrowRight className="ml-4 animate-moveRight " />
                  </span>
                </div>
              </div>
          </div>

          <div className="md:col-span-6 hidden md:block relative">
            <Lanyard position={position} gravity={gravity} />
            {/* <CircularText
              text="Ready*For*Job*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-60 right-28"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
