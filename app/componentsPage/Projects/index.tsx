"use client";

import MotionWrapper from "@/app/components/MotionWrapper";
import React from "react";
import projectsData, { techIcons } from "./projectsData";
import { fadeInUp } from "@/app/utils/motionVariants";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

type TechIcons = {
  [key: string]: string;
};

export interface Project {
  id: string | number;
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  tech: string[];
}

interface ProjectsProps {
  limit?: number;
  page?: string;
}

const Projects: React.FC<ProjectsProps> = ({ limit = 0, page }) => {
  const displayedProjects = limit
    ? projectsData.slice(0, limit)
    : projectsData;

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="py-12">
      {/* ================= HEADER ================= */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight border-b border-zinc-700 pb-3 w-fit">
          Projects
        </h2>
      </div>

      {/* ================= PROJECT LIST ================= */}
      <div className="space-y-8">
        {displayedProjects.map((project, index) => (
          <MotionWrapper
            key={project.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={project.url || "#"}
              target={project.url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 
              ${project.url
                  ? "hover:border-amber-400 hover:bg-zinc-800/60"
                  : "opacity-70 cursor-not-allowed"
                }`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* LEFT CONTENT */}
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-zinc-500 mb-2">
                    {project.date}
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-zinc-100 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* URL */}
                  <div className="text-xs md:text-sm text-zinc-500 mb-4">
                    {project.url ? (
                      <>
                        {project.url.length > 45
                          ? `${project.url.slice(0, 40)}...`
                          : project.url}
                        <span className="ml-2 text-amber-400">→</span>
                      </>
                    ) : (
                      <span className="text-amber-500">
                        Internal / Private Project
                      </span>
                    )}
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs md:text-sm text-zinc-300"
                      >
                        <Image
                          src={(techIcons as TechIcons)[tech]}
                          alt={tech}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1">
                  <div className="overflow-hidden rounded-xl border border-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </a>
          </MotionWrapper>
        ))}
      </div>

      {/* ================= SEE MORE BUTTON ================= */}
      {page === "home" && (
        <div className="flex justify-center mt-14">
          <button
            onClick={() => router.push("/projects")}
            className="flex items-center gap-2 text-amber-400 text-sm md:text-base font-medium hover:opacity-80 transition"
          >
            See More
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;