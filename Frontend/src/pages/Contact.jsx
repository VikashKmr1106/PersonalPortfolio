import React from 'react';

const Contact = () => {
	return (
		<section id='contact' className='bg-gray-50'>
			<div className='w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 bg-gray-50 text-center'>
				{/* Section Title */}
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
					Contact Us
				</h2>

				{/* Title Shape (SVG Line) */}
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

				<div className='flex flex-col lg:flex-row items-start  justify-between gap-12'>
					{/* Left Section - Contact Info */}
					<div className='lg:w-1/2 w-full h-max text-center lg:text-left bg-white p-6 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.05)] hover:shadow-2xl transition duration-300'>
						<h2 className='text-3xl sm:text-4xl font-bold text-gray-900'>
							Get In Touch
						</h2>
						<p className='text-gray-600 mt-4 text-lg'>
							Have a project in mind or just want to say hi? Feel free to reach out!
						</p>

						{/* Contact Details */}
						<div className='mt-6 space-y-4'>
							<p className='text-gray-700 flex items-center gap-3'>
								📍 Faridabad, Haryana
							</p>
							<p>Email: <a href="mailto:vikash.kmr11106@gmail.com" className="text-blue-400">vikash.kmr11106@gmail.com</a></p>
							<p>LinkedIn: <a target='_blank' href="https://www.linkedin.com/in/vikash-61230a16b?utm_source=za&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-400">Vikash</a></p>
							<p className='text-gray-700 flex items-center gap-3'>
								Mobile: 
								<a
									href='tel:+919953856353'
									className='hover:text-orange-500 transition'>
									+91 9953856353
								</a>
							</p>
						</div>
					</div>

					{/* Right Section - Contact Form */}
					<div className='lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.05)] hover:shadow-2xl transition duration-300'>
						<h3 className='text-2xl font-semibold text-gray-900'>
							Send a Message
						</h3>
						<form className='mt-6 space-y-4'>
							<input
								type='text'
								placeholder='Your Name'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none transition duration-300 hover:shadow-md'
							/>
							<input
								type='email'
								placeholder='Your Email'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none transition duration-300 hover:shadow-md'
							/>
							<textarea
								rows='4'
								placeholder='Your Message'
								className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none transition duration-300 hover:shadow-md'></textarea>
							<button
								type='submit'
								className='w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-300 hover:shadow-lg'>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
