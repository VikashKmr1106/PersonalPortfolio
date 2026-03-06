import React, { useEffect, useState } from "react";
import hero from "../assets/image/hero.webp";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 overflow-hidden"
      >
        {/* Background Blur Circle */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

            {/* Left Content */}
            <div
              className={`lg:w-1/2 w-full transition-all duration-1000 ${
                show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Vikash
                </span>
              </h2>

              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                A Passionate UI Developer who builds modern, responsive,
                and interactive web applications. I specialize in
                <span className="text-orange-500 font-semibold">
                  {" "}React, JavaScript & Tailwind CSS
                </span>{" "}
                to craft scalable and beautiful user experiences.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-5">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-orange-400 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white hover:scale-105 transition duration-300"
                >
                  Let's Connect
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`lg:w-1/2 w-full flex justify-center transition-all duration-1000 ${
                show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <img
                  src={hero}
                  alt="Vikash Kumar - UI Developer"
                  className="w-full max-w-md rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;