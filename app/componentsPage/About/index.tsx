"use client";

import React from "react";
import aboutData from "./aboutData";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { techIcons } from "./aboutData";
import { slideInRight } from "@/app/utils/motionVariants";


// Images
import SplitText from "@/app/components/SplitText/SplitText";
import Journey from "../Journey";
import { FaArrowRight } from "react-icons/fa";
import MotionWrapper from "@/app/components/MotionWrapper";
import { useRouter } from "next/navigation";
import BlurText from "@/app/components/BlurText/BlurText";
import PixelTransition from "@/app/components/PixelTransition/PixelTransition";
import ProfileCard from "@/app/components/ProfileCard/ProfileCard";


// ----------- Types -----------
interface TechIcon {
  name: string;
  url: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface CertificationItem {
  title: string;
  institution: string;
  date: string;
  image: string;
  link: string;
}

interface DesignStep {
  title: string;
  description: string;
  icon: React.ComponentType;
}

const About = ({page}: {page:string}) => {
  const handleAnimationComplete = () => {};

  const router = useRouter();


  return (
    <>
     <div className="relative border-b pb-4  border-zinc-700 mb-6">
      {/* Background Ribbons */}
        <SplitText 
          text="About Me"
          className="md:text-3xl text-2xl font-semibold text-start text-gray-100 pb-6"
          delay={75}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      <div className="">
        {/* Title */}
        {/* <div className="grid grid-cols-12 gap-4"> */}
          {/* Mobile image */}
          {/* <div className="col-span-3 lg:hidden">
            <img
              src={MyPic as any}
              alt="Profile"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div> */}

        {/* Background */}

     
          <div className="pb-5 md:pt-5 flex gap-10 md:flex-row flex-col">
            <MotionWrapper
              variants={slideInRight}
              initial={page != "about" ? "hidden" : "initial"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1 * 0.1, duration: 0.6 }}
              className=""
            >
              <div className={`${page == 'about' ? 'md:px-4': 'px-0'}`}>

                
                <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-4">
                  <div className={`${page == 'about' ? 'block' : 'hidden'}`}>
                     <PixelTransition
                        firstContent={
                          <img
                            src="/assets/profile.jpg"
                            alt="default pixel transition content, a cat!"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        }
                        secondContent={
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "grid",
                              placeItems: "center",
                              backgroundColor: "#111"
                            }}
                          >
                            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>
                              Hello !
                            </p>
                          </div>
                        }
                        gridSize={12}
                        pixelColor='#ffffff'
                        once={false}
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                      />
                        {/* <ProfileCard
                          className="w-[1px] h-[1px]"
                          name="Bambang"
                          title="FE Developer"
                          handle="karirs.bambang@gmail.com"
                          status="Online"
                          contactText=""
                          avatarUrl="/assets/About/profileFoto.png"
                          showUserInfo={true}
                          enableTilt={true}
                          enableMobileTilt={true}
                          onContactClick={() => {
                            window.location.href = "mailto:karirs.bambang@gmail.com";
                          }}
                        /> */}
                  </div>

                  <div>
                    <BlurText 
                      text="Software Developer with a strong focus on frontend development, 
                      experienced in building responsive and high-performance web and mobile applications using Vue.js, Nuxt.js, React.js, and React Native. Proficient in developing scalable user interfaces and integrating RESTful APIs. Possesses basic backend knowledge with Express.js, 
                      Laravel, and SQL. Committed to continuous learning and creating user-focused digital solutions.
                      "
                      delay={10}
                      animateBy="words"
                      direction="top"
                      className="text-zinc-400 pb-5 md:text-lg text-base text-justify"
                    />
                    <div className="text-zinc-500 flex items-center gap-1 mb-5 text-xs lg:text-sm xl:text-base 2xl:text-lg">
                      <IoMdPin /> <BlurText text="Bogor, Indonesia" delay={10} animateBy="words" direction="top" className="text-zinc-500" />
                    </div>
                  </div>
                </div>
               


                {/* Skills */}
                <div className="py-6">
                  <span className="md:text-2xl text-xl flex gap-4 border-b border-zinc-700 text-gray-50 font-light mb-4 pb-2">
                    Skills
                  </span>

                  <div className="flex flex-wrap gap-3 md:px-6">
                    {Object.values(techIcons as Record<string, TechIcon>).map(
                      (tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 md:px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-md hover:scale-105 transition"
                        >
                          <img
                            src={tech.url}
                            alt={tech.name}
                            className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
                          />
                          <span className="text-xs lg:text-sm text-gray-300 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {
                  page !== "about" && 
                  <div className="flex justify-center">
                    <div 
                      onClick={() => router?.push('/about')}
                      className="text-zinc-400 mt-10 cursor-pointer flex items-center gap-1 mb-5 text-xs md:text-xl">
                      <span>Load More {'    '}</span> <FaArrowRight className="animate-moveRight" />
                    </div>
                  </div>
                }
                
                {
                  page === "about" && <>
                  
                    
                    {/* Certifications */}
                    <div className="py-6">
                      <h2 className="text-xl font- border-b border-zinc-700 text-gray-50 mb-4 pb-2 px-0">
                        Certifications
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 md:px-6 px-0">
                        {aboutData.certifications.content.map(
                          (item: any, idx: number) => (
                             <div key={idx}>
                             <MotionWrapper
                              variants={slideInRight}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ delay: idx * 0.15, duration: 0.6 }}
                              className="md:ml-5 ml-4"
                            >
                              <a
                                key={idx}
                                href={item.link}
                                target="_blank"
                                rel="nofollow noreferrer"
                                className="group hover:scale-102 transition cursor-pointer"
                              >
                                  <div className="bg-neutral-800 p-4 rounded-md border border-zinc-700 flex items-center gap-4">
                                    <img
                                      src={item.image}
                                      alt={`${item.title} logo`}
                                      className="w-10 h-10" />
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <h3 className="text-sm text-gray-50 lg:text-base font-semibold">
                                          {item.title}
                                        </h3>
                                        <IoIosArrowForward className="text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1 transition" />
                                      </div>
                                      <p className="text-xs lg:text-sm text-zinc-500">
                                        {item.institution} | {item.date}
                                      </p>
                                    </div>
                                  </div>
                                </a>


                            </MotionWrapper>
                            
                              </div>
                          )
                        )}
                      </div>
                    </div>
                  
                    <div className="py-6">
                       <h2 className="md:text-2xl text-xl font-light text-gray-50 border-b border-zinc-700 mb-4 pb-2 px-0">
                        Experience
                      </h2>
                      <Journey headerNo={true} />

                    </div>
                  </>
                }

              </div>
            </MotionWrapper>

           


            

          

            {/* <div className="hidden md:w-[50%] md:block relative">
              <ProfileCard
                name="Bambang Solehudin"
                title="Frontend Developer"
                handle="karirs.bambang@gmail.com"
                status="Online"
                contactText=""
                avatarUrl="/assets/About/profileFoto.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => {
                  window.location.href = "mailto:karirs.bambang@gmail.com";
                }}
              />
            </div> */}
          </div>
        

    

        

      </div>
    </>
  );
};

export default About;
