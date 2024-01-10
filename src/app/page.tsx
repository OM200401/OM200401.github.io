import Image from 'next/image';

export default function Home() {
  return (
    <div>
    <section id='1' className="grid grid-cols-1 md:grid-cols-2 h-screen bg-gray-500">
        {/* Left side */}
        <div className="flex justify-center items-center">
          <div className='text-black'>
            <p className='text-7xl font-semibold font-serif'>
              Om Mistry
            </p>
            <p className='text-xl font-semibold font-serif'>
              Welcome to my website !
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className='relative flex justify-center items-center'>
          <div className="absolute top-20 right-20 md:relative w-fit h-fit overflow-hidden rounded-full">
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
          <h2 className='text-5xl font-semibold mb-8'>ABOUT</h2>
          <p className='text-3xl text-white font-semibold'>
            Hey there ! I am a 20 year old passionate computer science student at the University of British Columbia, specializing in both Computer Science and Data Science.
            With an eager to learn persona and a keen interest in software development, AI, machine learning, and Data analysis, I have gained valuable skills in various programming languages and technologies. I enjoy tackling complex problems and am dedicated to continuous learning in the tech field.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className=" bg-blue-400 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-black mb-4 font-semibold">Oct 2023 – Current</p>
              <p className="text-black font-semibold">
                Developed a website showcasing my skills and abilities using Next.js, TypeScript, HTML/CSS.
              </p>
            </div>

            <div className="bg-blue-400 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Grocery Shopping Website</h3>
              <p className="text-black mb-4 font-semibold">Nov 2023 – Dec 2023</p>
              <p className="text-black font-semibold">
                Developed a full-stack grocery website using Node.js, HTML/CSS, MySQL, implementing features like product addition, order tracking, and authentication.
              </p>
            </div>

            <div className="bg-blue-400 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Python Prediction Model</h3>
              <p className="text-black mb-4 font-semibold">Jan 2023 – April 2023</p>
              <p className="text-black font-semibold">
                Trained a Python model for data analysis on a Gun Violence Dataset using libraries like Pandas, Seaborn, and Matplotlib.
              </p>
            </div>

            {/* You can add more project cards following the same structure */}
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
          <h2 className='text-4xl font-semibold mb-8'>Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              {/* Fix links , currently not working properly */}
              <p className="text-black font-bold">Email: ommistry0124@gmail.com</p>
              <p className="text-black font-bold">Phone: (236)-308-5186</p>
              <p className="text-black font-bold">LinkedIn: <a href="www.linkedin.com/in/om-mistry">Om Mistry</a></p>
              <p className="text-black font-bold">GitHub: <a href="https://github.com/OM200401">OM200401</a></p>
            </div>
             {/* Need to add a contact form in the future */}
          </div>
        </div>
      </section>
      </div>

  );
}
