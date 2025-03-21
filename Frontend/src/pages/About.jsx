import React from 'react';

const About = () => {
  const aboutData = {
    name: "Vikash",
    phone: "+91 9953856353",
    age: "25 Years",
    email: "vikash.kmr1106@gmail.com",
    occupation: "UI Developer & Frontend Developer (React.js)",
    location: "Faridabad, Haryana",
  };

  return (
    <section id='about' className='bg-gray-50 py-16'>
      <div className='w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 bg-gray-50 text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
          About
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

        <div className='grid gap-10 items-center rounded-2xl p-6 mt-4'>
          <div className='text-left'>
            <h2 className='text-3xl sm:text-4xl font-medium text-gray-800'>
              UI Developer & React Enthusiast
            </h2>
            <p className='text-gray-600 mt-4 font-[300] text-lg'>
              Passionate about frontend development with expertise in 
              <b> "HTML, CSS, JavaScript, React, Tailwind, Bootstrap" </b>.
              I focus on building high-performance and user-friendly interfaces.
            </p>

            <div className="mt-6 bg-white p-6 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.05)] max-w-md sm:max-w-lg mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
                {Object.entries(aboutData).map(([key, value]) => (
                  <div key={key} className='flex flex-col'>
                    <h3 className='text-md font-[400] text-gray-500 mb-1'>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                    <p className='text-black'>{value}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
