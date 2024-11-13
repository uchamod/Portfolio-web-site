import Head from "next/head";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import Avatar from "/public/avatar.jpg";
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
              <h1 className="text-4xl font-semibold text-customGold">Chamod Udara</h1>
              <h2 className="text-xl font-semibold">
                Mobile/Web developer | UI designer
              </h2>
              <br />
              <p className="">
                I'm a passionate Flutter Developer,Web developer and Tech
                Enthusiast with a deep interest in building mobile and web
                applications. Always eager to explore new technologies and solve
                challenging problems!
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
      </main>
    </div>
  );
}
