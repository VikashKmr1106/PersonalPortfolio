import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’d love to hear from you.
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info Card */}
         <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl transition duration-500">

  <h3 className="text-2xl font-semibold text-gray-800">
    Get In Touch
  </h3>

  <p className="text-gray-600 mt-3 leading-relaxed">
    I’m currently open to freelance projects, full-time opportunities,
    and exciting collaborations. If you have something interesting in mind,
    let’s build it together 🚀
  </p>

  {/* Availability Badge */}
  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full">
    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
    Available for Work
  </div>

  {/* Contact Details */}
  <div className="mt-8 space-y-6 grid grid-cols-2 text-gray-700">

    <div className="flex items-start gap-4">
      <MapPin className="text-orange-500 mt-1" />
      <div>
        <p className="font-medium text-gray-800">Location</p>
        <p className="text-gray-600 text-sm">Faridabad, Haryana</p>
      </div>
    </div>

    <div className="flex items-start  gap-4">
      <Mail className="text-orange-500 mt-1" />
      <div>
        <p className="font-medium text-gray-800">Email</p>
        <a
          href="mailto:vikash.kmr11106@gmail.com"
          className="text-gray-600 text-sm hover:text-orange-500 transition"
        >
          vikash.kmr11106@gmail.com
        </a>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <Phone className="text-orange-500 mt-1" />
      <div>
        <p className="font-medium text-gray-800">Phone</p>
        <a
          href="tel:+919953856353"
          className="text-gray-600 text-sm hover:text-orange-500 transition"
        >
          +91 9953856353
        </a>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <Linkedin className="text-orange-500 mt-1" />
      <div>
        <p className="font-medium text-gray-800">LinkedIn</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/vikash-61230a16b"
          className="text-gray-600 text-sm hover:text-orange-500 transition"
        >
          View Profile
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Note */}
  <p className="text-sm text-gray-500 mt-8">
    I usually respond within 24 hours. Looking forward to connecting with you!
  </p>

</div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition duration-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition duration-300"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition duration-300"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                Send Message 🚀
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;