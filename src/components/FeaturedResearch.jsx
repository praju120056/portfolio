import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function FeaturedResearch() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="research"
      ref={ref}
      style={{ padding: '8rem 0', borderBottom: '1px solid #1F1F1F' }}
    >
      <div className="section-wrapper">
        <motion.p
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Featured Research
        </motion.p>

        <motion.h2
          className="section-title"
          style={{ marginBottom: '4rem' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          Active Investigation
        </motion.h2>

        {/* Large Featured Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
          style={{
            background: '#111111',
            border: '1px solid #1F1F1F',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Gold accent top bar */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--color-gold), transparent)', opacity: 0.7 }} />

          <div style={{ padding: '3.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Left column */}
            <div>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  color: '#D4AF37',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                Research Paper
              </p>

              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 600,
                  color: '#EAEAEA',
                  lineHeight: 1.25,
                  marginBottom: '2rem',
                }}
              >
                PINN-Based Hybrid LSTM Model for Battery SOH & RUL Prediction
              </h3>

              <a
                id="research-github-btn"
                href="https://github.com/praju120056/PINN-based-Hybrid-LSTM-Architecture-for-Battery-Degradation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2 }}
              >
                <Github size={14} />
                View on GitHub
              </a>
              <a
                id="research-paper-btn"
                href="https://www.nature.com/articles/s41598-026-37850-y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.75rem', position: 'relative', zIndex: 2 }}
              >
                <ExternalLink size={14} />
                Read Paper
              </a>
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Publication */}
              <div>
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#A0A0A0',
                    marginBottom: '0.6rem',
                  }}
                >
                  Publication
                </p>
                <p style={{ color: '#C0C0C0', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Published in Scientific Reports (Nature Portfolio), 2026.
                </p>
              </div>

              {/* Contribution */}
              <div>
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#A0A0A0',
                    marginBottom: '0.6rem',
                  }}
                >
                  Contribution
                </p>
                <p style={{ color: '#C0C0C0', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Physics-informed LSTM model combining differential equation constraints for battery degradation prediction.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
