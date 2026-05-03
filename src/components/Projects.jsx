import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 'pinn-lstm',
    title: 'PINN-Based Hybrid LSTM Model for Battery SOH & RUL Prediction',
    description:
      'Physics-informed LSTM model using differential equation constraints for battery health prediction on NASA dataset.',
    stack: ['PyTorch', 'NumPy', 'SciPy', 'Matplotlib'],
    github: '#',
    highlights: [
      'Achieved RMSE: 1.01%, MAE: 0.67%',
      'Outperformed baselines by 2–3×',
      'Published in Scientific Reports (Nature Portfolio, 2026)'
    ],
  },
  {
    id: 'skill-exchange',
    title: 'Skill Exchange Platform',
    description:
      'MERN stack platform with JWT-based authentication and RESTful API deployed on Azure App Service.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: '#',
    highlights: [
      'Supports 50+ users',
      'CI/CD using GitHub Actions',
      'Secrets managed via GitHub Secrets'
    ],
  },
  {
    id: 'zero-trust-banking',
    title: 'Zero Trust Banking Engine',
    description:
      'Async backend with CRUD and JWT validation, featuring role-based views for customers, managers, and admins.',
    stack: ['React', 'FastAPI', 'PostgreSQL'],
    github: '#',
    highlights: [
      'React + Vite frontend',
      'Keycloak for authentication',
      'OPA for policy enforcement',
      'Axios interceptors for JWT injection'
    ],
  },
  {
    id: 'more-projects',
    label: 'Archive',
    title: 'More Projects',
    description: 'Additional systems, experiments, and smaller projects.',
    stack: [],
    github: 'https://github.com/praju120056',
    ctaText: 'View GitHub',
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
          {project.label || `Project_${String(index + 1).padStart(2, '0')}`}
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
        <p style={{ color: '#A0A0A0', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          {project.description}
        </p>
        {project.highlights && project.highlights.length > 0 && (
          <>
            <p style={{ color: '#EAEAEA', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Key Highlights
            </p>
            <ul style={{ color: '#A0A0A0', fontSize: '0.875rem', lineHeight: 1.7, paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
              {project.highlights.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Tech stack */}
      {project.stack && project.stack.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
          {project.stack.map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      )}

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
        {project.ctaText || 'GitHub'}
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
