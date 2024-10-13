'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs, faHtml5, faCss3Alt, faNode, faReact, faGithubSquare, faDocker, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const ProjectCard = ({ title, date, description, githubLink }: { title: string, date: string, description: string, githubLink: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link href={githubLink} passHref>
      <div className="h-full w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-gray-800 dark:text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{date}</p>
        <p className="text-gray-700 dark:text-gray-200">{description}</p>
      </div>
    </Link>
  </motion.div>
);

const ProgrammingIcons = () => (
  <div className="grid grid-cols-3 gap-4 text-2xl text-gray-800 dark:text-gray-200">
    <FontAwesomeIcon icon={faJava as IconProp} />
    <FontAwesomeIcon icon={faPython as IconProp} />
    <FontAwesomeIcon icon={faJs as IconProp} />
    <FontAwesomeIcon icon={faHtml5 as IconProp} />
    <FontAwesomeIcon icon={faCss3Alt as IconProp} />
    <FontAwesomeIcon icon={faNode as IconProp} />
    <FontAwesomeIcon icon={faReact as IconProp} />
    <FontAwesomeIcon icon={faGithubSquare as IconProp} />
    <FontAwesomeIcon icon={faDocker as IconProp} />
  </div>
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

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
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Om Mistry</h1>
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
                Hey there! 👋 I'm Om, a 20-year-old passionate computer science student at the University of British Columbia, specializing in Computer Science with a Minor in Data Science.
              </p>
              <p>
                With an eager-to-learn attitude and a keen interest in Software Development, AI, Machine Learning, and Data Analysis, I have gained valuable skills in various programming languages and technologies. I enjoy tackling complex problems and am dedicated to continuous learning in the tech field.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="max-w-3xl mx-auto">
              <ProgrammingIcons />
              <ul className="mt-8 space-y-2">
                <li>Programming: Java, Python, JavaScript, TypeScript, HTML/CSS, SQL, Node.js, React.js, Next.js, Remix, C (CUDA, OpenMP)</li>
                <li>Tools: Android Studio, IntelliJ, Eclipse, Jupyter Notebooks, Git, VSCode, Docker</li>
                <li>Soft Skills: Time Management, Teamwork, Problem-Solving, Leadership</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Gestura"
                date="January 2024"
                description="Developed a software to convert ASL to text and speech in 5 different languages using Python with OpenCV, Keras, and TensorFlow."
                githubLink="https://github.com/OM200401/Gestura"
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

        <section id="experience" className="py-20 bg-gray-200 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold">University of British Columbia</h3>
                <p className="text-xl mb-2">Collegia Assistant | Aug 2023 – Current</p>
                <ul className="list-disc list-inside">
                  <li>Managed collegium space and organized monthly events for students.</li>
                  <li>Organizing monthly events for students to participate in and meet other peers.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold">University of British Columbia</h3>
                <p className="text-xl mb-2">Software Developer Intern | May 2023 – Current</p>
                <ul className="list-disc list-inside">
                  <li>Managed a Web-App Project under my Professor as the Team Leader to develop a tool for students to be able to register into courses including other features.</li>
                  <li>Developed the user interface using TypeScript, Tailwind CSS in the Remix framework and authentication using remix-auth package.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold">University of British Columbia</h3>
                <p className="text-xl mb-2">Orientation Leader | Aug 2023 – Sept 2023</p>
                <ul className="list-disc list-inside">
                  <li>Led new students through a series of events and games to introduce them to their new campus and university.</li>
                  <li>Gave a campus tour to all the students while introducing the different resources available to them on campus.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
            <div className="max-w-md mx-auto">
              <p className="mb-4">
                <strong>Email:</strong> <a href="mailto:ommistry0124@gmail.com" className="text-blue-500 hover:underline">ommistry0124@gmail.com</a>
              </p>
              <p className="mb-4">
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/om-mistry" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Om Mistry</a>
              </p>
              <p className="mb-4">
                <strong>GitHub:</strong> <a href="https://github.com/OM200401" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">OM200401</a>
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <a href="https://www.linkedin.com/in/om-mistry" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                  <FontAwesomeIcon icon={faLinkedin as IconProp} />
                </a>
                <a href="https://github.com/OM200401" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                  <FontAwesomeIcon icon={faGithub as IconProp} />
                </a>
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