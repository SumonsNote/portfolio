"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { id: 1, name: "React", icon: "⚛️", level: 4 },
      { id: 2, name: "JavaScript", icon: "📜", level: 4 },
      { id: 3, name: "TypeScript", icon: "🔷", level: 3 },
      { id: 4, name: "Tailwind CSS", icon: "💨", level: 4 },
      { id: 5, name: "Next.js", icon: "⏭️", level: 3 },
      { id: 6, name: "Redux", icon: "🔁", level: 3 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { id: 7, name: "Node.js", icon: "🌐", level: 4 },
      { id: 8, name: "Express.js", icon: "🚀", level: 4 },
      { id: 9, name: "MongoDB", icon: "🍃", level: 3 },
      { id: 10, name: "PostgreSQL", icon: "🐘", level: 3 },
      { id: 11, name: "REST API", icon: "🔗", level: 4 },
      { id: 12, name: "GraphQL", icon: "🔺", level: 2 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { id: 13, name: "Git", icon: "🔧", level: 4 },
      { id: 14, name: "GitHub", icon: "🐱", level: 4 },
      { id: 15, name: "Docker", icon: "🐳", level: 2 },
      { id: 16, name: "CI/CD", icon: "🔄", level: 2 },
      { id: 17, name: "Agile", icon: "🏃", level: 3 },
      { id: 18, name: "Testing", icon: "🧪", level: 3 },
    ],
  },
];

const SkillLevel = ({ level }) => {
  return (
    <div className="flex mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full mx-1 ${
            i <= level ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Working Skills
        </h2>
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay:
                      (categoryIndex * category.skills.length + index) * 0.05,
                  }}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center"
                >
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <h4 className="text-lg font-semibold dark:text-white">
                    {skill.name}
                  </h4>
                  <SkillLevel level={skill.level} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
