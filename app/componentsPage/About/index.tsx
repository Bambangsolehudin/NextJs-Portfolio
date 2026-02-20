"use client";

import React from "react";
import aboutData from "./aboutData";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { techIcons } from "./aboutData";
import { slideInRight } from "@/app/utils/motionVariants";

import SplitText from "@/app/components/SplitText/SplitText";
import Journey from "../Journey";
import { FaArrowRight } from "react-icons/fa";
import MotionWrapper from "@/app/components/MotionWrapper";
import { useRouter } from "next/navigation";
import BlurText from "@/app/components/BlurText/BlurText";
import PixelTransition from "@/app/components/PixelTransition/PixelTransition";

interface TechIcon {
  name: string;
  url: string;
}

const About = ({ page }: { page: string }) => {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* ================= HEADER ================= */}
      <div className="relative pb-6 mb-10">
        <SplitText
          text="About"
          className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight border-b border-zinc-700 pb-3"
          delay={10}
          animationFrom={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      <div className="pb-10 md:pt-6 flex gap-12 md:flex-row flex-col">
        <MotionWrapper
          variants={slideInRight}
          initial={page !== "about" ? "hidden" : "initial"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className={`${page === "about" ? "md:px-6" : "px-0"}`}>
            <div
              className={`flex ${page === "about" ? "md:flex-col" : "md:flex-row"
                } flex-col justify-center items-start md:gap-12 gap-8`}
            >
              {/* ================= PROFILE SECTION ================= */}
              <div className="flex md:flex-row flex-col gap-8 items-start">
                {page === "about" && (
                  <div className="w-56 h-56 rounded-xl overflow-hidden border border-zinc-700 shadow-lg">
                    <PixelTransition
                      firstContent={
                        <img
                          src="/assets/profile.jpg"
                          alt="Profile"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      }
                      secondContent={
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111",
                          }}
                        >
                          <p className="text-white text-xl font-semibold">
                            Hello 👋
                          </p>
                        </div>
                      }
                      gridSize={12}
                      pixelColor="#ffffff"
                      once={false}
                      animationStepDuration={0.4}
                    />
                  </div>
                )}

                <div className="max-w-2xl">
                  <BlurText
                    text="Software Developer"
                    delay={2}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-2xl font-semibold text-zinc-100 mb-4"
                  />

                  <BlurText
                    text="With a strong focus on frontend development, experienced in building responsive and high-performance web and mobile applications using Vue.js, Nuxt.js, React.js, and React Native. Proficient in developing scalable user interfaces and integrating RESTful APIs. Possesses basic backend knowledge with Express.js, Laravel, and SQL. Committed to continuous learning and creating user-focused digital solutions."
                    delay={2}
                    animateBy="words"
                    direction="top"
                    className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6"
                  />

                  <div className="flex items-center gap-2 text-amber-400 text-xs md:text-sm">
                    <IoMdPin />
                    <BlurText
                      text="Bogor, Indonesia"
                      delay={5}
                      animateBy="words"
                      direction="top"
                      className="text-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* ================= SKILLS ================= */}
              <div>
                <h2 className="text-base md:text-lg font-medium text-zinc-100 border-b border-zinc-700 pb-3 mb-6">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-3 p-5 border border-zinc-700 rounded-xl bg-zinc-900">
                  {Object.values(techIcons as Record<string, TechIcon>).map(
                    (tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-amber-400 transition-all duration-300"
                      >
                        <img
                          src={tech.url}
                          alt={tech.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-xs md:text-sm text-zinc-300 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* ================= LOAD MORE ================= */}
            {page !== "about" && (
              <div className="flex items-center justify-center mt-16">
                <div
                  onClick={() => router.push("/about")}
                  className="flex items-center gap-2 text-amber-400 text-sm md:text-base font-medium cursor-pointer hover:opacity-80 transition"
                >
                  <span>Load More</span>
                  <FaArrowRight />
                </div>
              </div>
            )}

            {/* ================= FULL ABOUT PAGE ================= */}
            {page === "about" && (
              <>
                {/* CERTIFICATIONS */}
                <div className="py-12">
                  <h2 className="text-base md:text-lg font-medium text-zinc-100 border-b border-zinc-700 pb-3 mb-6">
                    Certifications
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {aboutData.certifications.content.map(
                      (item: any, idx: number) => (
                        <MotionWrapper
                          key={idx}
                          variants={slideInRight}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: idx * 0.15, duration: 0.6 }}
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            rel="nofollow noreferrer"
                            className="block bg-zinc-900 p-5 rounded-xl border border-zinc-700 hover:border-amber-400 transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={item.image}
                                alt={`${item.title} logo`}
                                className="w-10 h-10"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-sm md:text-base font-semibold text-zinc-100">
                                    {item.title}
                                  </h3>
                                  <IoIosArrowForward className="text-zinc-500 group-hover:text-amber-400 transition" />
                                </div>
                                <p className="text-xs md:text-sm text-zinc-500 mt-1">
                                  {item.institution} | {item.date}
                                </p>
                              </div>
                            </div>
                          </a>
                        </MotionWrapper>
                      )
                    )}
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div className="py-12">
                  <h2 className="text-base md:text-lg font-medium text-zinc-100 border-b border-zinc-700 pb-3 mb-6">
                    Experience
                  </h2>
                  <Journey headerNo={true} />
                </div>
              </>
            )}
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default About;