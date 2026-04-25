import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef(null);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  // Intersection Observer for scroll-based active state
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -66%",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    // Close mobile menu after click
    setIsMobileMenuOpen(false);
    
    // Small delay to ensure menu animation completes
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <motion.nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: "pointer" }}
          >
            Bambang
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={clsx(
                    "font-medium transition-colors relative pb-2",
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 40 }}
                    />
                  )}
                </motion.button>
              );
            })}
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium"
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="space-y-1">
              <motion.div
                className="w-6 h-0.5 bg-zinc-900 dark:bg-white"
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : {}}
              />
              <motion.div
                className="w-6 h-0.5 bg-zinc-900 dark:bg-white"
                animate={isMobileMenuOpen ? { opacity: 0 } : {}}
              />
              <motion.div
                className="w-6 h-0.5 bg-zinc-900 dark:bg-white"
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : {}}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={
            isMobileMenuOpen
              ? { opacity: 1, height: "auto" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-zinc-800 rounded-lg mt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={clsx(
                    "block w-full text-left px-3 py-2 rounded-md font-medium transition-all",
                    isActive
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  )}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
