"use client";

import MotionWrapper from "@/app/components/MotionWrapper";
import React from "react";
import projectsData, { techIcons } from "./projectsData";
import { fadeInUp } from "@/app/utils/motionVariants";
import SplitText from "@/app/components/SplitText/SplitText";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

type TechIcons = {
  HTML: string;
  CSS: string;
  JavaScript: string;
  ReactJS: string;
  TailwindCSS: string;
  VueJS: string;
  Laravel: string;
  Bootstrap: string;
  MySQL: string;
  Figma: string;
  AdobeXD: string;
  Notion: string;
  FramerMotion: string;
  Git: string;
  Java: string;
} & { [key: string]: string };


// -------- Types --------
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
  const displayedProjects: any[] = limit
    ? projectsData.slice(0, limit)
    : projectsData;

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`md:max-w-full max-w-4xl py-10 mx-auto text-zinc-300 `}>
      <div className=" pb-4 mb-6">
        <SplitText 
          text="Projects"
          className="md:text-xl border-b first-letter:xl text-2xl font-semibold text-start text-gray-100 pb-2"
          delay={20}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
        />
      </div>

    
      {displayedProjects.map((project, index) => (
        <MotionWrapper
          key={project.id}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.15 }}
          as="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${pathname == '/projects' ? 'md:px-20' : ''}`}
        >
          <a
            href={`${project.url ? project.url : '#'}`}
            target={`${project.url ? '_blank' : ''}`}
            rel="noopener noreferrer"
            className={`flex flex-col-reverse md:flex-row p-5 gap-8 mb-5 
                rounded-xl hover:p-5 transition duration-300
                ${project?.url ? 'hover:bg-white/10 cursor-pointer' : 'cursor-not-allowed'}
            `}
          >
            {/* Project title and details */}
            <div className="flex-1">
              <div className="text-xs md:text-sm lg:text-sm text-zinc-400">
                {project.date}
              </div>

              <div className="text-lg md:text-base font-semibold my-2 text-zinc-300">
                {project.title}
              </div>

              <div className="text-sm md:text-sm text-zinc-300 mb-2">
                {project.description}
              </div>

              <div
                className="text-xs md:text-sm text-zinc-400 mb-2"
                title={project.url}
              >
                
                {
                
                project?.url 
                  ? 
                    (project.url.length > 40
                    ? `${project.url.slice(0, 30)}...`
                    : project.url)
                  : 
                    <span className="md:text-base text-sm text-red-600"> (Internal / Private Project) </span>
                }
                {project.url && <span className="inline-block">&#8594;</span>}
              </div>

              <div className="flex gap-2 mt-4 flex-wrap">
                {project.tech.map((tech: any, idx: any) => (
                  <div
                    key={idx}
                    className="flex items-center px-2 py-1 rounded bg-zinc-800"
                  >
                    <Image
                      src={(techIcons as TechIcons)[tech]}
                      alt={tech}
                      title={tech}
                      className="w-4 h-4 mr-2"
                      width={16} height={16}
                    />
                    <span className="text-xs lg:text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </a>
        </MotionWrapper>
      ))}



      {
        page == "home" &&
          <div 
            onClick={() => router?.push('/projects')}
            className="flex text-base items-center justify-center text-yellow-500 mt-10 cursor-pointer hover:text-yellow-400 transition-colors border-b border-yellow-500 hover:border-yellow-400  w-fit py-2 mx-auto">
            <p> See More </p>
            <FaArrowRight className="ml-2" />
          </div>
      }


    </div>
  );
};

export default Projects;
