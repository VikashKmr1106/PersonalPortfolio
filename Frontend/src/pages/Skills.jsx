import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90, desc: "Semantic & SEO friendly structure" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85, desc: "Responsive layouts & animations" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 80, desc: "ES6+, DOM & API handling" },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 75, desc: "Hooks, Components & SPA development" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 85, desc: "Utility-first modern UI design" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" />, level: 80, desc: "Mobile-first UI framework" },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 70, desc: "State management for React apps" },
  { name: "GitHub", icon: <FaGithub className="text-gray-900" />, level: 75, desc: "Version control & collaboration" },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-10 top-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        {/* Heading */}
        <div className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable and high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
  {skillsData.map((skill, index) => (
    <div
      key={index}
      className={`group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-orange-100 
      hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
      ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl group-hover:rotate-12 transition duration-300">
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          {skill.name}
        </h3>
      </div>

      <p className="text-gray-600 text-sm mb-6">
        {skill.desc}
      </p>

      {/* Strength Dots */}
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-4 h-4 rounded-full transition-all duration-500 
            ${dot <= skill.strength 
              ? "bg-orange-500 scale-110 shadow-md" 
              : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

    </div>
  ))}
</div>

        {/* Extra Content */}
        <div className="mt-16">
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            I am constantly improving my technical skills by building real-world projects,
            exploring new tools, and staying updated with modern frontend trends.
            I believe in writing clean, reusable, and scalable code.
          </p>

          <a
            href="https://github.com/VikashKmr1106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 
            text-white rounded-lg shadow hover:scale-105 transition duration-300"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;