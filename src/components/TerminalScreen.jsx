import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  '> Initializing portfolio...',
  '> Loading projects...',
  '> Loading research...',
  '> Loading systems...',
  '> Welcome.',
];

const TYPING_SPEED = 35;
const LINE_DELAY = 300;

function useTypingEffect(lines) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(() => setDone(true), 600);
      return;
    }

    if (currentChar < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev];
          updated[currentLine] = (updated[currentLine] || '') + lines[currentLine][currentChar];
          return updated;
        });
        setCurrentChar(c => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, LINE_DELAY);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines]);

  return { displayedLines, done };
}

export default function TerminalScreen({ onEnter }) {
  const { displayedLines, done } = useTypingEffect(LINES);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-screen flex flex-col items-center justify-center min-h-screen px-8">
      <div className="w-full max-w-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#A0A0A0', marginLeft: '1rem' }}>
            portfolio.sh
          </span>
        </div>

        {/* Terminal body */}
        <div
          style={{
            background: '#0D0D0D',
            border: '1px solid #1F1F1F',
            borderRadius: '4px',
            padding: '2rem',
            minHeight: '220px',
          }}
        >
          {displayedLines.map((line, i) => (
            <div key={i} style={{ marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '1rem',
                  color: i === displayedLines.length - 1 && line === '> Welcome.' ? '#D4AF37' : '#EAEAEA',
                }}
              >
                {line}
              </span>
              {i === displayedLines.length - 1 && !done && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1.1em',
                    background: '#D4AF37',
                    marginLeft: '2px',
                    verticalAlign: 'text-bottom',
                    opacity: cursor ? 1 : 0,
                    transition: 'opacity 0.1s',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Enter button */}
        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-8 flex justify-center"
            >
              <button
                id="enter-portfolio-btn"
                onClick={onEnter}
                className="btn-gold"
                style={{ fontSize: '0.85rem', letterSpacing: '0.15em', padding: '0.75rem 2.5rem' }}
              >
                [ Enter Portfolio ]
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
