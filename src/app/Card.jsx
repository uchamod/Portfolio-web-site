import Image from "next/image";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-gradient-to-r from-customGold to-yellow-200 rounded-2xl shadow-xl p-6 sm:justify-center lg:max-w-80">
      <div className="flex justify-center items-center">
        <Image
          src={image}
          alt="Profile"
          className="flex w-32 h-32 justify-center  object-cover rounded-t-lg"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const ProjectImg = ({ image }) => {
  return (
    <div className="">
      <a
        href="https://github.com/uchamod"
        className="cursor-pointer"
        target="_blank"
      >
        {" "}
        <Image
          src={image}
          alt="Project"
          layout="responsive"
          className="w-full h-auto object-cover  shadow-md"
        />
      </a>
    </div>
  );
};

export { Card, ProjectImg };
