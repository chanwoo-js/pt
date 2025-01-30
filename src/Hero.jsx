import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 쿼카1 from './assets/images/쿼카1.jpg';
import 쿼카2 from './assets/images/쿼카2.jpg';
import 쿼카3 from './assets/images/쿼카3.jpg';


// 귀여운 캐릭터 SVG 컴포넌트를 정의합니다
const CuteCharacter = () => (
  // 캐릭터의 전체 컨테이너
  <motion.div className="relative w-full h-full">
    {/* 배경 그라데이션 효과 */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full"
      animate={{
        scale: [1, 1.2, 1], // 크기 변화 애니메이션
        rotate: [0, 360], // 회전 애니메이션
      }}
      transition={{
        duration: 20, // 애니메이션 지속 시간
        repeat: Infinity, // 무한 반복
        ease: "linear" // 일정한 속도로
      }}
    />
    
    {/* 캐릭터 본체 컨테이너 */}
    <motion.div
      className="relative z-10 w-full h-full flex items-center justify-center"
      animate={{
        y: [0, -10, 0], // 위아래로 떠다니는 효과
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* SVG 캐릭터 시작 */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        initial={{ scale: 0 }} // 초기 크기
        animate={{ scale: 1 }} // 최종 크기
        transition={{ duration: 0.5 }}
      >
        {/* 캐릭터의 몸체 - 분홍색 원 */}
        <motion.circle
          cx="100" cy="100" r="50"
          fill="#FFB6C1"
          animate={{ scale: [1, 1.05, 1] }} // 숨쉬는 듯한 효과
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* 눈 - 두 개의 검은 점 */}
        <motion.circle cx="85" cy="90" r="5" fill="#333" />
        <motion.circle cx="115" cy="90" r="5" fill="#333" />
        
        {/* 볼터치 - 반투명한 분홍색 원 */}
        <circle cx="75" cy="100" r="7" fill="#FF9999" opacity="0.5" />
        <circle cx="125" cy="100" r="7" fill="#FF9999" opacity="0.5" />
        
        {/* 미소 - 곡선 */}
        <motion.path
          d="M85,110 Q100,120 115,110"
          stroke="#333"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* 노트북 그림 */}
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="70" y="130" width="60" height="40" fill="#666" rx="5" /> {/* 노트북 본체 */}
          <rect x="70" y="125" width="60" height="5" fill="#888" rx="2" /> {/* 노트북 화면 */}
          <circle cx="100" cy="150" r="3" fill="#444" /> {/* 노트북 로고 */}
        </motion.g>
      </motion.svg>
    </motion.div>
  </motion.div>
);

// 메인 Hero 컴포넌트
const Hero = () => {
  const projects = [
    {
      image: 쿼카1,
    },
    {
      image: 쿼카2,
    },
    {
      image: 쿼카3,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-gray-900 to-gray-900" />

      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col justify-center py-4 lg:py-0"
          >
            <div className="flex-1 flex items-center justify-center">
              <div className="w-48 h-48 lg:w-96 lg:h-96">
                <CuteCharacter />
              </div>
            </div>

            <div className="text-center mt-4 lg:mt-0">
              <h2 className="text-xl text-indigo-400 font-medium">
                Hello, I'm
              </h2>

              <h1 className="text-4xl lg:text-7xl font-bold">
                <span className="text-white">John</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  {" "}Doe
                </span>
              </h1>

              <div className="text-lg lg:text-2xl text-gray-300 mt-4">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    1000,
                    '웹 개발자',
                    1000,
                    'UI/UX Enthusiast',
                    1000,
                    '문제 해결사',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-indigo-400"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 h-[600px] items-center justify-center hidden lg:flex"
          >
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[400px] aspect-[9/16]"
              cardsEffect={{
                slideShadows: true,
                rotate: true,
                perSlideRotate: 5,
                perSlideOffset: 8,
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={project.image} 
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Hero 컴포넌트를 내보냅니다
export default Hero;