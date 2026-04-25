import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  eyebrow = "Overview",
}) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={`mb-10 md:mb-12 ${centered ? "text-center" : ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.p
        className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700/80 dark:text-teal-300/80`}
        variants={itemVariants}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mb-3 text-[2rem] font-bold tracking-tight text-slate-900 dark:text-white md:text-[2.45rem]"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className={`h-1 rounded-full mt-5 bg-gradient-to-r from-teal-600 via-sky-500 to-amber-400 ${
          centered ? "mx-auto" : ""
        }`}
        style={{ width: "80px" }}
        variants={itemVariants}
      />
    </motion.div>
  );
}
