import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaUsers } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      icon: <FaUserGraduate className="text-blue-500" size={24} />,
      title: "교육",
      items: [
        {
          period: "2023",
          title: "프론트엔드 개발자 양성과정",
          place: "멋쟁이사자처럼 프론트엔드 스쿨",
          description: "React, TypeScript 등 실무 중심 교육"
        },
        {
          period: "2018 - 2022",
          title: "컴퓨터공학 학사",
          place: "OO대학교",
          description: "자료구조, 알고리즘, 웹 프로그래밍 전공"
        }
      ]
    },
    {
      icon: <FaCode className="text-blue-500" size={24} />,
      title: "프로젝트 경험",
      items: [
        {
          period: "2023.10 - 2023.12",
          title: "팀 프로젝트 - 실시간 협업 플랫폼",
          place: "프론트엔드 개발 리더",
          description: "React, Socket.io를 활용한 실시간 기능 구현"
        },
        {
          period: "2023.07 - 2023.09",
          title: "개인 프로젝트 - 포트폴리오 웹사이트",
          place: "기획/디자인/개발",
          description: "반응형 디자인, 모던 UI/UX 구현"
        }
      ]
    },
    {
      icon: <FaUsers className="text-blue-500" size={24} />,
      title: "활동 및 수상",
      items: [
        {
          period: "2023",
          title: "해커톤 최우수상",
          place: "2023 대학생 IT 해커톤",
          description: "AI 기반 학습 플랫폼 프로젝트"
        },
        {
          period: "2022",
          title: "알고리즘 스터디 운영",
          place: "교내 개발 동아리",
          description: "20명 규모 스터디 리드"
        }
      ]
    }
  ];

  const skills = [
    "HTML/CSS", "JavaScript", "React", "TypeScript",
    "Tailwind CSS", "Git", "Figma", "Node.js"
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 overflow-hidden px-4 sm:px-6 lg:px-8 min-h-[800px] lg:h-screen flex items-center py-12 lg:py-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="text-gray-600 text-center mb-16 max-w-2xl mx-auto space-y-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다."
            </p>
            <p className="text-sm text-gray-500">
              새로운 기술을 배우는 것을 좋아하며, 
              클린 코드와 성능 최적화에 대한 고민을 즐깁니다.
              협업과 소통을 중요하게 생각하며, 
              함께 성장하는 개발 문화를 지향합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  {exp.icon}
                  <h3 className="text-xl font-bold text-gray-800">
                    {exp.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {exp.items.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="border-l-2 border-blue-500 pl-4"
                    >
                      <span className="text-sm text-blue-500 font-medium block">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.place}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Skills */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              주요 기술
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full
                    border border-blue-100"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#EEF2FF",
                    borderColor: "#6366F1"
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

export default About; 