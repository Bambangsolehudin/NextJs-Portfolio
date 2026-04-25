import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { journeyData } from "@/utils/constants";

export default function Journey() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-gradient-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/5 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="My Journey"
          subtitle="Professional experience and career milestones"
        />

        {/* Timeline */}
        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {journeyData[0].events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 pb-10 md:pb-12 last:pb-0 group"
            >
              {/* Timeline Line */}
              {index !== journeyData[0].events.length - 1 && (
                <motion.div
                  className="absolute bottom-0 left-3 top-12 w-0.5 bg-gradient-to-b from-teal-300 to-sky-500 dark:from-teal-500 dark:to-sky-700 md:left-5"
                  initial={{ height: 0 }}
                  whileInView={{ height: "calc(100% - 3rem)" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              )}

              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-teal-600 bg-white shadow-lg dark:border-teal-400 dark:bg-zinc-800 md:h-10 md:w-10"
                whileHover={{ scale: 1.18, boxShadow: "0 0 20px rgba(13, 148, 136, 0.28)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-3 w-3 rounded-full bg-teal-600 md:h-4 md:w-4" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="rounded-xl border border-zinc-200 bg-white/82 p-6 backdrop-blur-sm transition-colors hover:border-teal-300 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-teal-500 md:p-7 group-hover:shadow-lg"
                whileHover={{ y: -5, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Month/Date */}
                <motion.p
                  className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-700 dark:text-teal-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {event.month}
                </motion.p>

                {/* Title (Role + Company) */}
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {event.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {event.description}
                </motion.p>

                {/* Accent Line */}
                <motion.div
                className="absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r from-teal-600 to-sky-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "0" }}
                  whileHover={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 rounded-xl border border-teal-100 bg-gradient-to-r from-teal-50 to-sky-100/50 p-8 text-center dark:border-teal-900/60 dark:from-teal-900/20 dark:to-sky-900/10 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
            Always open to exciting opportunities and collaborations
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg bg-teal-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-teal-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
