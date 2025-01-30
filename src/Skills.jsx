import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiDocker } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={40} />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={40} />, level: 85 },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={40} />, level: 95 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={40} />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={40} />, level: 80 },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" size={40} />, level: 75 },
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={40} />, level: 88 },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={40} />, level: 78 },
        { name: "AWS", icon: <FaAws className="text-[#232F3E]" size={40} />, level: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 overflow-hidden px-4 sm:px-6 lg:px-8 min-h-[800px] lg:h-screen flex items-center py-12 lg:py-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-4"
            variants={itemVariants}
          >
            기술 스택
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            프로젝트에서 주로 사용하는 기술 스택입니다
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, idx) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-8">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-2 bg-white rounded-lg shadow-md">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-800">
                            {skill.name}
                          </h4>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <motion.div
                              className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              추가 기술 스택
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Redux", "Next.js", "GraphQL", "Jest", "Webpack", "Sass", "PostgreSQL", "Redis"].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full
                    border border-gray-200 shadow-sm"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgb(238, 242, 255)",
                    borderColor: "rgb(99, 102, 241)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 