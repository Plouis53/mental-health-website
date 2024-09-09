"use client";

import { motion } from "framer-motion";

export default function Posts() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="posts-section"
    >
      <h2 className="text-2xl font-semibold">Latest Posts</h2>
      <div className="post-grid">{/* Your posts content goes here */}</div>
    </motion.section>
  );
}
