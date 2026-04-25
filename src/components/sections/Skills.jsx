import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { PORTFOLIO_DATA } from "@/utils/constants";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = [
    { id: "frontend", label: "Frontend", skills: PORTFOLIO_DATA.skills.frontend },
    { id: "backend", label: "Backend", skills: PORTFOLIO_DATA.skills.backend },
    { id: "tools", label: "Tools", skills: PORTFOLIO_DATA.skills.tools },
    { id: "other", label: "Other", skills: PORTFOLIO_DATA.skills.other },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 bg-gradient-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies I work with and core competencies"
        />

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 my-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                "px-6 py-3 rounded-lg font-medium transition-all",
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          key={activeCategory}
        >
          {skillCategories
            .find((cat) => cat.id === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="relative group"
              >
                <motion.div
                  className="h-full p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20 flex items-center justify-center text-center cursor-pointer group hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#3B82F6",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white text-sm md:text-base">
                      {skill}
                    </p>
                  </div>
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 -z-10 blur"
                  animate={{
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              </motion.div>
            ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Web Development", level: 95 },
            { label: "UI/UX Design", level: 85 },
            { label: "Performance Optimization", level: 90 },
            { label: "Team Leadership", level: 88 },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-zinc-900 dark:text-white">
                  {skill.label}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Missing clsx import
import clsx from "clsx";
