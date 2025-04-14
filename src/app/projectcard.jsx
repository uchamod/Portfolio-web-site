import { motion } from "framer-motion";

const ProjectImg = ({ image, url, title, description }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.3 }}
      className="relative w-full rounded-lg overflow-hidden cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="relative">
        {/* Project Image */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* Transparent overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

        {/* Project info at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectImg;

// Example usage:
// <ProjectImg
//   image="/path/to/project-image.jpg"
//   url="https://github.com/yourusername/repository-name"
//   title="Project Name"
//   description="Short description about the project technologies and purpose"
// />
