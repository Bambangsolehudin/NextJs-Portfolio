import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchContacts = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const offset = (currentPage - 1) * itemsPerPage;
      const params = new URLSearchParams({
        // limit: itemsPerPage,
        // offset: offset,
        // sortBy: sortBy,
        // order: sortOrder,
      });

      const response = await fetch(`/api/contacts?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Fetch contacts response status:", response);

      const result = await response.json();

      
      if (!response.ok) {
        throw new Error(result.error || "Failed to fetch contacts");
      }
      
      console.log("Fetched contacts:", result?.data);
      setContacts(result.data || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError(err.message || "Failed to load contacts");
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, sortBy, sortOrder, itemsPerPage]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchContacts();
  }, [fetchContacts]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section className="min-h-screen py-20 md:py-32 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="All Contact Messages"
          subtitle="View and manage all incoming messages"
        />

        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Error State */}
          {error && (
            <motion.div
              className="rounded-lg border border-red-300 bg-red-100 p-4 text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-400 mb-6"
              variants={itemVariants}
            >
              {error}
            </motion.div>
          )}

          {/* Loading State */}
          {isLoading ? (
            <motion.div
              className="flex items-center justify-center py-12"
              variants={itemVariants}
            >
              <div className="space-y-4 w-full max-w-2xl">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-24 bg-zinc-200 dark:bg-zinc-700 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </motion.div>
          ) : contacts.length === 0 ? (
            /* Empty State */
            <motion.div
              className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-12 text-center"
              variants={itemVariants}
            >
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                No messages yet
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Contact messages will appear here once received
              </p>
            </motion.div>
          ) : (
            <>
              {/* Sort Controls */}
              <motion.div
                className="flex flex-wrap gap-3 mb-6"
                variants={itemVariants}
              >
                <button
                  onClick={() => handleSort("created_at")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    sortBy === "created_at"
                      ? "bg-blue-600 text-white dark:bg-sky-500"
                      : "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
                  }`}
                >
                  Date {sortBy === "created_at" && (sortOrder === "asc" ? "↑" : "↓")}
                </button>
                <button
                  onClick={() => handleSort("name")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    sortBy === "name"
                      ? "bg-blue-600 text-white dark:bg-sky-500"
                      : "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
                  }`}
                >
                  Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                </button>
                <button
                  onClick={() => handleSort("email")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    sortBy === "email"
                      ? "bg-blue-600 text-white dark:bg-sky-500"
                      : "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
                  }`}
                >
                  Email {sortBy === "email" && (sortOrder === "asc" ? "↑" : "↓")}
                </button>
              </motion.div>

              {/* Contact List */}
              <motion.div 
                className="space-y-4" 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {contacts.map((contact, index) => (
                  <motion.div
                    key={`${contact.id}-${index}`}
                    className="rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:border-blue-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-blue-600"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {/* Name and Email */}
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                          Name
                        </p>
                        <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                          {contact.name || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                          Email
                        </p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                        >
                          {contact.email || "N/A"}
                        </a>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                        Received On
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {formatDate(contact.created_at)}
                      </p>
                    </div>

                    {/* Message */}
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
                        Message
                      </p>
                      <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed whitespace-pre-wrap break-words">
                        {contact.message || "No message provided"}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination Info */}
              <motion.div
                className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400"
                variants={itemVariants}
              >
                <p>Showing {contacts.length} of many messages</p>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
