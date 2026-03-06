import React, { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div
          className={`text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for frontend development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 mt-16 items-center">
          
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              UI Developer & React Enthusiast 🚀
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              I am a passionate and detail-oriented Frontend Developer with strong expertise in 
              <span className="font-semibold text-orange-500">
                {" "}HTML, CSS, JavaScript, React.js, Redux & Tailwind CSS
              </span>.
              I enjoy transforming creative ideas into responsive, interactive, 
              and high-performance web applications.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              With 1+ year of hands-on experience in building real-world projects, 
              I focus on writing clean, reusable, and scalable code. 
              My goal is to create seamless user experiences that are both 
              visually appealing and technically efficient.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I am continuously learning new technologies, improving problem-solving skills, 
              and preparing myself for challenging opportunities in the tech industry.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-2xl font-bold text-orange-500">15+</h4>
                <p className="text-gray-600 text-sm">Projects</p>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-2xl font-bold text-orange-500">1+</h4>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-2xl font-bold text-orange-500">100%</h4>
                <p className="text-gray-600 text-sm">Dedication</p>
              </div>
            </div>
          </div>

          {/* Right Info Card */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl transition duration-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Personal Information
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Name:</span>
                  <span>Vikash Kumar</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Age:</span>
                  <span>25 Years</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Location:</span>
                  <span>Faridabad, Haryana</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Email:</span>
                  <span className="text-orange-500">
                    vikash.kmr1106@gmail.com
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">Role:</span>
                  <span>Frontend Developer (React.js)</span>
                </div>
              </div>

              {/* Resume Button */}
              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg shadow hover:scale-105 transition duration-300"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;