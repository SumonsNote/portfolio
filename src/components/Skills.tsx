
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skills = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 80 },
      { name: 'JavaScript', level: 95 }
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'FastAPI', level: 82 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST APIs', level: 92 }
    ],
    database: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Prisma', level: 82 },
      { name: 'Supabase', level: 85 },
      { name: 'Firebase', level: 78 }
    ],
    tools: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Vercel', level: 88 },
      { name: 'Jest', level: 82 },
      { name: 'Figma', level: 75 }
    ]
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', color: 'from-electric-blue to-blue-400' },
    { key: 'backend', label: 'Backend', color: 'from-neon-cyan to-green-400' },
    { key: 'database', label: 'Database', color: 'from-neon-purple to-purple-400' },
    { key: 'tools', label: 'Tools', color: 'from-orange-400 to-red-400' }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="scroll-animate opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-dark-card/50 text-muted-foreground hover:text-foreground border border-dark-border'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                <div
                  key={skill.name}
                  className="card-glow p-6 rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                    <span className="text-electric-blue font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-border rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-electric-blue to-neon-cyan h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
