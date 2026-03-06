import React, { useEffect, useState } from "react";
import { Briefcase, Code, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "UI Developer",
    company: "360 Degree Cloud Technologies Pvt. Ltd.",
    duration: "Feb 2022 - Apr 2024",
    location: "Faridabad, Haryana",
    summary:
      "Worked as a Frontend/UI Developer responsible for building modern, scalable and responsive interfaces for Salesforce-based applications.",
    responsibilities: [
      "Developed reusable UI components for enterprise-level applications.",
      "Improved UI performance and responsiveness across devices.",
      "Collaborated with backend and Salesforce teams for seamless integration.",
      "Optimized existing UI to enhance user experience and reduce load time.",
    ],
    projects: [
      {
        name: "360 SMS App",
        description:
          "Developed and enhanced UI for the 360 SMS App, optimizing SMS communication workflow inside Salesforce.",
        technologies: ["HTML", "CSS", "JavaScript", "LWC", "Salesforce UI"],
      },
      {
        name: "Email Template System",
        description:
          "Designed and developed fully responsive marketing and transactional email templates.",
        technologies: ["HTML", "CSS", "Responsive Design"],
      },
    ],
  },
];

const Experience = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className={`text-center transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            My <span className="text-orange-500">Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and real-world project contributions.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 space-y-12">
  {experiences.map((exp) => (
    <div
      key={exp.id}
      className={`group relative p-[1px] rounded-2xl bg-gradient-to-r 
      from-orange-400 via-orange-300 to-orange-400 
      transition-all duration-700 
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Inner Card */}
      <div className="bg-white rounded-2xl p-8 shadow-lg 
      group-hover:shadow-2xl group-hover:-translate-y-2 
      transition-all duration-500">

        {/* Role */}
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <Briefcase className="text-orange-500 w-6 h-6" />
          {exp.role}
        </h3>

        <p className="text-gray-700 font-medium mt-1">
          {exp.company}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {exp.duration} • {exp.location}
        </p>

        {/* Summary */}
        <p className="text-gray-600 mt-6 leading-relaxed">
          {exp.summary}
        </p>

        {/* Responsibilities */}
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-3">
            Key Contributions:
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="mt-8 space-y-6">
          {exp.projects.map((project, index) => (
            <div key={index} className="bg-orange-50 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Code className="w-4 h-4 text-orange-500" />
                {project.name}
              </h4>

              <p className="text-gray-600 text-sm mt-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-white text-orange-600 
                    border border-orange-200 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Experience;