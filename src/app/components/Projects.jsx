"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with product management, shopping cart, and payment integration.",
    image: "/projects/kabbo.jpg",
    technologies: ["Reactjs", "Nextjs", "Express", "MongoDB", "Bkash"],
    liveDemo: "https://mecomui.vercel.app/",
    // sourceCode: "https://github.com/SumonsNote/mecom-front",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "A full-stack e-commerce dashbaord to manage the application with product management, shopping cart, and payment integration.",
    image: "/projects/dashboard.png",
    technologies: ["Reactjs", "Nextjs", "Express", "MongoDB", "Bkash"],
    liveDemo: "https://mcomadmin.vercel.app",
    // sourceCode: "https://github.com/SumonsNote/mcomadmin",
  },
  {
    title: "An ecommerce for selling drugs and medicines",
    description:
      "A React-based hotel booking app with search functionality, user authentication, and real-time updates.",
    image: "/projects/memservice.png",
    technologies: ["React", "Nextjs", "Bkash", "NextAuth", "MongoDB"],
    liveDemo: "https://www.memservicebd.com",
    // sourceCode: "https://github.com/SumonsNote/memservice",
  },
  {
    title: "A Global Booking App",
    description:
      "A React-based hotel booking app with search functionality, user authentication, and real-time updates.",
    image: "/projects/global-booking.png",
    technologies: ["React", "Nextjs", "Stripe", "NextAuth", "MongoDB"],
    liveDemo: "https://global-booking.vercel.app/",
    sourceCode: "https://github.com/SumonsNote/global-booking",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <Image
                src={project?.image}
                alt={project?.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-4 flex justify-between">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
                {project?.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <FaGithub className="mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
