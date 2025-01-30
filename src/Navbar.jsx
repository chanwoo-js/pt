import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      {/* 배경 블러 효과 */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <button
            onClick={() => window.fullpage_api.moveTo(1)}
            className="cursor-pointer"
          >
            <motion.div 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white">DEV</span>
              <span className="text-indigo-400">SPACE</span>
            </motion.div>
          </button>

          {/* PC 메뉴 */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to={2}>About</NavLink>
            <NavLink to={3}>Skills</NavLink>
            <NavLink to={4}>Projects</NavLink>
            <NavLink to={5}>Contact</NavLink>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <motion.span
                animate={{
                  width: isOpen ? "24px" : "16px",
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 10 : 0,
                }}
                className="h-0.5 bg-white origin-center"
              />
              <motion.span
                animate={{
                  width: "24px",
                  opacity: isOpen ? 0 : 1,
                }}
                className="h-0.5 bg-white"
              />
              <motion.span
                animate={{
                  width: isOpen ? "24px" : "20px",
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -10 : 0,
                }}
                className="h-0.5 bg-white origin-center"
              />
            </div>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <MobileNavLink to="about" onClick={() => setIsOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink to="skills" onClick={() => setIsOpen(false)}>
                  Skills
                </MobileNavLink>
                <MobileNavLink to="projects" onClick={() => setIsOpen(false)}>
                  Projects
                </MobileNavLink>
                <MobileNavLink to="contact" onClick={() => setIsOpen(false)}>
                  Contact
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// PC 네비게이션 링크 컴포넌트
const NavLink = ({ to, children }) => (
  <button
    onClick={() => {
      // fullpage_api를 통해 섹션 이동
      window.fullpage_api.moveTo(to);
    }}
    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
  >
    {children}
  </button>
);

// 모바일 네비게이션 링크 컴포넌트
const MobileNavLink = ({ to, onClick, children }) => (
  <button
    onClick={() => {
      window.fullpage_api.moveTo(to === 'about' ? 2 : 
                                to === 'skills' ? 3 : 
                                to === 'projects' ? 4 : 
                                to === 'contact' ? 5 : 1);
      onClick(); // 메뉴 닫기
    }}
    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
  >
    {children}
  </button>
);

export default Navbar;