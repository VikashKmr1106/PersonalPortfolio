import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" rounded-full lg:mx-24 md:mx-16 sm:mx-8 lg:px-12 md:px-8 sm:px-6 px-4 mt-4 mb-4 text-center p-4">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved. Designed by  
      <Link href="https://www.linkedin.com/in/kim-r-miller/" className="text-orange-400 hover:underline ml-1">Vikash</Link>.
    </footer>
  );
};

export default Footer;
