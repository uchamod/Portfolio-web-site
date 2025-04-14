"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react"; //import react hook
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { Card, ProjectImg } from "./Card.jsx";
import Ps from "/public/adobe-photoshop.png";
import AI from "/public/ai.png";
import Avatar from "/public/avatar.jpg";
import Quiz from "/public/AX8Cj.png";
import Spread from "/public/Desktop - 1.png";
import Employee from "/public/Employee-Management.jpg";
import Flutter from "/public/flutter.png";
import ToDo from "/public/Frame 2.png";
import Expenze from "/public/Frame 294.png";
import Posting from "/public/Frame 4.png";
import Rect from "/public/react.png";
import Grapic from "/public/web-template.png";
export default function Home() {
  //function
  const [darkmode, setDarkMode] = useState(false);
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

      <main className="relative  font-poppins min-h-screen px-10 dark:bg-transparent">
        {/* nav bar and hero section */}
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
                  href="https://drive.google.com/file/d/1HA3BoRz53Wc2N3cUIeCre20BEOFAWjVJ/view?usp=sharing"
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
                I'm Chamod Udara
              </h1>
              <h2 className="text-xl font-semibold dark:text-slate-100">
                Mobile/Web developer | UI designer
              </h2>
              <br />
              <p className="lg:text-xl dark:text-slate-50 dark:text-opacity-60">
                I am an undergraduate at the University of Sri Jayewardenepura,
                deeply passionate about technology and innovation. As a tech
                enthusiast and continuous learner, I am committed to staying
                ahead of the curve in the ever-evolving tech landscape. I
                specialize in Flutter development and UI design, leveraging my
                skills to create intuitive and visually appealing applications.
                Currently, I am working on various projects that challenge and
                expand my capabilities.
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
            <p className="lg:text-xl dark:text-slate-50 dark:text-opacity-60 text-center md:text-left">
              I'm a passionate Flutter Developer,Web developer and Tech
              Enthusiast with a deep interest in building mobile and web
              applications. Always eager to explore new technologies and solve
              challenging problems.My goal is to combine my technical expertise
              with a creative approach to contribute meaningfully to the field
              of technology and design.
            </p>
          </div>
          {/* cards */}
          <div className="lg:flex md:flex sm:justify-center space-y-6 lg:space-x-6 md:space-x-4 lg:flex-wrap md:flex-wrap lg:justify-center md:justify-center">
            <Card
              image={Flutter}
              title="Mobile development"
              description="Skilled in Flutter development, I create cross-platform apps with beautiful, responsive designs and optimized performance. With expertise in Dart and custom widgets, I bring unique user experiences to life, ensuring seamless functionality across Android, iOS, and web platforms"
            />
            <Card
              image={Rect}
              title="Web Development"
              description="Experienced in building dynamic and efficient web applications, I use React, Next.js, and TypeScript to create responsive, scalable front-ends, and Node.js for robust backend development. With a deep understanding of Tailwind CSS, I design fast, visually appealing websites that provide seamless user experiences."
            />
            <Card
              image={Grapic}
              title="UI design"
              description="As a UI designer, I craft intuitive, user-centered interfaces using Figma to bring clarity and functionality to every design. My approach combines creativity with usability, ensuring that each project provides a smooth and visually engaging experience."
            />
            <Card
              image={AI}
              title="Machine Learning"
              description="Experienced in machine learning, I use Google’s ML Kit to build smart, user-focused applications. I’m skilled in integrating ML models for features like predictive insights and image recognition, aiming to solve real-world challenges with innovative solutions."
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
              <ProjectImg
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
              />
              <ProjectImg
                image={Quiz}
                url="https://github.com/uchamod/springboot_quiz_application_with-_microservices"
              />
            </div>
          </div>
        </section>
        {/* footer */}
        <section>
          <div className="border-t-4 border-gray-300 justify-center mt-8 pb-6 pt-2 dark:bg-customBlue">
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
