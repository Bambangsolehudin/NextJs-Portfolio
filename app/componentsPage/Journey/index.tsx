"use client";


import React from "react";
import journeyData from "./journeyData";
import MotionWrapper from "@/app/components/MotionWrapper";
import { slideInRight } from "@/app/utils/motionVariants";
import SplitText from "@/app/components/SplitText/SplitText";

// ====== Types ======
interface JourneyEvent {
  month?: string;
  title: string;
  description: string;
}

interface JourneyItem {
  year: string | number;
  events: JourneyEvent[];
}

interface JourneyProps {
  limit?: number;
  headerNo?: boolean;
}

const Journey: React.FC<JourneyProps> = ({ limit, headerNo, }) => {
  const data: any[] = limit ? journeyData.slice(0, limit) : journeyData;

  return (
  <>
   
   {
    !headerNo && 
    <div className="border-b  border-zinc-700 pb-4">
        <SplitText 
          text="Experience"
          className="md:text-3xl text-2xl font-semibold text-start text-gray-100 pb-6"
          delay={75}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
   }
    <div className="md:max-w-full max-w-4xl px-0 mb-10 mx-auto text-zinc-300">
      {/* Vertical timeline wrapper */}
      <div className="relative">
        <div className="flex flex-col space-y-10">
          {data.map((entry, index) => (
            <div key={index} className="flex items-start md:gap-6">
              
              {/* Year */}
              <div className="w-auto text-left text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-zinc-300">
                {entry.year}
              </div>

              {/* Events container */}
              <div className="flex-1 space-y-6 relative">
                {entry.events.map((event: any, idx: any) => {
                  const isLastGroup = index === data.length - 1;
                  const isLastEvent = idx === entry.events.length - 1;

                  return (
                    <div key={idx} className="relative">
                      {/* Dot and line */}
                      <div className="absolute -left-2 top-0 bottom-0">
                        <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-zinc-300" />

                        <div
                          className={`absolute left-1/2 transform -translate-x-1/2 top-2 -bottom-12 w-px ${
                            isLastGroup && isLastEvent
                              ? "bg-gradient-to-b from-zinc-300 to-transparent"
                              : "bg-zinc-300"
                          }`}
                        />
                      </div>

                      {/* Motion wrapper */}
                      <MotionWrapper
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        className="md:ml-5 ml-4"
                      >
                        {/* Month */}
                        {event.month && (
                          <div className="text-xs md:text-sm lg:text-sm text-zinc-400 mb-1">
                            {event.month}
                          </div>
                        )}

                        {/* Title */}
                        <div className="text-md md:text-md lg:text-xl text-zinc-300">
                          {event.title}
                        </div>

                        {/* Description (HTML safe) */}
                        <div
                          className="text-sm lg:text-base text-zinc-400"
                          dangerouslySetInnerHTML={{ __html: event.description }}
                        />
                      </MotionWrapper>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Journey;
