import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/utils/constants";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { icon: "GitHub", url: PORTFOLIO_DATA.social.github, iconUrl: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
    { icon: "LinkedIn", url: PORTFOLIO_DATA.social.linkedin, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="bg-zinc-900 dark:bg-black text-white py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-2">
              {PORTFOLIO_DATA.personal.name}
            </h3>
            <p className="text-zinc-400">
              {PORTFOLIO_DATA.personal.role}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-400">
              {["About", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={social.iconUrl} alt={social.icon} width={20} height={20} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-zinc-800 pt-8"
          variants={itemVariants}
        >
          <p className="text-center text-zinc-400 text-sm">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
