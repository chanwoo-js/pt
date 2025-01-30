import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    // 진행도를 0에서 100까지 부드럽게 증가
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 총 5초 동안 진행

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setShowBurst(true), 500);
      setTimeout(() => setIsFinished(true), 1000);
    }
  }, [progress]);

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => onLoadingComplete(), 1000);
    }
  }, [isFinished, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      {/* 버스트 이펙트 */}
      {showBurst && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* 중심 링 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2], opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="absolute w-[40vh] h-[40vh] border-2 border-sky-400/30 rounded-full"
            style={{ filter: 'blur(1px)' }}
          />
          
          {/* 퍼지는 파티클 */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: (i * 30) }}
              animate={{ 
                scale: [0, 1.5],
                opacity: [1, 0],
                rotate: [(i * 30), (i * 30) + 20]
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: i * 0.02,
              }}
              className="absolute w-1 h-12 origin-bottom"
              style={{
                background: 'linear-gradient(to top, transparent, rgba(56, 189, 248, 0.3))',
              }}
            />
          ))}

          {/* 반짝이는 파티클 */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [1, 0.8, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.1 + (i * 0.05),
                ease: "easeOut"
              }}
              className="absolute w-1 h-1 bg-sky-400 rounded-full"
              style={{
                left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 35}%`,
                top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 35}%`,
              }}
            />
          ))}

          {/* 그라데이션 플래시 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.1],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            className="absolute w-[60vh] h-[60vh] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
            }}
          />
        </div>
      )}

      {/* 메인 콘텐츠 */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        animate={{
          opacity: showBurst ? 0 : 1,
          scale: showBurst ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative">
          {/* 메인 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="text-8xl md:text-9xl font-bold mb-8"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400">
                {progress}%
              </span>
            </motion.div>
          </motion.div>

          {/* 로딩 바 컨테이너 */}
          <div className="relative w-64 md:w-96 mx-auto">
            {/* 배경 라인 */}
            <div className="h-[2px] w-full bg-gray-100 rounded-full">
              {/* 프로그레스 바 */}
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* 움직이는 하이라이트 */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-[2px] bg-sky-400/20 blur-sm"
              animate={{
                x: [-100, 400],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* 로딩 메시지 */}
          <motion.div
            className="mt-8 text-sm text-sky-900/50 tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="inline-block">
              {progress < 30 && "Getting Started..."}
              {progress >= 30 && progress < 60 && "Almost There..."}
              {progress >= 60 && progress < 90 && "Looking Good..."}
              {progress >= 90 && "Ready to Go!"}
            </span>
          </motion.div>

          {/* 장식용 파티클 */}
          <div className="absolute inset-0 -z-10">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-sky-400/50 rounded-full"
                initial={{ 
                  x: 0,
                  y: 0,
                  scale: 0
                }}
                animate={{ 
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 400 - 200,
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loading; 