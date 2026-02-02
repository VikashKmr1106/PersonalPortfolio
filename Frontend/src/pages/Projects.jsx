import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import reactCompImg from "../assets/image/reactcomp.png";
import modernImg from "../assets/image/modern.png";
import reactToolkitImg from "../assets/image/reactToolkit.png";
import shopCartImg from "../assets/image/shopCart.png";
import teedex from '../assets/image/teedex.png'


const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional e-commerce website built with MERN stack.",
    image: shopCartImg, // Local image use ho rahi hai
    github: "https://github.com/VikashKmr1106",
    live: "https://shop-cart-rho-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A React-based task management app with Redux & local storage.",
    image: reactToolkitImg,
    github: "https://github.com/VikashKmr1106",
    live: "https://react-redux-toolkit-gamma.vercel.app/",
  },
  {
    id: 3,
    title: "Modern Website UI",
    description: "A modern and responsive website built with React and Tailwind CSS.",
    image: modernImg,
    github: "https://github.com/VikashKmr1106",
    live: "https://vercel.com/vikashs-projects-d0fc81b5/website-73o7",
  },
  {
    id: 4,
    title: "React Components Showcase",
    description:
      "A collection of reusable React components, including a To-Do List, Accordion, Tabs, Toast, Drag & Drop, and more.",
    image: reactCompImg,
    github: "https://github.com/VikashKmr1106", // Iska correct GitHub repo daalna
    live: "https://project-mocha-rho.vercel.app/",
  },
  {
    id: 5,
    title: "Custom T-shirt Design (Freelancing Project)",
    description:
      "Contributed to the development of a responsive, customisable t-shirt design platform by implementing dynamic product listing and seamless cart management.",
    image: teedex,
    
    live: "https://teedex.in/",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Projects
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center my-4">
          <svg
            viewBox="0 0 200 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 sm:w-48 md:w-56 text-orange-400"
          >
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg transition-all duration-300 
              transform hover:scale-105 hover:shadow-2xl border border-gray-200 hover:border-orange-400 overflow-hidden"
            >
							 <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-normal text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-normal text-sm mt-2">{project.description}</p>
                <div className="mt-4 flex items-center justify-between ">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
