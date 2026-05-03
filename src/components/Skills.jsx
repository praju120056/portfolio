import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SKILLS = [
  {
    category: 'Core Programming',
    items: ['C', 'C++', 'Python', 'SQL'],
  },
  {
    category: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Cloud & Networking',
    items: ['Google Cloud Platform (GCP)', 'Oracle Cloud Infrastructure (OCI)', 'TCP/IP', 'DNS'],
  },
  {
    category: 'Tools & Technologies',
    items: ['React', 'PyTorch', 'Git'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" ref={ref} style={{ padding: '8rem 0', borderBottom: '1px solid #1F1F1F' }}>
      <div className="section-wrapper">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Capabilities
        </motion.p>
        <motion.h2
          className="section-title"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills & Tools
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: '2rem',
                padding: '2rem 0',
                borderBottom: '1px solid #1F1F1F',
                alignItems: 'start',
              }}
            >
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#A0A0A0',
                  paddingTop: '0.25rem',
                }}
              >
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
