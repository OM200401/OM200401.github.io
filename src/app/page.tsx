'use client'
import Image from 'next/image';
import Link from 'next/link';
import ExperienceSection from '@/app/components/ExperienceCard';
import ContactForm from './components/ContactForm';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava, faPython, faJs, faHtml5, faCss3Alt, faNode, faReact,
  faDocker, faLinkedin, faGithub
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCode, faCog, faDatabase, faEnvelope, faFire, faLeaf,
  faMicrochip, faMoon, faServer, faWind, faArrowRight, faArrowDown,
  faSun, faLocationDot, faGraduationCap, faBrain, faStar
} from '@fortawesome/free-solid-svg-icons';

/* ===== Accent cycle ===== */

const ACCENTS = [
  { text: 'text-cyan-600 dark:text-cyan-400', bar: 'from-cyan-500 to-cyan-300', bg: 'bg-cyan-500/10', ring: 'ring-cyan-500/30' },
  { text: 'text-violet-600 dark:text-violet-400', bar: 'from-violet-500 to-violet-300', bg: 'bg-violet-500/10', ring: 'ring-violet-500/30' },
  { text: 'text-rose-500 dark:text-rose-400', bar: 'from-rose-500 to-rose-300', bg: 'bg-rose-500/10', ring: 'ring-rose-500/30' },
  { text: 'text-amber-500 dark:text-amber-400', bar: 'from-amber-500 to-amber-300', bg: 'bg-amber-500/10', ring: 'ring-amber-500/30' },
];

/* ===== Sub-components ===== */

const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-16 text-center">
    <span className="tag-chip font-mono text-xs tracking-[0.2em] uppercase text-cyan-600 dark:text-cyan-500 mb-4 px-4 py-1.5 border border-cyan-500/20 bg-cyan-500/5">
      {label}
    </span>
    <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-slate-900 dark:text-white squiggle-underline">
      {title}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 8 Q 25 0, 50 8 T 100 8 T 150 8 T 200 8" fill="none" stroke="url(#squiggle-gradient)" strokeWidth="4" strokeLinecap="round" />
        <defs>
          <linearGradient id="squiggle-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
      </svg>
    </h2>
  </div>
);

