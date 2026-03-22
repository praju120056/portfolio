import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const CONTACTS = [
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 'prajakth.kumar@gmail.com',
    href: 'mailto:prajakth.kumar@gmail.com',
  },
  {
    id: 'contact-github',
    icon: Github,
    label: 'GitHub',
    value: 'github.com/praju120056',
    href: 'https://github.com/praju120056/',
  },
  {
    id: 'contact-linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Prajakth N Kumar',
    href: 'https://www.linkedin.com/in/prajakth-n-kumar-0092902a6/',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem 0' }}>
      <div className="section-wrapper">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.p>
        <motion.h2
          className="section-title"
          style={{ marginBottom: '1rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#A0A0A0', fontSize: '0.95rem', marginBottom: '3.5rem', maxWidth: '480px' }}
        >
          Open to research collaborations, engineering discussions, and new opportunities.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '540px' }}>
          {CONTACTS.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.id}
                id={contact.id}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-card"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #1F1F1F',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} color="#D4AF37" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#A0A0A0',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {contact.label}
                  </p>
                  <p style={{ color: '#EAEAEA', fontSize: '0.9rem' }}>{contact.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
