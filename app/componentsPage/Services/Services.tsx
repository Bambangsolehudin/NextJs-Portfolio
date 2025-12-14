"use client";


import SpotlightCard from "../../../app/components/SpotLightCard/SpotlightCard";
import { FaReact, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import MotionWrapper from "../../../app/components/MotionWrapper";
import { fadeInUp } from "../../../app/utils/motionVariants";
import SplitText from "@/app/components/SplitText/SplitText";

const services = [
  // {
  //   icon: <FaPaintBrush size={30} className="mb-6 text-zinc-300" />,
  //   title: "UI/UX Design",
  //   description:
  //     "Creating intuitive and user-centered designs for website and mobile applications to enhance user experience.",
  //   spotlightColor: "rgba(255, 104, 212, 0.2)",
  // },
  {
    icon: <FaReact size={35} className="mb-4 text-zinc-300" />,
    title: "Frontend Developer",
    description:
      "Building responsive and interactive user interfaces using modern frontend frameworks. Like (Next.js, React.js)",
    spotlightColor: "rgba(0, 162, 255, 0.2)",
  },
  {
    icon: <FaLaptopCode size={35} className="mb-4 text-zinc-300" />,
    title: "Software Developer",
    description:
      "Engineering efficient solutions to solve real-world problems with scalable backend logic. Like (Node.js, Express.js, MongoDB)",
    spotlightColor: "rgba(0, 229, 255, 0.2)",
  },
];

const Services = () => {
  return (
    <>
      <div className="border-b  border-zinc-700 pb-4 mb-6">
        <SplitText 
          text="Expertise"
          className="md:text-3xl text-2xl font-semibold text-start text-gray-100 pb-6"
          delay={75}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
      <div className="container md:max-w-full max-w-4xl mx-auto py-10 flex items-center justify-start">
        <section className="grid gap-6 md:grid-cols-2 p-1 items-start text-start">
          {services.map(({ icon, title, description, spotlightColor }, i) => (
            <MotionWrapper
              key={title}
              variants={fadeInUp}
              delay={i * 0.2}
            >
              <SpotlightCard spotlightColor={spotlightColor} className="flex flex-col">
                {icon}
                <div className="text-md md:text-md lg:text-xl font-semibold mb-2 text-zinc-300">{title}</div>
                <div className="text-sm lg:text-base text-zinc-400">{description}</div>
              </SpotlightCard>
            </MotionWrapper>
          ))}
        </section>
      </div>
    </>
  );
};

export default Services;
