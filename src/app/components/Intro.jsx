"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-700 via-blue-500 to-gray-600">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Md Sumon Hossain Shohan
        </h1>
        <h2 className="text-3xl text-white mb-8">Full Stack Developer</h2>
        <p className="text-lg text-white py-2">
          Works with Reactjs, Nextjs, Tailwindcss, Nodejs, Expressjs, MongoDB
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}
