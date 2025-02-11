import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SocialLinks />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
