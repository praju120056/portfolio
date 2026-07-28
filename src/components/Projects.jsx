import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';

const FEATURED_PROJECTS = [
  {
    id: 'meridian',
    number: '01',
    title: 'Meridian',
    status: 'IN DEVELOPMENT',
    description:
      'AI agent that analyzes GitHub pull request changes and sends relevant, context-aware developer updates through Slack.',
    highlights: ['AI Agents', 'Developer Tooling', 'GitHub Integrations'],
    stack: ['Python'],
    github: 'https://github.com/praju120056/Meridian',
  },
  {
    id: 'prism',
    number: '02',
    title: 'PRISM Smart Inhaler',
    status: 'IN DEVELOPMENT',
    description:
      'Acoustic audio-processing and inference pipeline for a smart inhaler, using signal processing and machine learning to analyze inhalation events.',
    highlights: ['Digital Signal Processing', 'Machine Learning', 'Embedded / Healthcare Systems'],
    stack: ['Python'],
    github: 'https://github.com/praju120056/PRISM-Smart-Inhaler',
  },
  {
    id: 'intellirepo',
    number: '03',
    title: 'IntelliRepo',
    status: 'IN DEVELOPMENT',
    description:
      'Graph-aware repository intelligence engine using AST parsing, dependency analysis, embeddings, and semantic retrieval to understand large codebases.',
    highlights: ['Code Intelligence', 'Graphs', 'AST Analysis', 'Semantic Retrieval', 'RAG'],
    stack: ['Python', 'FastAPI', 'NetworkX', 'sentence-transformers', 'ChromaDB', 'GitPython'],
    github: 'https://github.com/praju120056/IntelliRepo',
  },
  {
    id: 'zero-trust-banking',
    number: '04',
    title: 'Zero Trust Banking Engine',
    status: 'AWAITING DEPLOYMENT',
    description:
      'Security-focused banking platform implementing Zero Trust principles with identity-aware authentication, authorization, and policy enforcement.',
    highlights: [
      'FastAPI backend & PostgreSQL database',
      'Keycloak authentication / identity management',
      'OPA policy enforcement & JWT authorization',
      'React + Vite frontend with Axios interceptors',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Keycloak', 'OPA', 'JWT', 'React', 'Vite'],
    github: 'https://github.com/praju120056/banking_zta',
  },
];

const SELECTED_WORK = [
  {
    id: 'skill-exchange',
    title: 'Skill Exchange 2.0',
    status: 'COMPLETE',
    description: 'Full-stack platform enabling students to teach, learn, and exchange skills.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/praju120056/skill-exchange-2.0',
  },
  {
    id: 'llm-rag',
    title: 'LLM-Powered RAG',
    status: 'COMPLETE',
    description: 'Multi-source retrieval-augmented generation application with intelligent semantic retrieval.',
    stack: ['Python', 'LLMs', 'RAG', 'Vector Search'],
    github: 'https://github.com/praju120056/llm-powered-rag',
  },
  {
    id: 'unix-shell',
    title: 'UNIX-style Shell',
    status: 'COMPLETE',
    description: 'UNIX-inspired shell written in C supporting process creation, command execution, pipes, and I/O redirection.',
    stack: ['C', 'UNIX', 'Processes', 'Systems Programming'],
    github: 'https://github.com/praju120056/UNIX-style-shell',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function FeaturedCard({ project, index }) {
  return (
    <motion.div
      className="project-card flex flex-col justify-between"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '1rem' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: '#A0A0A0',
            }}
          >
            {project.number}
          </span>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: '#D4AF37',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              padding: '0.15rem 0.5rem',
              borderRadius: '2px',
              marginLeft: 'auto',
            }}
          >
            {project.status}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.45rem',
            fontWeight: 600,
            color: '#EAEAEA',
            lineHeight: 1.3,
            marginBottom: '0.85rem',
          }}
        >
          {project.title}
        </h3>

        <p style={{ color: '#A0A0A0', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#EAEAEA',
                marginBottom: '0.5rem',
              }}
            >
              Technical Highlights
            </p>
            <ul style={{ color: '#A0A0A0', fontSize: '0.825rem', lineHeight: 1.6, paddingLeft: '1.1rem' }}>
              {project.highlights.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.2rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {project.stack && project.stack.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
            {project.stack.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
        )}

        <div style={{ height: '1px', background: '#1F1F1F', marginBottom: '1.25rem' }} />

        <a
          id={`project-${project.id}-github-btn`}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{
            fontSize: '0.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 1rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Github size={13} />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}

function SelectedCard({ project, index }) {
  return (
    <motion.div
      className="project-card flex flex-col justify-between"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '1.5rem' }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: '#A0A0A0',
            }}
          >
            {project.status}
          </span>
        </div>

        <h4
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#EAEAEA',
            lineHeight: 1.3,
            marginBottom: '0.6rem',
          }}
        >
          {project.title}
        </h4>

        <p style={{ color: '#A0A0A0', fontSize: '0.825rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          {project.description}
        </p>
      </div>

      <div>
        {project.stack && project.stack.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
            {project.stack.map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem' }}>
                {t}
              </span>
            ))}
          </div>
        )}

        <div style={{ height: '1px', background: '#1F1F1F', marginBottom: '1rem' }} />

        <a
          id={`selected-${project.id}-github-btn`}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{
            fontSize: '0.7rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Github size={12} />
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" ref={ref} style={{ padding: '8rem 0', borderBottom: '1px solid #1F1F1F' }}>
      <div className="section-wrapper">
        {/* Featured Engineering Projects */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          FEATURED ENGINEERING
        </motion.p>
        <motion.h2
          className="section-title"
          style={{ marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>

        <div className="featured-projects-grid">
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Selected Work */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          SELECTED WORK
        </motion.p>
        <motion.h3
          className="section-title"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '2.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Completed Systems & Experiments
        </motion.h3>

        <div className="selected-work-grid">
          {SELECTED_WORK.map((project, i) => (
            <SelectedCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

