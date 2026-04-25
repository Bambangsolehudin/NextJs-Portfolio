import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { PORTFOLIO_DATA } from "@/utils/constants";
import Lanyard from "../3d/Lanyard";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="About Me"
          subtitle="My journey and approach to building digital products"
        />

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side - Story & Highlight */}
          <motion.div className="space-y-8 flex flex-col justify-center" variants={itemVariants}>
            <div className="space-y-4">
              {PORTFOLIO_DATA.aboutSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <motion.div
              className="p-5 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/40 dark:to-slate-950/30 border border-slate-200 dark:border-slate-800/50"
              variants={itemVariants}
            >
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                💡 <span className="font-semibold">What I Focus On:</span> Clean code, performance optimization, responsive design, and building features that users actually enjoy.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Lanyard Card */}
          <motion.div className="flex items-center justify-center md:justify-end" variants={itemVariants}>
            <div className="w-full max-w-xs">
              <Lanyard type="svg" showStats={false} />
            </div>
          </motion.div>
        </motion.div>

       

        {/* Stats Section - Compact */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14 pt-10 border-t border-slate-200 dark:border-slate-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "20+" },
            { label: "Technologies", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-1"
                whileInView={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.p>
              <p className="text-slate-600 dark:text-slate-400 text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
