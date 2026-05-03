import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye } from 'lucide-react';
import resume from '../assets/resume.pdf';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="resume" ref={ref} style={{ padding: '8rem 0', borderBottom: '1px solid #1F1F1F' }}>
      <div className="section-wrapper">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Résumé
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Credentials & Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: '#A0A0A0', fontSize: '0.9rem', marginTop: '1rem', maxWidth: '420px' }}
            >
              Available for research collaborations, engineering roles, and consulting opportunities.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              id="view-resume-btn"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.85rem',
                padding: '0.85rem 2rem',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Eye size={15} />
              View Résumé
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
