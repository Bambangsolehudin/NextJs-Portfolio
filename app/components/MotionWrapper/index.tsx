"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Variants } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  [key: string]: any;
}

const MotionWrapper = ({
  children,
  variants,
  className = "",
  delay = 0,
  once = true,
  ...rest
}: MotionWrapperProps) => {
  const finalVariants: Variants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any)?.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={finalVariants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
