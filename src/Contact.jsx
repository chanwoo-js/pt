import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      form.current.reset();
    } catch (error) {
      console.error('이메일 전송 실패:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-950 overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-10 relative py-8 lg:py-0">
        <motion.div className="max-w-2xl mx-auto">
          <motion.div className="text-center mb-8">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-white mb-3"
              whileHover={{ scale: 1.05 }}
            >
              연락하기
            </motion.h2>
            <p className="text-gray-300 text-sm lg:text-base">
              프로젝트 문의나 협업 제안을 기다리고 있습니다.
            </p>
          </motion.div>

          <motion.form 
            ref={form} 
            onSubmit={sendEmail} 
            className="space-y-4 bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <motion.div>
              <label className="block text-gray-700 mb-2 font-medium text-sm lg:text-base">이름</label>
              <motion.input
                type="text"
                name="user_name"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200
                  text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
                required
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            <motion.div>
              <label className="block text-gray-700 mb-2 font-medium text-sm lg:text-base">이메일</label>
              <motion.input
                type="email"
                name="user_email"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200
                  text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
                required
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            <motion.div>
              <label className="block text-gray-700 mb-2 font-medium text-sm lg:text-base">메시지</label>
              <motion.textarea
                name="message"
                rows="4"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200
                  text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm lg:text-base"
                required
                variants={inputVariants}
                whileFocus="focus"
              ></motion.textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 lg:py-3 
                rounded-lg font-medium hover:shadow-lg transition-all text-sm lg:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? '전송 중...' : '보내기'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 