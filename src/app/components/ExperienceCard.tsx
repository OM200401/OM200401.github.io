import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, date, responsibilities }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-6"
  >
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
    <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{company}</h4>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="mb-2">{responsibility}</li>
      ))}
    </ul>
  </motion.div>
);

export default function Component() {
  const experiences = [
    {
      title: "Data and Software Specialist Intern",
      company: "Spartan Controls Ltd",
      date: "May 2024 - August 2025",
      responsibilities: [
        "Developed a custom data management tool and automation solutions that reduced report generation time by 70% and manual data entry errors by 60%, saving clients an estimated $50,000 annually",
        "Independently authored a technical proposal to secure and deliver a solo project while creating internal tools adopted company-wide, increasing sales team efficiency and engagement by 30%",
        "Engineered interactive dashboards for multiple operational sites, resulting in a 30% reduction in on-site visits and saving approximately 100 hours per month on manual monitoring"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "University of British Columbia",
      date: "May 2023 - January 2024",
      responsibilities: [
        "Led a team of 10+ software engineers to develop a course registration tool, resulting in a 20% increase in student enrollment and a 40% reduction in registration errors through optimized authentication",
        "Implemented a responsive interface using TypeScript, Tailwind CSS, and the Remix framework, driving a 30% improvement in user satisfaction ratings"
      ]
    },
    {
      title: "Collegia Assistant",
      company: "University of British Columbia",
      date: "Aug 2023 - April 2024",
      responsibilities: [
        "Managed collegium space and organized monthly events for students.",
        "Organizing monthly events for students to participate in and meet other peers."
      ]
    },
    {
      title: "Orientation Leader",
      company: "University of British Columbia",
      date: "Aug 2023 - Sept 2023",
      responsibilities: [
        "Led new students through a series of events and games to introduce them to their new campus and university.",
        "Gave a campus tour to all the students while introducing the different resources available to them on campus."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}