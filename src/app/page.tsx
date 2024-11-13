import Head from "next/head";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { Card, ProjectImg } from "./Card.jsx";
import Ps from "/public/adobe-photoshop.png";
import Avatar from "/public/avatar.jpg";
import Spread from "/public/Desktop - 1.png";
import Flutter from "/public/flutter.png";
import ToDo from "/public/Frame 2.png";
import Expenze from "/public/Frame 294.png";
import Posting from "/public/Frame 4.png";
import Rect from "/public/react.png";
import Grapic from "/public/web-template.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="discription" content="" />
        <link rel="icon" href="/favicon.ico/" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,500&display=swap');
        </style>
      </Head>
      <main className="font-poppins bg-slate-100 min-h-screen px-10">
        {/* nav bar and hero section */}
        <section>
          {/* navigation */}
          <nav className="container mx-auto flex justify-between items-center py-5">
            <h2 className="text-xl font-medium">By Chamod Udara</h2>
            <ul className="flex justify-between space-x-6">
              <li>
                <MdOutlineDarkMode className="text-blue-950 hover:text-black text-2xl cursor-pointer" />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1HA3BoRz53Wc2N3cUIeCre20BEOFAWjVJ/view?usp=sharing"
                  target="_blank"
                  download={"resume"}
                  className="text-xl font-semibold bg-customGold py-2 px-4 rounded"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* hero section */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-center p-8  max-w-2xl space-x-4 ">
              <h1 className="text-4xl font-semibold text-customGold">
                Chamod Udara
              </h1>
              <h2 className="text-xl font-semibold">
                Mobile/Web developer | UI designer
              </h2>
              <br />
              <p className="">
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

            {/* reference icons */}
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/uchamod" target="_blank">
                <FaGithub className="text-4xl cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/chamod-udara-b3927a239/"
                target="_blank"
              >
                {" "}
                <FaLinkedin className="text-4xl cursor-pointer" />
              </a>
              <a href="https://medium.com/@uchamod52" target="_blank">
                <FaMedium className="text-4xl cursor-pointer" />
              </a>
            </div>
            <div>
              <Image
                src={Avatar}
                alt="Profile"
                className="w-64 h-64 rounded-full mt-6 shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
        {/* my professionce section */}
        <section className="pt-16">
          <div className="pb-8">
            <h1 className="text-2xl font-semibold">My Expertise</h1>
            <br />
            <p className="">
              I'm a passionate Flutter Developer,Web developer and Tech
              Enthusiast with a deep interest in building mobile and web
              applications. Always eager to explore new technologies and solve
              challenging problems.My goal is to combine my technical expertise
              with a creative approach to contribute meaningfully to the field
              of technology and design.
            </p>
          </div>
          {/* cards */}
          <div className="flex flex-wrap justify-center space-y-4 space-x-4">
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
              description="Experienced in building dynamic and efficient web applications, I use React, Next.js, and TypeScript to create responsive, scalable front-ends, and Node.js for robust backend development. With a deep understanding of Tailwind CSS, I design fast, visually appealing websites that provide seamless user experiences."
            />
            <Card
              image={Ps}
              title="Grapic design"
              description="Proficient in Adobe Photoshop, I specialize in creating high-quality graphics that capture brand identity and visual storytelling. My graphic design work blends precision with creativity, producing visuals that are both impactful and aesthetically appealing."
            />
          </div>
        </section>
        {/* projects */}
        <section className="pt-16">
          <div>
            <h1 className="text-2xl font-semibold pb-4">My Projects So Far</h1>
            <ProjectImg image={Spread} />
            <ProjectImg image={Posting} />
            <ProjectImg image={ToDo} />
            <ProjectImg image={Expenze} />
          </div>
        </section>
        {/* footer */}
        <section>
          <div className="border-t-4 border-gray-300 justify-center mt-8 mb-6 pt-2 ">
            <h3 className="text-lg font-medium text-center pb-2">
              @Contact me for more details
            </h3>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/uchamod" target="_blank">
                <FaGithub className="text-3xl cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/chamod-udara-b3927a239/"
                target="_blank"
              >
               
                <FaLinkedin className="text-3xl cursor-pointer" />
              </a>
              <a href="https://medium.com/@uchamod52" target="_blank">
                <FaMedium className="text-3xl cursor-pointer" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
