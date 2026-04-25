import React from "react";
import { motion } from "framer-motion";
import HeroLanyard from "../3d/HeroLanyard";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02040a] pt-16 pb-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_22%),linear-gradient(180deg,#07111b_0%,#030712_48%,#02040a_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.72),transparent_88%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Text Content */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
          {/* Animated Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="h-2 w-2 rounded-full bg-sky-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-medium text-slate-300">
              Available for projects
            </span>
          </motion.div>

          {/* Main Heading - Reduced Size */}
          <motion.div variants={itemVariants}>
            <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight md:text-6xl">
              <span className="block text-slate-100">
                Bambang
              </span>
              <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-slate-200 bg-clip-text text-transparent">
                Solehudin
              </span>
            </h1>
          </motion.div>

          {/* Subheading - Concise */}
          <motion.p
            className="mb-8 text-lg leading-relaxed text-slate-400 md:max-w-xl md:text-xl"
            variants={itemVariants}
          >
            Building polished, performant interfaces with modern JavaScript.
            3+ years shaping responsive products that feel fast, clear, and
            easy to use.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center md:items-start gap-3 mb-10"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="rounded-lg bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:shadow-lg hover:shadow-sky-500/10"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="rounded-lg border border-white/14 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:bg-white/6"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Tech Stack Pills - Smaller */}
          <motion.div
            className="flex flex-wrap md:justify-start justify-center gap-2 mb-12"
            variants={itemVariants}
          >
            {["React", "Next.js", "Vue.js", "TypeScript", "TailwindCSS"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  whileHover={{ scale: 1.05, y: -1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
          </motion.div>

          {/* Right Side - Lanyard Card */}
          <motion.div 
            className="flex items-center justify-center md:justify-end"
            variants={itemVariants}
          >
            <div className="w-full max-w-md md:max-w-xl">
              <HeroLanyard />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Full Width */}
        <motion.div
          className="flex justify-center pt-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/18 pt-1.5 transition-colors hover:border-sky-200/60"
          >
            <motion.div
              className="h-1.5 w-1 rounded-full bg-sky-200"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>

        {/* Stats Row - Balanced */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "10+", label: "Technologies" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="text-center">
              <motion.div
                className="text-2xl font-bold text-slate-100 md:text-3xl"
                whileInView={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <p className="mt-1 text-xs text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
