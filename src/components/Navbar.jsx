import { motion } from 'framer-motion';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1F1F1F',
        padding: '1.2rem 2rem',
      }}
    >
      <div className="section-wrapper flex items-center justify-between">
        <span
          style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#EAEAEA', letterSpacing: '0.02em' }}
        >
          PNK
        </span>
        <div className="flex items-center gap-8">
          {[
            { label: 'Research', id: 'research' },
            { label: 'Projects', id: 'projects' },
            { label: 'Skills', id: 'skills' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} className="nav-link" style={{ background: 'none', border: 'none' }}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
