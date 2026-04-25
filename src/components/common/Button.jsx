import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  isAnimated = true,
  ...props
}) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-teal-700 to-sky-600 text-white hover:shadow-lg hover:shadow-teal-600/25 focus:ring-teal-600",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 focus:ring-zinc-400",
    outline:
      "border-2 border-zinc-300 text-zinc-900 hover:border-zinc-400 dark:border-zinc-600 dark:text-zinc-100 dark:hover:border-zinc-500 focus:ring-zinc-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClass = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const MotionButton = motion.button;

  return (
    <MotionButton
      className={buttonClass}
      whileHover={isAnimated ? { y: -2 } : {}}
      whileTap={isAnimated ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </MotionButton>
  );
}
