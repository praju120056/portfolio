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
          RESEARCH
        </motion.p>

        <motion.h2
          className="section-title"
          style={{ marginBottom: '4rem' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          Research & Publications
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Research 01 - Primary Publication Card (PINN) */}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      color: '#D4AF37',
                      textTransform: 'uppercase',
                    }}
                  >
                    RESEARCH 01
                  </span>
                  <span style={{ color: '#3A3A3A' }}>|</span>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: '#D4AF37',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '2px',
                    }}
                  >
                    PUBLISHED
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                    fontWeight: 600,
                    color: '#EAEAEA',
                    lineHeight: 1.25,
                    marginBottom: '1.25rem',
                  }}
                >
                  PINN-Based Hybrid LSTM Model for Battery SOH & RUL Prediction
                </h3>

                <p style={{ color: '#A0A0A0', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Physics-informed hybrid LSTM architecture for lithium-ion battery degradation modelling and SOH/RUL prediction using the NASA Battery Cycling Dataset.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <a
                    id="research-pinn-github-btn"
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
                    id="research-pinn-paper-btn"
                    href="https://www.nature.com/articles/s41598-026-37850-y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2 }}
                  >
                    <ExternalLink size={14} />
                    Read Paper
                  </a>
                </div>
              </div>

              {/* Right column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', justifyContent: 'center' }}>
                <div>
                  <p
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#A0A0A0',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Publication
                  </p>
                  <p style={{ color: '#EAEAEA', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Scientific Reports (Nature Portfolio), 2026
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#A0A0A0',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Quantitative Highlights
                  </p>
                  <ul style={{ color: '#C0C0C0', fontSize: '0.875rem', lineHeight: 1.7, paddingLeft: '1.2rem' }}>
                    <li>RMSE: 1.01%</li>
                    <li>MAE: 0.67%</li>
                    <li>Outperformed baselines by approximately 2–3×</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research 02 - Publication In Progress (FER) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
            style={{
              background: '#111111',
              border: '1px solid #1F1F1F',
              borderRadius: '2px',
              padding: '2.5rem 3.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    color: '#A0A0A0',
                    textTransform: 'uppercase',
                  }}
                >
                  RESEARCH 02
                </span>
                <span style={{ color: '#3A3A3A' }}>|</span>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#D4AF37',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '2px',
                  }}
                >
                  PUBLICATION IN PROGRESS
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 600,
                  color: '#EAEAEA',
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                }}
              >
                Facial Emotion Recognition Framework
              </h3>

              <p style={{ color: '#A0A0A0', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Deep-learning framework for facial emotion recognition extending beyond basic emotion classification toward complex states such as frustration and confusion.
              </p>

              <a
                id="research-fer-github-btn"
                href="https://github.com/praju120056/Facial-Emotion-Recognition-Framework"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', padding: '0.5rem 1.25rem' }}
              >
                <Github size={14} />
                View on GitHub
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#A0A0A0',
                    marginBottom: '0.5rem',
                  }}
                >
                  Dataset & Domain
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {['FER2013', 'Computer Vision', 'Deep Learning'].map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

