import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs, faHtml5, faCss3Alt, faNode, faReact, faGithubSquare, faDocker ,faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const ProjectCard = ({title, date, description, githubLink }: {title: string, date: string, description: string, githubLink: string }) => (
  <Link href={githubLink} passHref target="_blank" rel="noopener noreferrer">
    <div className="h-full w-full bg-blue-400 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-black mb-4 font-semibold">{date}</p>
      <p className="text-black font-semibold">{description}</p>
    </div>
</Link>
);

// const ProgrammingIcons = () => (
//   <div className="grid grid-cols-3 gap-4 text-2xl text-gray-800">
//     <FontAwesomeIcon icon={faJava as IconProp} color="#007396" />
//     <FontAwesomeIcon icon={faPython} color="#3776AB" />
//     <FontAwesomeIcon icon={faJs} color="#F7DF1E" />
//     <FontAwesomeIcon icon={faHtml5} color="#E44D26" />
//     <FontAwesomeIcon icon={faCss3Alt} color="#1572B6" />
//     <FontAwesomeIcon icon={faNode} color="#8CC84B" />
//     <FontAwesomeIcon icon={faReact} color="#61DAFB" />
//     <FontAwesomeIcon icon={faGithubSquare} color="black" />
//     <FontAwesomeIcon icon={faDocker} color="#2496ED" />
//   </div>
// );

export default function Home() {
  return (
    <div>
      <section id='1' className="grid grid-cols-1 md:grid-cols-2 h-screen bg-gray-500">
        {/* Left side */}
        <div className="relative flex justify-center items-center ml-80">
          <div className='text-black relative'>
            <p className='text-7xl font-mono'>Hi, I am </p>
            <p className='text-7xl font-extrabold font-serif'>
              Om Mistry
            </p>
            <div className="bg-blue-400 pl-24 pt-5 pb-5 pr-24 mt-7 rounded-lg text-white text-center">
              <p className='text-3xl font-semibold font-serif'>
                Full-Stack Developer
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='relative flex justify-center items-center'>
          <div className="relative top-20 md:relative w-fit h-fit overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section id='2' className="grid justify-center items-center h-screen bg-gray-600">
        <div className='container mx-auto'>
          <h2 className='text-5xl font-semibold mb-8'>WHO AM I </h2>
          <p className='text-3xl text-white font-semibold'>
            Hey there ! 👋I am <strong>Om</strong>, a 20 year old passionate computer science student at the <strong>University of British Columbia</strong>, specializing in  Computer Science with a Minor in Data Science.
          </p>
          <p className='text-3xl text-white font-semibold'>
            With an eager to learn persona and a keen interest in Software development, AI, Machine Learning, and Data Analysis, I have gained valuable skills in various programming languages and technologies. I enjoy tackling complex problems and am dedicated to continuous learning in the tech field.
          </p>
        </div>
      </section>

      <section id='3' className="py-16 bg-gray-500">
        <div className='container mx-auto'>
          <h2 className='text-5xl font-bold mb-8'>Summary</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-3xl font-bold">Education</h3>
              <p className="text-black font-semibold text-2xl"> 
                University of British Columbia, Kelowna, BC <br />
                B.S. Major in Computer Science and Minor in Data Science <br />
                Expected Graduation, May 2025
              </p>
              <p className="text-black font-extrabold text-2xl"> Dean’s List</p>
              <p className="text-black text-2xl">
                Relevant Coursework: Data Structures & Algorithms, Machine Learning, Web Development, Database Development, Data Analytics,
                Discrete Math, Object Oriented Programming, HCI, Software Engineering
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Skills</h3>
              <ul className="list-disc list-inside text-black">
              <li className='text-2xl font-semibold '>Programming: Java, Python, JavaScript, Typescript, HTML/CSS, SQL, Node.js, React.js, Next.js, Remix, C (CUDA, OPENMP)</li>
                {/* <ProgrammingIcons/> */}
                
                <li className='text-2xl font-semibold'>Tools: Android Studio, IntelliJ, Eclipse, Jupyter Notebooks, Git, VSCode, Docker</li>
                <li className='text-2xl font-semibold'>Soft Skills: Time Management, Teamwork, Problem-Solving, Leadership, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='4' className="py-16 bg-gray-600">
        <div className='container mx-auto'>
          <h2 className='text-5xl font-bold mb-8'>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
              title="Gestura"
              date="Janurary 2024 "
              description="Developed a software to convert ASL to text and speech in 5 different languages using Python with the help of OpenCV, Keras and Tensorflow and presented it on a website made with HTML, CSS and nodeJS. "
              githubLink="https://github.com/OM200401/Portfolio"
          />

            <ProjectCard
              title="Grocery Shopping Website"
              date="Dec 2023 "
              description="Developed a full-stack grocery website using Node.js, HTML/CSS, MySQL, implementing features like product addition, order tracking, and authentication."
              githubLink="https://github.com/OM200401/COSC304_Project"
            />

            <ProjectCard
              title="Python Prediction Model"
              date="Jan 2023 – April 2023"
              description="Trained a Python model for data analysis on a Gun Violence Dataset using libraries like Pandas, Seaborn, and Matplotlib."
              githubLink="https://github.com/ubco-W2022T2-data301/project-group09"
            />
          
          </div>
        </div>
      </section>

      <section id='5' className="bg-gray-500 py-16">
        <div className='container mx-auto'>
          <h2 className='text-5xl font-semibold mb-8'>Experience</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="text-3xl font-semibold">University of British Columbia</h3>
              <p className="text-black font-semibold text-2xl">Collegia Assistant | Aug 2023 – Current</p>
              <ul className="list-disc list-inside text-black font-medium">
                <li>Managed collegium space and organized monthly events for students.</li>
                <li>Organizing monthly events for student to participate in and meet other peers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">University of British Columbia</h3>
              <p className="text-black font-semibold text-2xl">Software Developer Intern | May 2023 – Current</p>
              <ul className="list-disc list-inside text-black font-medium">
                <li>Managed a Web-App Project under my Professor as the Team Leader to develop a tool for students to be able to register into courses including other features</li>
                <li>Developed the user interface using Typescript, Tailwind CSS in the Remix framework and authentication using remix-auth package</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">University of British Columbia</h3>
              <p className="text-black font-semibold text-2xl">Orientation Leader | Aug 2023 – Sept 2023</p>
              <ul className="list-disc list-inside text-black font-medium">
                <li>Led new students through a series of events and games to introduce them to their new campus and university</li>
                <li>Gave a campus tour to all the students while introducing the different resources available to them on campus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>    

      <section id='6' className="py-16 bg-gray-600">
        <div className='container mx-auto'>
          <h2 className='text-4xl font-semibold mb-8 text-white'>Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-white">
              <p className="text-lg font-medium mb-2">
                Email: <a className="text-blue-400" href='mailto:ommistry0124@gmail.com'>ommistry0124@gmail.com</a>
              </p>
              <p className="text-lg font-medium mb-2">Phone: (236)-308-5186</p>
              <p className="text-lg font-medium mb-2">
                LinkedIn: <a className="text-blue-400" href="https://www.linkedin.com/in/om-mistry">Om Mistry</a>
              </p>
              <p className="text-lg font-medium mb-2">
                GitHub: <a className="text-blue-400" href="https://github.com/OM200401">OM200401</a>
              </p>
            </div>
            <div>
              {/* You can add a contact form here if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
