import React from "react";
import hero from '../assets/image/hero.webp';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';

const Home = () => {
  return (
    <>
      <section id="hero" className="bg-gray-50 py-16">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 bg-gray-50 text-center">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
            {/* Left Content */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-bold text-gray-900">
                Hi, I'm Vikash
              </h2>
              <p className="font-[300] sm:text-lg md:text-xl text-gray-600 mt-4">
                A Passionate UI Developer with expertise in creating modern, responsive, and interactive web applications. 
                Proficient in HTML, CSS, JavaScript, React, Redux, and Tailwind CSS. Successfully contributed to multiple projects, 
                enhancing user experiences and building scalable UI components.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#projects" className="bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition">
                  View My Work
                </a>
                <a href="#contact" className="border border-orange-400 text-orange-400 px-6 py-3 rounded-md hover:bg-orange-400 hover:text-white transition">
                  Let's Connect
                </a>
              </div>
              
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src={hero}
                alt="Vikash Kumar - UI Developer"
                className="w-full max-w-md rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills/>
      <Experience/>
      <Contact/>
    </>
  );
};

export default Home;
