import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { PORTFOLIO_DATA } from "@/utils/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const contactMethods = [
    {
      label: "Email",
      value: PORTFOLIO_DATA.personal.email,
      href: `mailto:${PORTFOLIO_DATA.personal.email}`,
      icon: "✉️",
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: PORTFOLIO_DATA.social.linkedin,
      icon: "💼",
    },
    {
      label: "GitHub",
      value: "Check my code",
      href: PORTFOLIO_DATA.social.github,
      icon: "💻",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Methods */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
              {`Let's`} Connect
            </h3>

            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                whileHover={{ x: 8, borderColor: "#3B82F6" }}
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{method.icon}</span>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      {method.label}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4">
                Follow my work
              </p>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", url: PORTFOLIO_DATA.social.github, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
                  { label: "LinkedIn", url: PORTFOLIO_DATA.social.linkedin, icon: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center font-bold hover:bg-blue-600 hover:text-white transition-colors"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={social.icon} alt={social.label} className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Success Message */}
            <motion.div
              className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isSubmitted ? 1 : 0,
                y: isSubmitted ? 0 : -10,
              }}
              style={{ display: isSubmitted ? "block" : "none" }}
            >
              ✓ Thanks for reaching out! {"I'll"} get back to you soon.
            </motion.div>

            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="john@example.com"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isLoading}
                isAnimated={!isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>

            {/* Footer Note */}
            <motion.p
              className="text-sm text-zinc-500 dark:text-zinc-400 text-center"
              variants={itemVariants}
            >
              I typically respond within 24 hours
            </motion.p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
