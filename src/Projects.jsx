import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "프로젝트 1",
      description: "최신 웹 기술을 활용한 반응형 웹 애플리케이션입니다.",
      image: "https://picsum.photos/400",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Web App"
    },
    {
      title: "프로젝트 2",
      description: "AI 기반 데이터 분석 대시보드 프로젝트입니다.",
      image: "https://picsum.photos/401",
      tech: ["Python", "React", "D3.js", "TensorFlow"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Data Visualization"
    },
    {
      title: "프로젝트 3",
      description: "실시간 협업 플랫폼 개발 프로젝트입니다.",
      image: "https://picsum.photos/402",
      tech: ["Socket.io", "React", "Express", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Full Stack"
    },
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', 'Web App', 'Data Visualization', 'Full Stack'];
  
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="relative bg-white overflow-hidden px-4 sm:px-6 lg:px-8 min-h-[800px] lg:h-screen flex items-center py-12 lg:py-0">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            프로젝트
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            다양한 웹 기술을 활용하여 개발한 프로젝트들을 소개합니다.
          </motion.p>

          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all shadow-md
                  ${activeFilter === category 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover="hover"
                  layout
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg
                    transform transition-all duration-300 hover:shadow-2xl border border-gray-100">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500
                          group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-purple-900/40 
                        to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 to-purple-900/95 
                          backdrop-blur-sm flex items-center justify-center p-6"
                      >
                        <div className="text-center">
                          <h4 className="text-white font-bold mb-4">Tech Stack</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.1 }}
                                className="px-3 py-1 bg-white/20 backdrop-blur-md text-white 
                                  rounded-full text-sm border border-white/30"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <motion.span 
                        className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 
                          text-sm text-white rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                      <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-indigo-500 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub size={24} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-purple-500 transition-colors"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt size={24} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 