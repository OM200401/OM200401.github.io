'use client'
import Image from 'next/image';
import Link from 'next/link';
import ExperienceCard from '@/app/components/ExperienceCard';
import ContactForm from './components/ContactForm';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs, faHtml5, faCss3Alt, faNode, faReact, faGithubSquare, faDocker, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCog, faDatabase, faEnvelope, faFire, faLeaf, faMicrochip, faMoon, faServer, faWind } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, date, description, githubLink, highlights }: { title: string, date: string, description?: string, githubLink: string, highlights?: string[] }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link href={githubLink} passHref>
      <div className="h-full w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-gray-800 dark:text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{date}</p>
        {description && <p className="text-gray-700 dark:text-gray-200 mb-3">{description}</p>}
        {highlights && (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
            {highlights.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  </motion.div>
);

const SkillIcon = ({ icon, name }: { icon: IconProp, name: string }) =>(
  <motion.div
    className='flex flex-col items-center'
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.95}}
  >
    <FontAwesomeIcon icon={icon as IconProp} className='text-4xl mb-2'/>
    <span className='text-sm text-center'>{name}</span>
  </motion.div>
);

const skills = [
  { icon: faReact, name: "React" },
  { icon: faPython, name: "Python" },
  { icon: faJava, name: "Java" },
  { icon: faJs, name: "JavaScript" },
  { icon: faCode, name: "TypeScript" },
  { icon: faHtml5, name: "HTML5" },
  { icon: faCss3Alt, name: "CSS3" },
  { icon: faNode, name: "Node.js" },
  { icon: faGithub, name: "Git" },
  { icon: faDocker, name: "Docker" },
  { icon: faDatabase, name: "SQL" },
  { icon: faMicrochip, name: "CUDA" },
  { icon: faCog, name: "OpenMP" },
  { icon: faWind, name: "Tailwind CSS" },
  { icon: faLeaf, name: "NextJS" },
  { icon: faMoon, name: "AstroJS" },
  { icon: faFire, name: "Lua" },
  { icon: faServer, name: "MongoDB" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const calculateAge = (birthday: string) => {
      const birthDate = new Date(birthday);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };

    setAge(calculateAge('2004-01-01'));
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Om Mistry</Link>
            <div className="flex items-center space-x-4">
              <Link href="#about" className="hover:text-blue-500">About</Link>
              <Link href="#projects" className="hover:text-blue-500">Projects</Link>
              <Link href="#experience" className="hover:text-blue-500">Experience</Link>
              <Link href="#contact" className="hover:text-blue-500">Contact</Link>
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I&apos;m Om Mistry</h1>
                <p className="text-xl md:text-2xl mb-8">Full-Stack Developer</p>
                <Link href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                  Get in touch
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Om Mistry"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4">
                Hey there! 👋 I&apos;m Om, a {age}-year-old passionate computer science student at the University of British Columbia, specializing in Computer Science with a Minor in Data Science.</p>
              <p>
                With an eager-to-learn attitude and a keen interest in Software Development, AI, Machine Learning, and Data Analysis, I have gained valuable skills in various programming languages and technologies. I enjoy tackling complex problems and am dedicated to continuous learning in the tech field.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <motion.div 
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillIcon icon={skill.icon as IconProp} name={skill.name} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tools: Android Studio, IntelliJ, Eclipse, Jupyter Notebooks, VSCode</li>
                <li>Soft Skills: Time Management, Teamwork, Problem-Solving, Leadership</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="CodeAncestry 🏆"
                date="January 2026"
                description="Winner: Best Developer Tool (Warp) & Best Use of Snowflake API at nwPlus 2026!"
                highlights={[
                  "Engineered a RAG-based system using Vector Embeddings to process 100+ git commits",
                  "Enabled semantic retrieval of codebase history with 90%+ relevance",
                  "Improved response latency by 40% using Gemini Flash classifier"
                ]}
                githubLink="https://github.com/OM200401/nwHacks-2026"
              />
              <ProjectCard
                title="Automated Apple Quality Analysis System"
                date="September 2025 - April 2026"
                description="Honors Thesis under Dr. Ramon Lawrence for Agriculture and Agri-Food Canada. Developed an automated image processing system using YOLOv11 (99% precision, 100% recall) and ResNet to analyze apple fruit quality traits. Built a robust data pipeline with PostgreSQL for scalable postharvest evaluation."
                githubLink="https://github.com/OM200401"
              />
              <ProjectCard
                title="Gestura 🥈"
                date="January 2024"
                description="2nd Place Winner at BCHacks 2024!"
                highlights={[
                  "Developed software to convert ASL to text and speech in 5 different languages",
                  "Built using Python with OpenCV, Keras, and TensorFlow for real-time gesture recognition"
                ]}
                githubLink="https://github.com/OM200401/Gestura"
              />
              <ProjectCard
                title='WCUCC 2025'
                date='Present'
                description='Part of the Website Development Team for the Western Canadian Undergraduate Chemistry Conference 2025 which is to be hosted at UBCO the upcoming summer'
                githubLink='https://wcucc.ca'
              />
              <ProjectCard 
                title="Discourse E-Learning Platform"
                date="April 2024"
                description='The project was developed as part of the COSC 310 (Software Engineering Course) and it focuses on Agile Development principles and the Software Engineering Lifecycle. It was developed using NextJS and TailwindCSS for the frontend and Firebase for the Backend Development. We also used Github Actions and Vercel to develop pipelines and host our platform online.'
                githubLink='https://github.com/OM200401/Discord-Mods'
              />
                <ProjectCard
                title="S-MART"
                date="December 2023"
                description='The project aims to develop a robust and user-friendly grocery shopping platform named "S-MART." This platform was built using Node.js, CSS, Docker and Express alongside SQL for the Backend Development.'
                githubLink='https://github.com/OM200401/COSC304_project'
              />
              <ProjectCard
                title="Grocery Shopping Website"
                date="December 2023"
                description="Developed a full-stack grocery website using Node.js, HTML/CSS, MySQL, implementing features like product addition, order tracking, and authentication."
                githubLink="https://github.com/OM200401/COSC304_Project"
              />
              <ProjectCard
                title="Python Prediction Model"
                date="January 2023 – April 2023"
                description="Trained a Python model for data analysis on a Gun Violence Dataset using libraries like Pandas, Seaborn, and Matplotlib."
                githubLink="https://github.com/ubco-W2022T2-data301/project-group09"
              />
            </div>
          </div>
        </section>

        <ExperienceCard/>

        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Get in Touch</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faEnvelope as IconProp} className="mr-2 w-5" />
                      <a href="mailto:ommistry0124@gmail.com" className="hover:text-blue-500">ommistry0124@gmail.com</a>
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faLinkedin as IconProp} className="mr-2 w-5" />
                      <a href="https://www.linkedin.com/in/om-mistry" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Om Mistry</a>
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faGithub as IconProp} className="mr-2 w-5" />
                      <a href="https://github.com/OM200401" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">OM200401</a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Connect with Me</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 Om Mistry. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}