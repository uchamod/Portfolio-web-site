import Head from "next/head";
import { MdOutlineDarkMode } from "react-icons/md";
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
      <main className="font-poppins bg-slate-50 min-h-screen px-10">
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
                  className="text-xl font-medium bg-customGold py-2 px-4 rounded"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
