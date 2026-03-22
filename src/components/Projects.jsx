import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 'facial-emotion',
    title: 'Facial Emotion Recognition Framework',
    description:
      'A deep learning framework for real-time facial emotion detection using CNNs, capable of identifying multiple emotional states from live video streams with high accuracy.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'Computer Vision', 'CNN'],
    github: 'https://github.com/praju120056/Facial-Emotion-Recognition-Framework',
  },
  {
    id: 'unix-shell',
    title: 'UNIX Style Shell',
    description:
      'A custom UNIX-style command-line shell implemented in C, supporting piping, redirection, signal handling, and built-in commands with process management.',
    stack: ['C', 'UNIX', 'Systems Programming', 'Process Management'],
    github: 'https://github.com/praju120056/UNIX-style-shell',
  },
  {
    id: 'skill-exchange',
    title: 'Skill Exchange 2.0',
    description:
      'A full-stack peer-to-peer skill exchange platform with matchmaking, real-time messaging, and user profile management built on the MERN stack.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: 'https://github.com/praju120056/skill-exchange-2.0',
  },
  {
    id: 'neococoon',
    title: 'NeoCocoon',
    description:
      'An IoT-based smart incubator system for neonatal care, using microcontrollers and sensors to monitor and regulate temperature, humidity, and vital parameters.',
    stack: ['Embedded C', 'Raspberry Pi', 'Sensors', 'IoT', 'Serial Communication'],
    github: 'https://github.com/praju120056/neococoon',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#A0A0A0',
            marginBottom: '0.75rem',
          }}
        >
          Project_{String(index + 1).padStart(2, '0')}
        </p>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.35rem',
            fontWeight: 600,
            color: '#EAEAEA',
            lineHeight: 1.3,
            marginBottom: '1rem',
          }}
        >
          {project.title}
        </h3>
        <p style={{ color: '#A0A0A0', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
        {project.stack.map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* Bottom line */}
      <div style={{ height: '1px', background: '#1F1F1F', marginBottom: '1.5rem' }} />

      <a
        id={`project-${project.id}-github-btn`}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost"
        style={{ fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1rem', position: 'relative', zIndex: 2 }}
      >
        <Github size={13} />
        GitHub
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" ref={ref} style={{ padding: '8rem 0', borderBottom: '1px solid #1F1F1F' }}>
      <div className="section-wrapper">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.p>
        <motion.h2
          className="section-title"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What I've Built
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
