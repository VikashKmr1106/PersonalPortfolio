import React from "react";
import { Briefcase, Code, CircleDot } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "UI Developer",
    company: "360 Degree Cloud Technologies Pvt. Ltd.",
    duration: "Feb 2022 - Apr 2024",
    projects: [
      {
        name: "360 SMS App",
        description:
          "Developed and enhanced UI for the 360 SMS App, optimizing SMS communication in Salesforce.",
        technologies: ["HTML", "CSS", "JavaScript", "LWC", "Salesforce UI"],
      },
      {
        name: "Email Template Design",
        description:
          "Designed and built responsive email templates for marketing and transactional emails.",
        technologies: ["HTML", "CSS", "Responsive Design"],
      },
     
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-50 py-4 mx-auto w-full">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 bg-gray-50">
        {/* Section Title */}
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center'>
          Experience
        </h2>

        <div className='flex justify-center my-4'>
          <svg
            viewBox='0 0 200 20'
            xmlns='http://www.w3.org/2000/svg'
            className='w-40 sm:w-48 md:w-56 text-orange-400'>
            <path
              d='M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'></path>
          </svg>
        </div>

        {/* Timeline Layout */}
        <div className="bg-white relative border-l-4 border-orange-400 mt-10 pl-8 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition transform hover:scale-[1.02]">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-3 bg-orange-500 rounded-full w-5 h-5 border-4 border-white shadow-md"></div>

              {/* Card */}
              <div className=" p-6 ">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  {exp.role}
                </h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>

                {/* Projects */}
                <div className="mt-4 space-y-4">
                  {exp.projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-gray-300 pl-4">
                      <h4 className="text-lg font-medium text-gray-700 flex  gap-2">
                        <Code className="w-4 h-4 text-blue-500" />
                        {project.name}
                      </h4>
                      <p className="text-gray-500">{project.description}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Tech Used:</strong> {project.technologies.join(", ")}
                      </p>
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
