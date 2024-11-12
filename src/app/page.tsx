import Head from "next/head";

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
      <main className="font-poppins">
        <h1 className="bg-slate-500 text-2xl">Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          dignissimos molestias suscipit illo, quibusdam optio ut atque magnam
          cupiditate cumque eligendi! Perferendis laborum eos laboriosam.
        </p>
      </main>
    </div>
  );
}
