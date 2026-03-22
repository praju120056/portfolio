import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TerminalScreen from './components/TerminalScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedResearch from './components/FeaturedResearch';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './index.css';

function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1F1F1F',
        padding: '2.5rem 0',
      }}
    >
      <div className="section-wrapper flex items-center justify-between flex-wrap gap-4">
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#A0A0A0', letterSpacing: '0.08em' }}>
          © 2026 Prajakth N Kumar
        </p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#3a3a3a', letterSpacing: '0.05em' }}>
          Built with React + Vite
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <CursorGlow />
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalScreen onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Navbar />
            <main>
              <Hero />
              <FeaturedResearch />
              <Projects />
              <Skills />
              <Resume />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
