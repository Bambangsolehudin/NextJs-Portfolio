import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { PORTFOLIO_DATA } from "@/utils/constants";
import supabase from "@/utils/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");

    if (!supabase) {
      setSubmitError("Contact form is not configured yet. Please try again later.");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("ERROR:", err);
      setSubmitError("Message failed to send. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      label: "Email",
      value: PORTFOLIO_DATA.personal.email,
      href: `mailto:${PORTFOLIO_DATA.personal.email}`,
      icon: "@",
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: PORTFOLIO_DATA.social.linkedin,
      icon: "in",
    },
    {
      label: "GitHub",
      value: "Check my code",
      href: PORTFOLIO_DATA.social.github,
      icon: "</>",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <motion.div
          className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">
              {`Let's`} Connect
            </h3>

            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-blue-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-blue-600"
                whileHover={{ x: 8, borderColor: "#3B82F6" }}
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {method.icon}
                  </span>
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

            <div className="pt-6">
              <p className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Follow my work
              </p>
              <div className="flex gap-4">
                {[
                  {
                    label: "GitHub",
                    url: PORTFOLIO_DATA.social.github,
                    icon: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
                  },
                  {
                    label: "LinkedIn",
                    url: PORTFOLIO_DATA.social.linkedin,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:bg-blue-900/30 dark:text-blue-400"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={social.icon} alt={social.label} className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="rounded-lg border border-green-300 bg-green-100 p-4 text-green-700 dark:border-green-700 dark:bg-green-900/30 dark:text-green-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isSubmitted ? 1 : 0,
                y: isSubmitted ? 0 : -10,
              }}
              style={{ display: isSubmitted ? "block" : "none" }}
            >
              Thanks for reaching out! {"I'll"} get back to you soon.
            </motion.div>

            {submitError ? (
              <motion.div
                className="rounded-lg border border-red-300 bg-red-100 p-4 text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitError}
              </motion.div>
            ) : null}

            <motion.div variants={itemVariants}>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-400"
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-400"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-400"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isLoading || !supabase}
                isAnimated={!isLoading}
              >
                {!supabase
                  ? "Contact Form Unavailable"
                  : isLoading
                    ? "Sending..."
                    : "Send Message"}
              </Button>
            </motion.div>

            <motion.p
              className="text-center text-sm text-zinc-500 dark:text-zinc-400"
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
