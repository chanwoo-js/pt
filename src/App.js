import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Loading from './Loading';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <ReactFullpage
              licenseKey={'null'}
              scrollingSpeed={1000}
              navigation={true}
              navigationPosition={'right'}
              responsiveWidth={768}
              scrollOverflow={true}
              scrollOverflowReset={true}
              fitToSection={true}
              fitToSectionDelay={300}
              touchSensitivity={15}
              bigSectionsDestination={'top'}
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <Hero />
                    </div>
                    <div className="section">
                      <About />
                    </div>
                    <div className="section">
                      <Skills />
                    </div>
                    <div className="section">
                      <Projects />
                    </div>
                    <div className="section">
                      <Contact />
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
