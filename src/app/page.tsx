"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react"; //import react hook
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import Card from "./Card.jsx";
import ParticlesBackground from "./particalBackgroound.jsx";
import ProjectImg from "./projectcard.jsx";
import SkillsCloud from "./skillscloud.jsx";
import Ps from "/public/adobe-photoshop.png";
import Avatar from "/public/chamod.png";
import Cloud from "/public/cloud.png";
import Flutter from "/public/flutter.png";
import Rect from "/public/react.png";
import Grapic from "/public/web-template.png";
export default function Home() {
  //function
  const [darkmode, setDarkMode] = useState(true);
  const [text, setText] = useState("");
  const fullText = "I'm Chamod Udara";
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);
  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="discription" content="" />
        <link rel="icon" href="/favicon.ico/" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,500&display=swap');
        </style>
      </Head>
      <ParticlesBackground darkMode={darkmode} />
      <main className="font-poppins  min-h-screen px-10  relative z-10">
        {/* nav bar and hero section */}
        {/* font-poppins min-h-screen px-10 relative z-10 */}
        <section>
          {/* navigation */}
          <nav className="container mx-auto flex justify-between items-center py-5 md:px-12 lg:px-24">
            <h2 className="md:text-2xl lg:text-2xl font-medium font-serif sm:text-xl dark:text-customGold">
              Hello,there...
            </h2>

            <ul className="flex justify-between space-x-6">
              <li>
                <MdOutlineDarkMode
                  className="text-blue-950 hover:text-black text-2xl cursor-pointer dark:text-slate-100"
                  onClick={() => setDarkMode(!darkmode)}
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1T5dR1rvxGCcRLrmpnvGDQEBdCTJq_hM1/view?usp=drive_link"
                  target="_blank"
                  download={"resume"}
                  className="lg:text-xl font-semibold bg-customGold py-2 px-4 rounded"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* hero section */}
          <div className="flex flex-col items-center justify-center ">
            <div className="text-center   max-w-2xl   lg:pb-4 md:pb-4  lg:px-0">
              <h1 className="text-4xl lg:text-6xl lg:pb-2 font-semibold text-customGold">
                {text}
                <span className="inline-block w-1 h-8 bg-customGold ml-1 animate-pulse"></span>
              </h1>
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent dark:bg-gradient-title-dark bg-gradient-title animate-gradient-x">
                Mobile/Web developer | UI designer
              </h2>
              <br />
              <p className="lg:text-xl dark:text-slate-50 dark:text-opacity-80">
                I’m an undergraduate at the University of Sri Jayewardenepura
                with a deep passion for technology and innovation. As a tech
                enthusiast and continuous learner, I’m always eager to explore
                emerging trends and stay ahead in the ever-evolving tech
                landscape. I specialize in{" "}
                <span className="font-semibold dark:text-slate-50">
                  Flutter development
                </span>{" "}
                and
                <span className="font-semibold dark:text-slate-50">
                  {" "}
                  backend development with Node.js
                </span>
                , along with strong skills in{" "}
                <span className="font-semibold dark:text-slate-50">
                  UI design
                </span>{" "}
                and
                <span className="font-semibold dark:text-slate-50">
                  {" "}
                  frontend development using React
                </span>
                . I’m passionate about creating seamless, user-friendly digital
                experiences through clean code and thoughtful design.
              </p>
            </div>
            <br />
            {/* reference icons */}
            <div className="flex justify-center space-x-6 ">
              <a href="https://github.com/uchamod" target="_blank">
                <FaGithub className="text-4xl cursor-pointer dark:text-slate-50" />
              </a>
              <a
                href="https://www.linkedin.com/in/chamod-udara-b3927a239/"
                target="_blank"
              >
                {" "}
                <FaLinkedin className="text-4xl cursor-pointer dark:text-slate-50" />
              </a>
              <a href="https://medium.com/@uchamod52" target="_blank">
                <FaMedium className="text-4xl cursor-pointer dark:text-slate-50" />
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <Image
                  src={Avatar}
                  alt="Profile"
                  className="w-64 h-64 rounded-full mt-6 shadow-lg object-cover lg:w-96 lg:h-96"
                />
              </div>
            </motion.div>
          </div>
        </section>
        {/* my professionce section */}
        <section className="pt-16">
          <div className="pb-8">
            <h1 className="text-3xl font-semibold dark:text-customGold text-center md:text-left">
              My Expertise
            </h1>
            <br />

            {/* skill cloud */}
            <SkillsCloud />
            {/* <p className="lg:text-xl dark:text-slate-50 dark:text-opacity-60 text-center md:text-left">
              I'm a passionate Flutter Developer,Web developer and Tech
              Enthusiast with a deep interest in building mobile and web
              applications. Always eager to explore new technologies and solve
              challenging problems.My goal is to combine my technical expertise
              with a creative approach to contribute meaningfully to the field
              of technology and design.
            </p> */}
          </div>
          {/* cards */}
          <div className="lg:flex md:flex sm:justify-center space-y-6 lg:space-x-6 md:space-x-4 lg:flex-wrap md:flex-wrap lg:justify-center md:justify-center">
            <Card
              image={Flutter}
              title="Mobile development"
              description="Skilled in Flutter development, I create cross-platform apps with beautiful, responsive designs and optimized performance. With expertise in Dart and custom widgets, I bring unique user experiences to life, ensuring seamless functionality across Android, iOS, and web platforms"
            />
            <Card
              image={Cloud}
              title="Backend development"
              description="I specialize in backend development using Node.js and Express.js, crafting robust and scalable RESTful APIs. I'm proficient with MongoDB for NoSQL solutions and also experienced in MySQL for relational databases. Additionally, I work well with cloud-based platforms such as Firebase and AWS, enabling secure, real-time, and serverless backend architectures."
            />
            <Card
              image={Rect}
              title="Frontend development"
              description="On the frontend, I build responsive, high-performance web interfaces using React. I'm also skilled in modern frameworks like Next.js and tools like Vite, which enhance performance and developer experience. My focus is on delivering clean UI with a strong emphasis on user experience, interactivity, and design consistency."
            />

            <Card
              image={Grapic}
              title="UI design"
              description="As a UI designer, I craft intuitive, user-centered interfaces using Figma to bring clarity and functionality to every design. My approach combines creativity with usability, ensuring that each project provides a smooth and visually engaging experience."
            />

            <Card
              image={Ps}
              title="Grapic design"
              description="Proficient in Adobe Photoshop, I specialize in creating high-quality graphics that capture brand identity and visual storytelling. My graphic design work blends precision with creativity, producing visuals that are both impactful and aesthetically appealing."
            />
          </div>
        </section>
        {/* projects */}
        <section className="pt-20">
          <div>
            <h1 className="text-3xl font-semibold pb-4 dark:text-customGold">
              Exciting Projects So Far
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 lg:gap-8">
              {/* <ProjectImg
                image={Spread}
                url="https://github.com/uchamod/Spread_app"
              />
              <ProjectImg
                image={Posting}
                url="https://github.com/uchamod/Posting-social-media-app-flutter"
              />
              <ProjectImg
                image={ToDo}
                url="https://github.com/uchamod/flutter-NotePro"
              />
              <ProjectImg
                image={Expenze}
                url="https://github.com/uchamod/flutter-Expenz_Manager"
              />
              <ProjectImg
                image={Employee}
                url="https://github.com/uchamod/Employee_Mangement_System-V2"
              /> */}
              {/* <ProjectImg
                image={Quiz}
                url="https://github.com/uchamod/springboot_quiz_application_with-_microservices"
              /> */}

              <ProjectImg
                image="post.png"
                url="https://github.com/uchamod/Posting-social-media-app-flutter"
                title="Social App(Posting)"
                description="A special milestone of my freelancing journey.Feature rich social media application develop using flutter and firebase while maintaning Interactive UI design."
              />
              <ProjectImg
                image="t2c.png"
                url="https://play.google.com/store/apps/details?id=com.chakra.trash.to.cash"
                title="Trash2Cash"
                description="As Intern Software Engineer Got a chance to contribute a revelutionary idea Trash2Cash which Waste management app with various services."
              />
              <ProjectImg
                image="spread.png"
                url="https://github.com/uchamod/Spread_app"
                title="Social App(Spread)"
                description="As a freelancer develop an content sharing (blog and video) app to engage with multiple user and share their thougts and experiences powered by flutter and firebase."
              />
              <ProjectImg
                image="rimotkii.png"
                url="https://github.com/uchamod/Spread_app"
                title="RimoteKii"
                description="IOT project for controll the home gates remotly.relevant to my intern."
              />
              <ProjectImg
                image="date net.png"
                url="https://github.com/uchamod/date-net-nodejs-server/tree/auth"
                title="Date net sprint 1(Authentication)"
                description="nodejs Authentication & Autherization handling with jwt and email otp verification.setup features such as login,register,reset password,check auth state(MongoDB)."
              />
              <ProjectImg
                image="360.png"
                url="https://github.com/uchamod/CICD-Pipeline-with-Docker-and-Jenkins"
                title="360 wallpaper"
                description="Nodejs backend + MongoDB atles develop for wallpaper management application with jwt authentication.also set up with ci-cd pipeline using docker and jenkins.succsufuly deployed AWS EC2."
              />
            </div>
          </div>
        </section>
        {/* footer */}
        <section>
          <div className="border-t-4 border-gray-300 justify-center mt-8 pb-6 pt-2 ">
            <h3 className="text-lg font-medium text-center pb-2 dark:text-slate-50">
              @Contact me for more details
            </h3>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/uchamod" target="_blank">
                <FaGithub className="text-3xl cursor-pointer dark:text-slate-50" />
              </a>
              <a
                href="https://www.linkedin.com/in/chamod-udara-b3927a239/"
                target="_blank"
              >
                <FaLinkedin className="text-3xl cursor-pointer dark:text-slate-50" />
              </a>
              <a href="https://medium.com/@uchamod52" target="_blank">
                <FaMedium className="text-3xl cursor-pointer dark:text-slate-50" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
