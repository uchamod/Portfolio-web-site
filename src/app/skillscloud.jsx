export default function SkillsCloudGrid() {
  // Define skills with their relative importance (1-10)
  const skills = [
    { name: "React", importance: 10, position: { row: 1, col: 5 } },
    { name: "Flutter", importance: 10, position: { row: 3, col: 3 } },
    { name: "MongoDB", importance: 9, position: { row: 1, col: 2 } },
    { name: "Node js", importance: 9, position: { row: 4, col: 5 } },
    { name: "Figma", importance: 9, position: { row: 2, col: 4 } },
    { name: "AWS", importance: 8, position: { row: 5, col: 2 } },
    { name: "Firebase", importance: 8, position: { row: 2, col: 5 } },
    { name: "Express js", importance: 7, position: { row: 3, col: 6 } },
    { name: "Next js", importance: 7, position: { row: 4, col: 1 } },
    { name: "MySQL", importance: 6, position: { row: 1, col: 3 } },
    { name: "photoshop", importance: 6, position: { row: 5, col: 4 } },
    { name: "vite", importance: 5, position: { row: 2, col: 3 } },
    { name: "Tailwind", importance: 7, position: { row: 3, col: 2 } },
    { name: "HTML", importance: 9, position: { row: 2, col: 1 } },
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-4 w-full h-[400px] md:h-[500px] my-16">
      {skills.map((skill, index) => {
        // Set text size based on importance
        let textSize;
        if (skill.importance >= 9) textSize = "text-4xl md:text-5xl font-bold";
        else if (skill.importance >= 7)
          textSize = "text-2xl md:text-3xl font-semibold";
        else if (skill.importance >= 5) textSize = "text-xl md:text-2xl";
        else textSize = "text-lg";

        // Set opacity based on importance
        let textOpacity;
        if (skill.importance >= 9) textOpacity = "opacity-100";
        else if (skill.importance >= 7)
          textOpacity = "opacity-80 dark:opacity-70";
        else if (skill.importance >= 5)
          textOpacity = "opacity-60 dark:opacity-50";
        else textOpacity = "opacity-40 dark:opacity-30";

        return (
          <div
            key={index}
            className={`flex items-center justify-center transform transition-all duration-300 cursor-pointer 
                         hover:scale-110 hover:opacity-100 hover:z-10 hover:text-customGold dark:hover:text-customGold
                         ${textSize} ${textOpacity}`}
            style={{
              gridRow: skill.position.row,
              gridColumn: skill.position.col,
              transition: "all 0.3s ease",
            }}
          >
            <span className="dark:text-white text-gray-900">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}
