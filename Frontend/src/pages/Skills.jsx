import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "90%" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: "80%" },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, level: "75%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "85%" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" />, level: "80%" },
  { name: "GitHub", icon: <FaGithub className="text-gray-900" />, level: "70%" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-8">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 bg-gray-50 text-center">
        
        {/* Short Intro */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">My Skills</h2>
       

        {/* Title Shape */}
        <div className="flex justify-center my-4">
          <svg
            viewBox="0 0 200 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 sm:w-48 md:w-56 text-orange-400">
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"></path>
          </svg>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 
              transform hover:scale-105 hover:shadow-2xl border border-gray-200 hover:border-orange-400 flex flex-col 
              items-center justify-center backdrop-blur-lg bg-opacity-80">
              
              <div className="text-5xl mb-4 transition-all duration-300 group-hover:rotate-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>

             

             
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-gray-700 text-lg font-[300]">
            Always eager to learn new technologies and improve my skills. Check out my  
            <a href="https://github.com/VikashKmr1106" target="_blank" rel="noopener noreferrer" 
              className="text-orange-500 font-semibold hover:underline"> GitHub</a> for projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
