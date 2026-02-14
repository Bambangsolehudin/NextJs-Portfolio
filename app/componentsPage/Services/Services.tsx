"use client";

import { FaReact, FaLaptopCode } from "react-icons/fa";
import MotionWrapper from "../../../app/components/MotionWrapper";
import { fadeInUp } from "../../../app/utils/motionVariants";

const services = [
  {
    icon: <FaReact size={36} className="text-zinc-300 group-hover:text-white transition-colors" />,
    title: "Frontend Developer",
    description:
      "Building responsive, interactive, and accessible user interfaces using modern frontend technologies.",
  },
  {
    icon: <FaLaptopCode size={36} className="text-zinc-300 group-hover:text-white transition-colors" />,
    title: "Full-Stack Developer",
    description:
      "Building end-to-end web applications from frontend to backend with scalable architecture.",
  },
  {
    icon: <FaLaptopCode size={36} className="text-zinc-300 group-hover:text-white transition-colors" />,
    title: "Web Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and best user experience.",
  },
];

const Services = () => {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <div className="grid gap-6 md:grid-cols-3 relative">
        {services.map(({ icon, title, description }, i) => (
          <MotionWrapper key={title} variants={fadeInUp} delay={i * 0.2}>
            <div
              className="
                group
                h-80
                bg-gray-700
                border border-gray-600
                shadow-md
                flex items-center justify-center
                px-6
                transition-all duration-300
                hover:bg-yellow-500
              "
            >
              <div className="flex gap-6 items-start">
                <span>{icon}</span>

                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-zinc-200 group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default Services;
