import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus, SiC } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <SiCplusplus className="text-6xl text-blue-600" />, name: "C++" },
    { icon: <SiC className="text-6xl text-blue-400" />, name: "C" },
    { icon: <FaPython className="text-6xl text-yellow-300" />, name: "Python" },
    { icon: <FaHtml5 className="text-6xl text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-6xl text-blue-500" />, name: "CSS3" },
    { icon: <FaJs className="text-6xl text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-6xl text-cyan-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-6xl text-teal-400" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-6xl text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-6xl text-gray-300" />, name: "Express.js" },
    { icon: <SiMongodb className="text-6xl text-green-600" />, name: "MongoDB" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            >
              {skill.icon}
              <p className="mt-3 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
