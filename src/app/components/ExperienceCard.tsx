'use client'
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  isLast?: boolean;
  accentIndex?: number;
}

const DOT_COLORS = ['border-cyan-500', 'border-violet-500', 'border-rose-400', 'border-amber-400'];
const DOT_TEXT = ['text-cyan-600 dark:text-cyan-400', 'text-violet-600 dark:text-violet-400', 'text-rose-500 dark:text-rose-400', 'text-amber-500 dark:text-amber-400'];

const TimelineCard = ({ title, company, date, responsibilities, isLast = false, accentIndex = 0 }: ExperienceCardProps) => (
  <div className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-12'}`}>
    {!isLast && (
      <div className="absolute left-[7px] top-[18px] bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-transparent" />
    )}
    <div className={`absolute left-0 top-[10px] w-[15px] h-[15px] rounded-full timeline-dot-bg border-2 ${DOT_COLORS[accentIndex % DOT_COLORS.length]} pulse-dot z-10`} />
    <div className="bento-card rounded-3xl p-6 ml-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className={`${DOT_TEXT[accentIndex % DOT_TEXT.length]} text-sm font-mono`}>{company}</p>
        </div>
        <span className="text-[10px] font-mono text-slate-400 dark:text-nexus-muted whitespace-nowrap sm:mt-1">{date}</span>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
            <span className={`${DOT_TEXT[accentIndex % DOT_TEXT.length]} mt-0.5 flex-shrink-0`}>&#9656;</span>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Data and Software Specialist',
      company: 'Spartan Controls Ltd',
      date: 'June 2026 — Present',
      responsibilities: [
        'Build custom data automations for multiple clients using industrial data management platforms including AVEVA PI, AspenTech, and Capstone dataPARC',
        'Support clients on existing data solutions deployed at their sites, troubleshooting and maintaining systems to ensure reliable operation',
        'Identify optimization opportunities and propose improvements that help clients increase revenue and streamline business operations',
        'Design and build interactive dashboards that give clients visibility into their data and business performance',
      ],
    },
    {
      title: 'Data and Software Specialist Intern',
      company: 'Spartan Controls Ltd',
      date: 'May 2024 — Aug 2025',
      responsibilities: [
        'Developed a custom data management tool and automation solutions that reduced report generation time by 70% and manual data entry errors by 60%, saving clients an estimated $50,000 annually',
        'Independently authored a technical proposal to secure and deliver a solo project while creating internal tools adopted company-wide, increasing sales team efficiency and engagement by 30%',
        'Engineered interactive dashboards for multiple operational sites, resulting in a 30% reduction in on-site visits and saving approximately 100 hours per month on manual monitoring',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'University of British Columbia',
      date: 'May 2023 — Jan 2024',
      responsibilities: [
        'Led a team of 10+ software engineers to develop a course registration tool, resulting in a 20% increase in student enrollment and a 40% reduction in registration errors through optimized authentication',
        'Implemented a responsive interface using TypeScript, Tailwind CSS, and the Remix framework, driving a 30% improvement in user satisfaction ratings',
      ],
    },
    {
      title: 'Collegia Assistant',
      company: 'University of British Columbia',
      date: 'Aug 2023 — Apr 2024',
      responsibilities: [
        'Managed collegium space and organized monthly events for students.',
        'Organizing monthly events for students to participate in and meet other peers.',
      ],
    },
    {
      title: 'Orientation Leader',
      company: 'University of British Columbia',
      date: 'Aug 2023 — Sep 2023',
      responsibilities: [
        'Led new students through a series of events and games to introduce them to their new campus and university.',
        'Gave a campus tour to all the students while introducing the different resources available to them on campus.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="tag-chip inline-flex font-mono text-xs tracking-[0.2em] uppercase text-cyan-600 dark:text-cyan-500 mb-4 px-4 py-1.5 border border-cyan-500/20 bg-cyan-500/5">
            04 // Experience
          </span>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-slate-900 dark:text-white squiggle-underline">
            Work Experience
            <svg viewBox="0 0 220 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 8 Q 27.5 0, 55 8 T 110 8 T 165 8 T 220 8" fill="none" stroke="url(#exp-squiggle)" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <linearGradient id="exp-squiggle" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
              </defs>
            </svg>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TimelineCard {...exp} isLast={index === experiences.length - 1} accentIndex={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
