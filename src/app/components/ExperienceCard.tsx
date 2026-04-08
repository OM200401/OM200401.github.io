'use client'
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  isLast?: boolean;
}

const TimelineCard = ({ title, company, date, responsibilities, isLast = false }: ExperienceCardProps) => (
  <div className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-12'}`}>
    {!isLast && (
      <div className="absolute left-[7px] top-[18px] bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-transparent" />
    )}
    <div className="absolute left-0 top-[10px] w-[15px] h-[15px] rounded-full timeline-dot-bg border-2 border-cyan-500 pulse-dot z-10" />
    <div className="glass-card rounded-xl p-6 ml-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-1">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-mono">{company}</p>
        </div>
        <span className="text-[10px] font-mono text-slate-400 dark:text-nexus-muted whitespace-nowrap sm:mt-1">{date}</span>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
            <span className="text-cyan-500 mt-0.5 flex-shrink-0">&#9656;</span>
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
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-600 dark:text-cyan-500 mb-3 block">
            04 // Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
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
              <TimelineCard {...exp} isLast={index === experiences.length - 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
