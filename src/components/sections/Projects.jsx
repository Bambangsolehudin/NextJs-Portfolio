import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/utils/constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  // Sort projects by id in descending order (most recent first)
  const sortedProjects = useMemo(
    () =>
      [...projectsData].map((project, index) => ({
        ...project,
        color: [
          "#64748b",
          "#475569",
          "#334155",
          "#0f172a",
          "#1e293b",
          "#546e7a",
          "#37474f",
        ][index % 7],
      })),
    []
  );

  useEffect(() => {
    if (!selectedProject) return undefined;

    const originalOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setActiveImage(project.image || project.gallery?.[0] || null);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setActiveImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-gradient-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of work I've built with modern technologies"
        />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onShowDetails={openProjectDetails}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projects Delivered", value: sortedProjects.length },
            { label: "Years Experience", value: "8+" },
            { label: "Technologies", value: "20+" },
            { label: "Happy Clients", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label="Close project details"
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={closeProjectDetails}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700 md:px-6">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {selectedProject.category}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-100 md:text-2xl">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeProjectDetails}
                  className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                  x
                </button>
              </div>

              <div className="max-h-[calc(90vh-73px)] overflow-y-auto">
                <div className="grid gap-0 lg:grid-cols-[1.2fr,0.8fr]">
                  <div className="border-b border-slate-200 dark:border-slate-700 lg:border-b-0 lg:border-r">
                    <div className="px-4 pt-4 md:px-6 md:pt-6">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-slate-100 dark:bg-slate-950">
                        <Image
                          src={activeImage || selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {selectedProject.gallery?.length > 0 && (
                      <div className="px-4 pb-4 pt-3 md:px-6 md:pb-6">
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                          {[selectedProject.image, ...(selectedProject.gallery || [])]
                            .filter(Boolean)
                            .filter((image, index, images) => images.indexOf(image) === index)
                            .map((image, index) => {
                              const isActive = image === (activeImage || selectedProject.image);

                              return (
                                <button
                                  key={`${selectedProject.id}-${index}-${image}`}
                                  type="button"
                                  onClick={() => setActiveImage(image)}
                                  className={`relative aspect-[4/3] overflow-hidden rounded-md border transition-all ${
                                    isActive
                                      ? "border-slate-900 dark:border-slate-100"
                                      : "border-slate-200 dark:border-slate-700"
                                  }`}
                                >
                                  <Image
                                    src={image}
                                    alt={`${selectedProject.title} preview ${index + 1}`}
                                    fill
                                    className={`object-cover transition-opacity ${
                                      isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                                    }`}
                                  />
                                </button>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        selectedProject.status,
                        selectedProject.role,
                        selectedProject.date,
                      ]
                        .filter(Boolean)
                        .map((item) => (
                          <span
                            key={item}
                            className="rounded-md border px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {selectedProject.overview || selectedProject.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Tech Stack
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md px-2.5 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: `${selectedProject.color || "#64748b"}12`,
                              color: selectedProject.color || "#64748b",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.highlights?.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Highlights
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          {selectedProject.highlights.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span
                                className="mt-2 h-1.5 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: selectedProject.color || "#64748b",
                                }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProject.responsibilities?.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Responsibilities
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          {selectedProject.responsibilities.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span
                                className="mt-2 h-1.5 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: selectedProject.color || "#64748b",
                                }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-8 flex gap-3">
                      {selectedProject.url ? (
                        <a
                          href={selectedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                          style={{ backgroundColor: selectedProject.color || "#64748b" }}
                        >
                          Visit Project
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          Private Project
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={closeProjectDetails}
                        className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
