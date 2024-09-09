"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero-section"
    >
      <h1 className="text-4xl font-bold">Welcome to Calm Play</h1>
      <p className="mt-4 text-lg">
        Your ultimate destination for mindfulness and relaxation through
        engaging and fun activities.
      </p>
    </motion.section>
  );
}
