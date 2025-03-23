import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects"}
  ];

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white w-full flex items-center justify-center">
        <div className="container bg-white-400 rounded-full lg:mx-24 md:mx-16 sm:mx-8 lg:px-12 md:px-8 sm:px-6 mx-4 px-4 mt-4 mb-4 flex justify-between items-center p-4 shadow-[0px_2px_15px_rgba(0,0,0,0.1)]">
          {/* Logo */}
          <Link className="text-2xl font-bold tracking-wide" to="/">
            MyPortfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menu.map((menuItem) => (
              <Link
                key={menuItem.name}
                to={menuItem.path}
                className={`transition duration-300 ${
                  location.pathname === menuItem.path
                    ? "text-orange-400 font-semibold border-b-2 border-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                {menuItem.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0  z-49 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">MYPortFolio</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col p-4 space-y-4">
          {menu.map((menuItem) => (
            <Link
              key={menuItem.name}
              to={menuItem.path}
              onClick={() => setIsOpen(false)}
              className={`transition duration-300 ${
                location.pathname === menuItem.path
                  ? "text-orange-400 font-semibold border-l-4 border-orange-400 pl-2"
                  : "hover:text-orange-400 pl-2"
              }`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