const ProjectCard = ({ title, date, description, githubLink, highlights, techStack, accentIndex }: {
  title: string;
  date: string;
  description?: string;
  githubLink: string;
  highlights?: string[];
  techStack?: string[];
  accentIndex: number;
}) => {
  const accent = ACCENTS[accentIndex % ACCENTS.length];
  return (
    <motion.div
      whileHover={{ y: -6, rotate: accentIndex % 2 === 0 ? -0.5 : 0.5 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="h-full"
    >
      <Link href={githubLink} passHref target="_blank" rel="noopener noreferrer">
        <div className="bento-card scan-line relative overflow-hidden h-full rounded-3xl p-6 group">
          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accent.bar} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="flex items-start justify-between mb-3 gap-3">
            <h3 className={`text-lg font-bold text-slate-900 dark:text-white group-hover:${accent.text} transition-colors`}>
              {title}
            </h3>
            <span className="text-[10px] font-mono text-slate-400 dark:text-nexus-muted whitespace-nowrap mt-1">
              {date}
            </span>
          </div>
          {description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">{description}</p>
          )}
          {highlights && (
            <ul className="space-y-1.5 mb-4">
              {highlights.map((item, index) => (
                <li key={index} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                  <span className={`${accent.text} mt-0.5 flex-shrink-0`}>&#9656;</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-200/50 dark:border-nexus-border/50">
              {techStack.map((tech, index) => (
                <span key={index} className="tag-chip text-[10px] px-2 py-0.5 text-cyan-700 dark:text-cyan-400 bg-cyan-500/5 border border-cyan-500/15">
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="absolute bottom-5 right-5 w-7 h-7 rounded-full bg-slate-100 dark:bg-nexus-elevated flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300">
            <FontAwesomeIcon icon={faArrowRight as IconProp} className="w-3 h-3 text-slate-500 dark:text-slate-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const SkillIcon = ({ icon, name }: { icon: IconProp; name: string }) => (
  <motion.div
    className="flex flex-col items-center gap-2 p-4 rounded-2xl bento-card group cursor-default"
    whileHover={{ scale: 1.08, rotate: -3, y: -3 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
  >
    <FontAwesomeIcon
      icon={icon}
      className="text-2xl text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300"
    />
    <span className="text-xs font-mono text-slate-500 dark:text-nexus-muted group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
      {name}
    </span>
  </motion.div>
);

const StatCard = ({ icon, value, label, accentIndex }: { icon: IconProp; value: string; label: string; accentIndex: number }) => {
  const accent = ACCENTS[accentIndex % ACCENTS.length];
  return (
    <motion.div
      className="bento-card rounded-3xl p-6 flex flex-col gap-3"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: accentIndex * 0.08 }}
      whileHover={{ rotate: accentIndex % 2 === 0 ? -1.5 : 1.5 }}
    >
      <div className={`w-11 h-11 rounded-2xl ${accent.bg} flex items-center justify-center`}>
        <FontAwesomeIcon icon={icon} className={`w-4 h-4 ${accent.text}`} />
      </div>
      <div>
        <p className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{value}</p>
        <p className="text-xs text-slate-400 dark:text-nexus-muted font-mono mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
};

const TechMarquee = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="marquee-group overflow-hidden w-full">
    <div
      className="marquee-track py-2"
      style={reverse ? { animationDirection: 'reverse' } : undefined}
    >
      {[...items, ...items].map((item, index) => (
        <span
          key={index}
          className="tag-chip mx-2 px-4 py-2 text-sm whitespace-nowrap bg-white/70 dark:bg-nexus-elevated/70 border border-slate-200/60 dark:border-nexus-border/60 text-slate-500 dark:text-slate-400"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

/* ===== Data ===== */

const skills = [
  { icon: faReact, name: 'React' },
  { icon: faPython, name: 'Python' },
  { icon: faJava, name: 'Java' },
  { icon: faJs, name: 'JavaScript' },
  { icon: faCode, name: 'TypeScript' },
  { icon: faHtml5, name: 'HTML5' },
  { icon: faCss3Alt, name: 'CSS3' },
  { icon: faNode, name: 'Node.js' },
  { icon: faGithub, name: 'Git' },
  { icon: faDocker, name: 'Docker' },
  { icon: faDatabase, name: 'SQL' },
  { icon: faMicrochip, name: 'CUDA' },
  { icon: faCog, name: 'OpenMP' },
  { icon: faWind, name: 'Tailwind' },
  { icon: faLeaf, name: 'Next.js' },
  { icon: faMoon, name: 'Astro' },
  { icon: faFire, name: 'Lua' },
  { icon: faServer, name: 'MongoDB' },
];

const marqueeWords = [
  'Software Development', 'Artificial Intelligence', 'Machine Learning', 'Computer Vision',
  'Full-Stack', 'React & Next.js', 'Python', 'RAG Systems', 'Cloud & Docker', 'Data Science',
];

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

/* ===== Main Page ===== */

export default function Home() {
  const [age, setAge] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setDarkMode(stored === 'true');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const calculateAge = (birthday: string) => {
      const birthDate = new Date(birthday);
      const today = new Date();
      let calcAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calcAge--;
      }
      return calcAge;
    };
    setAge(calculateAge('2004-01-01'));
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-nexus-bg text-slate-800 dark:text-nexus-text min-h-screen overflow-x-hidden transition-colors duration-300">

      {/* ===== NAVIGATION ===== */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className={`flex justify-between items-center gap-4 rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 dark:bg-nexus-bg/80 backdrop-blur-xl border border-slate-200/60 dark:border-nexus-border/60 shadow-lg shadow-slate-900/5'
              : 'bg-white/50 dark:bg-nexus-bg/40 backdrop-blur-md border border-transparent'
          }`}
        >
          <Link href="/" className="font-mono text-sm tracking-widest text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
            OM.DEV
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link px-3 py-1.5 rounded-full text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-nexus-elevated transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-nexus-elevated transition-all duration-300"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={(darkMode ? faSun : faMoon) as IconProp} className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white/95 dark:bg-nexus-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navLinks.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-grid overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="blob-float absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 blob-shape blur-[90px] pointer-events-none" />
        <div className="blob-float absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 blob-shape blur-[90px] pointer-events-none" style={{ animationDelay: '-4s' }} />
        <div className="blob-float absolute top-1/2 right-1/3 w-64 h-64 bg-rose-400/10 dark:bg-rose-400/5 blob-shape blur-[80px] pointer-events-none" style={{ animationDelay: '-2s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 pt-24 md:pt-0">
          <div className="md:w-3/5 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="tag-chip inline-flex font-mono text-sm text-cyan-600 dark:text-cyan-500 mb-5 px-4 py-1.5 border border-cyan-500/20 bg-cyan-500/5">
                <FontAwesomeIcon icon={faStar as IconProp} className="w-3 h-3" />
                hello_world
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                I&apos;m{' '}
                <span className="relative inline-block squiggle-underline">
                  <span className="gradient-text">Om Mistry</span>
                  <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 9 Q 37.5 1, 75 9 T 150 9 T 225 9 T 300 9" fill="none" stroke="url(#hero-squiggle)" strokeWidth="5" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="hero-squiggle" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#fb7185" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-6 font-light">
                Data and Software Specialist
              </p>
              <p className="text-slate-400 dark:text-slate-500 mb-10 max-w-lg leading-relaxed mx-auto md:mx-0">
                UBC Computer Science grad working at Spartan Controls in Calgary, specializing in
                Software Development, AI, and Machine Learning. Building tools that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="#projects"
                  className="btn-glow px-8 py-3 rounded-full text-white font-medium text-sm tracking-wide inline-flex items-center gap-2 justify-center"
                >
                  View Projects
                  <FontAwesomeIcon icon={faArrowDown as IconProp} className="w-3 h-3" />
                </Link>
                <Link
                  href="#contact"
                  className="btn-outline-glow px-8 py-3 rounded-full font-medium text-sm tracking-wide inline-flex items-center gap-2 justify-center"
                >
                  Get in Touch
                  <FontAwesomeIcon icon={faArrowRight as IconProp} className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="relative"
            >
              <div className="profile-glow">
                <Image
                  src="/profile.jpg"
                  alt="Om Mistry"
                  width={280}
                  height={280}
                  className="relative z-10 object-cover"
                  style={{ borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' }}
                  priority
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white dark:bg-nexus-elevated shadow-lg flex items-center justify-center text-sm"
                animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                ⚡
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-6 w-7 h-7 rounded-full bg-white dark:bg-nexus-elevated shadow-lg flex items-center justify-center text-sm"
                animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                💻
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-cyan-400/80"
                animate={{ x: [-3, 3, -3], y: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-5 h-8 rounded-full border border-slate-300 dark:border-nexus-border flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-cyan-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ===== TICKER STRIP ===== */}
      <div className="py-5 border-y border-slate-200/50 dark:border-nexus-border/50 bg-white/40 dark:bg-nexus-surface/30">
        <TechMarquee items={marqueeWords} />
      </div>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="01 // About" title="About Me" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              className="bento-card rounded-3xl p-8 md:p-10 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Hey there! I&apos;m Om, a {age}-year-old passionate software developer. I graduated with Honours from the{' '}
                <span className="text-cyan-600 dark:text-cyan-400">University of British Columbia</span> with a
                Bachelor&apos;s in Computer Science and a Minor in Data Science, and now work as a{' '}
                <span className="text-slate-800 dark:text-white font-medium">Data and Software Specialist</span> at{' '}
                <span className="text-slate-800 dark:text-white font-medium">Spartan Controls</span> in Calgary, AB.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                With an eager-to-learn attitude and a keen interest in{' '}
                <span className="text-slate-800 dark:text-white font-medium">Software Development</span>,{' '}
                <span className="text-slate-800 dark:text-white font-medium">AI</span>,{' '}
                <span className="text-slate-800 dark:text-white font-medium">Machine Learning</span>, and{' '}
                <span className="text-slate-800 dark:text-white font-medium">Data Analysis</span>, I have gained valuable
                skills in various programming languages and technologies. I enjoy tackling complex
                problems and am dedicated to continuous learning in the tech field.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
              <StatCard icon={faGraduationCap as IconProp} value="UBC" label="B.Sc. Computer Science, Hons." accentIndex={0} />
              <StatCard icon={faBrain as IconProp} value="AI / ML" label="Primary Focus" accentIndex={1} />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-5">
            <StatCard icon={faLocationDot as IconProp} value="Calgary, AB" label="Based In" accentIndex={2} />
            <StatCard icon={faStar as IconProp} value="4.00 GPA" label="Dean's List" accentIndex={3} />
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-slate-100/50 dark:bg-nexus-surface/50" />
        <div className="relative max-w-5xl mx-auto px-6">
          <SectionHeading label="02 // Skills" title="Tech Stack" />
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SkillIcon icon={skill.icon as IconProp} name={skill.name} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 bento-card rounded-3xl p-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-mono text-sm text-cyan-600 dark:text-cyan-500 mb-3">{"// additional_skills"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">&#9656;</span>
                <span>
                  <span className="text-slate-700 dark:text-slate-300">Tools:</span> Android Studio, IntelliJ, Eclipse, Jupyter Notebooks, VSCode
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">&#9656;</span>
                <span>
                  <span className="text-slate-700 dark:text-slate-300">Soft Skills:</span> Time Management, Teamwork, Problem-Solving, Leadership
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading label="03 // Projects" title="Featured Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard
              accentIndex={0}
              title="CodeAncestry"
              date="Jan 2026"
              description="Winner: Best Developer Tool (Warp) & Best Use of Snowflake API at nwPlus 2026!"
              highlights={[
                'Engineered a RAG-based system using Vector Embeddings to process 100+ git commits',
                'Enabled semantic retrieval of codebase history with 90%+ relevance',
                'Improved response latency by 40% using Gemini Flash classifier',
              ]}
              techStack={['Python', 'RAG', 'Vector Embeddings', 'Gemini API', 'Snowflake']}
              githubLink="https://github.com/OM200401/nwHacks-2026"
            />
            <ProjectCard
              accentIndex={1}
              title="UBComms"
              date="Feb — Mar 2026"
              description="Push-to-Talk satellite communication system built at the SKYTRAC Hackathon 2026. Real-time voice and text messaging for remote teams over satellite networks."
              highlights={[
                'Real-time voice via SIP/VoIP gateway with Codec2 compression for satellite bandwidth',
                'Cross-platform web and React Native apps with GPS tracking and talkgroup management',
                'Full-stack monorepo: PostgreSQL, Redis, BullMQ, WebSocket, and Go SIP gateway',
              ]}
              techStack={['React', 'React Native', 'Go', 'TypeScript', 'PostgreSQL', 'Redis', 'SIP/VoIP']}
              githubLink="https://github.com/OM200401"
            />
            <ProjectCard
              accentIndex={2}
              title="Apple Quality Analysis System"
              date="Sep 2025 — Apr 2026"
              description="Honors Thesis under Dr. Ramon Lawrence for Agriculture and Agri-Food Canada. Automated image processing using YOLOv11 (99% precision, 100% recall) and ResNet for apple fruit quality analysis."
              techStack={['Python', 'YOLOv11', 'ResNet', 'PostgreSQL', 'Computer Vision']}
              githubLink="https://github.com/OM200401"
            />
            <ProjectCard
              accentIndex={3}
              title="Gestura"
              date="Jan 2024"
              description="2nd Place Winner at BCHacks 2024!"
              highlights={[
                'Developed software to convert ASL to text and speech in 5 languages',
                'Built with Python, OpenCV, Keras, and TensorFlow for real-time gesture recognition',
              ]}
              techStack={['Python', 'OpenCV', 'TensorFlow', 'Keras', 'ASL Recognition']}
              githubLink="https://github.com/OM200401/Gestura"
            />
            <ProjectCard
              accentIndex={0}
              title="WCUCC 2025"
              date="Present"
              description="Part of the Website Development Team for the Western Canadian Undergraduate Chemistry Conference 2025."
              techStack={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']}
              githubLink="https://wcucc.ca"
            />
            <ProjectCard
              accentIndex={1}
              title="Discourse E-Learning Platform"
              date="Apr 2024"
              description="Full-stack e-learning platform developed as part of COSC 310, focusing on Agile Development principles and the Software Engineering Lifecycle."
              techStack={['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Firebase', 'Vercel']}
              githubLink="https://github.com/OM200401/Discord-Mods"
            />
            <ProjectCard
              accentIndex={2}
              title="S-MART"
              date="Dec 2023"
              description="A robust grocery shopping platform built with Node.js, Express, Docker, and SQL."
              techStack={['Node.js', 'Express', 'SQL', 'Docker', 'CSS']}
              githubLink="https://github.com/OM200401/COSC304_project"
            />
            <ProjectCard
              accentIndex={3}
              title="Grocery Shopping Website"
              date="Dec 2023"
              description="Full-stack grocery website with product addition, order tracking, and authentication."
              techStack={['Node.js', 'HTML', 'CSS', 'MySQL']}
              githubLink="https://github.com/OM200401/COSC304_Project"
            />
            <ProjectCard
              accentIndex={0}
              title="Python Prediction Model"
              date="Jan — Apr 2023"
              description="Trained a Python model for data analysis on a Gun Violence Dataset using Pandas, Seaborn, and Matplotlib."
              techStack={['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis']}
              githubLink="https://github.com/ubco-W2022T2-data301/project-group09"
            />
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <ExperienceSection />

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-slate-100/50 dark:bg-nexus-surface/50" />
        <div className="relative max-w-4xl mx-auto px-6">
          <SectionHeading label="05 // Contact" title="Get In Touch" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bento-card rounded-3xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                I&apos;m always open to new opportunities and collaborations.
                Whether you have a project in mind or just want to say hi, feel free to reach out.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:ommistry0124@gmail.com"
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span className="social-icon">
                    <FontAwesomeIcon icon={faEnvelope as IconProp} className="w-4 h-4" />
                  </span>
                  <span className="text-sm">ommistry0124@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/om-mistry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin as IconProp} className="w-4 h-4" />
                  </span>
                  <span className="text-sm">Om Mistry</span>
                </a>
                <a
                  href="https://github.com/OM200401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span className="social-icon">
                    <FontAwesomeIcon icon={faGithub as IconProp} className="w-4 h-4" />
                  </span>
                  <span className="text-sm">OM200401</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bento-card rounded-3xl p-6"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 border-t border-slate-200/50 dark:border-nexus-border/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-slate-400 dark:text-nexus-muted">
            &copy; {new Date().getFullYear()} Om Mistry
          </span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/OM200401" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-nexus-muted hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <FontAwesomeIcon icon={faGithub as IconProp} className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/om-mistry" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-nexus-muted hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin as IconProp} className="w-4 h-4" />
            </a>
            <a href="mailto:ommistry0124@gmail.com" className="text-slate-400 dark:text-nexus-muted hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <FontAwesomeIcon icon={faEnvelope as IconProp} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
