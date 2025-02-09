"use client";

import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToogle";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <ThemeToggle />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}
