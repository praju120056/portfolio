import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
};

const PHOTO_URL =
  'https://drive.google.com/file/d/1rcnQ6_VKk2TwqanbKcvG5fZeolp1Y4xX/view?usp=drivesdk';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '6rem',
        borderBottom: '1px solid #1F1F1F',
      }}
    >
      <div className="section-wrapper w-full">
        {/* Two-column layout: text left, photo right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* ── LEFT: Text content ── */}
          <div>
            {/* Label */}
            <motion.p
              className="section-label"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Portfolio — 2026
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#EAEAEA',
                marginBottom: '1.25rem',
              }}
            >
              Prajakth N Kumar
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A0A0A0',
                marginBottom: '2.5rem',
              }}
            >
              Engineer &nbsp;|&nbsp; AI/ML &nbsp;|&nbsp; Systems &nbsp;|&nbsp; Embedded
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="gold-divider"
              style={{ maxWidth: '480px', marginBottom: '2.5rem' }}
            />

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                color: '#C0C0C0',
                maxWidth: '560px',
                marginBottom: '3rem',
                lineHeight: 1.5,
              }}
            >
              &ldquo;I build intelligent systems that combine software, physics, and data.&rdquo;
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}
            >
              <button
                id="hero-view-projects-btn"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                View Projects
              </button>
              <button
                id="hero-view-research-btn"
                onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                View Research
              </button>
              <a
                id="hero-resume-btn"
                href="https://drive.google.com/file/d/1FrQjym6DUppAerI3toR5ALFiu24395zu/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Resume
              </a>
              <button
                id="hero-contact-btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                Contact
              </button>
            </motion.div>

            {/* Currently working on */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#D4AF37',
                  boxShadow: '0 0 6px rgba(212, 175, 55, 0.6)',
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#A0A0A0',
                  letterSpacing: '0.05em',
                }}
              >
                Currently working on:{' '}
                <span style={{ color: '#EAEAEA' }}>
                  Physics-Informed Neural Networks for Battery Health Prediction
                </span>
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '340px',
              }}
            >
              {/* Gold corner accents */}
              <span style={{
                position: 'absolute', top: '-8px', left: '-8px',
                width: '24px', height: '24px',
                borderTop: '1.5px solid #D4AF37', borderLeft: '1.5px solid #D4AF37',
                zIndex: 2,
              }} />
              <span style={{
                position: 'absolute', top: '-8px', right: '-8px',
                width: '24px', height: '24px',
                borderTop: '1.5px solid #D4AF37', borderRight: '1.5px solid #D4AF37',
                zIndex: 2,
              }} />
              <span style={{
                position: 'absolute', bottom: '-8px', left: '-8px',
                width: '24px', height: '24px',
                borderBottom: '1.5px solid #D4AF37', borderLeft: '1.5px solid #D4AF37',
                zIndex: 2,
              }} />
              <span style={{
                position: 'absolute', bottom: '-8px', right: '-8px',
                width: '24px', height: '24px',
                borderBottom: '1.5px solid #D4AF37', borderRight: '1.5px solid #D4AF37',
                zIndex: 2,
              }} />

              {/* Photo */}
              <img
                src={PHOTO_URL}
                alt="Prajakth N Kumar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(15%) contrast(1.05)',
                  border: '1px solid #1F1F1F',
                }}
              />

              {/* Subtle gold overlay at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60px',
                  background: 'linear-gradient(to top, rgba(212,175,55,0.08), transparent)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
