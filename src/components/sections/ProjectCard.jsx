import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project, index, onShowDetails }) {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    
    setTilt({
      x: x * 15,
      y: y * -15,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="h-full"
    >
      {/* 3D Tilt Container */}
      <motion.div
        style={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative group h-full bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 backdrop-blur-sm flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Image Container */}
          <div className="relative h-40 md:h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-950/50 dark:to-slate-950/40 overflow-hidden flex items-center justify-center">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            
            {/* Color overlay for missing images */}
            {!project.image && (
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${project.color || "#64748b"}15 0%, ${project.color || "#64748b"}03 100%)`,
                }}
              />
            )}

            {/* Project Icon Badge */}
            <motion.div
              className="absolute top-3 right-3 z-10 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white shadow-sm"
              style={{ backgroundColor: project.color || "#64748b" }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {project.id}
            </motion.div>

            {/* Date Badge */}
            <motion.div
              className="absolute top-3 left-3 px-2 py-1 bg-white/85 dark:bg-slate-900/85 backdrop-blur-sm rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm"
              animate={isHovered ? { scale: 1.03, y: -1 } : {}}
            >
              {project.date.split("(")[1]?.replace(")", "") || project.date}
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 md:p-6 flex flex-col">
            {/* Title */}
            <motion.h3
              className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1 line-clamp-2"
              animate={isHovered ? { color: project.color || "#64748b" } : {}}
            >
              {project.title}
            </motion.h3>

            {/* Date Info */}
            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium mb-2">
              {project.date}
            </p>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="px-2 py-0.5 text-xs font-medium rounded-md border transition-all"
                  style={{
                    backgroundColor: `${project.color || "#64748b"}12`,
                    borderColor: `${project.color || "#64748b"}30`,
                    color: project.color || "#64748b",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-3 border-t border-slate-200 dark:border-slate-700 mt-auto">
              {project.url ? (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-1.5 text-center rounded-md font-medium text-white transition-all shadow-sm hover:shadow-md text-xs md:text-sm"
                  style={{ backgroundColor: project.color || "#64748b" }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Demo
                </motion.a>
              ) : (
                <div className="flex-1 px-3 py-1.5 text-center rounded-md font-medium text-slate-400 bg-slate-100 dark:bg-slate-700 text-xs md:text-sm">
                  Demo N/A
                </div>
              )}
              <motion.button
                type="button"
                onClick={() => onShowDetails?.(project)}
                className="flex-1 px-3 py-1.5 rounded-md font-medium text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-xs md:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Details
              </motion.button>
            </div>
          </div>

          {/* Glow Background Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${project.color || "#64748b"}10 0%, transparent 70%)`,
            }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              border: `1px solid ${project.color || "#64748b"}`,
            }}
            animate={isHovered ? { opacity: 0.3, boxShadow: `0 0 15px ${project.color || "#64748b"}20` } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
