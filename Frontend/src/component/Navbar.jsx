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
          <nav className=" hidden md:!block space-x-8">
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
          <button className="block md:hidden" onClick={() => setIsOpen(true)}>
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


// import React, { useState } from "react";
// import { Outlet, Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const menu = [
//     { name: "Home", path: "/" },
//     { name: "Experience", path: "/experience" },
//     { name: "Skills", path: "/skills" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Projects", path: "/projects" },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <header className="sticky top-0 z-50 flex justify-center">
//         <div className="w-[95%] max-w-7xl mt-4 px-6 py-4 
//         bg-white/70 backdrop-blur-xl 
//         border border-white/30 
//         shadow-lg rounded-full 
//         flex justify-between items-center transition-all duration-300">

//           {/* Logo */}
//           <Link
//             to="/"
//             className="text-2xl font-bold tracking-wide 
//             bg-gradient-to-r from-orange-500 to-orange-600 
//             bg-clip-text text-transparent"
//           >
//             MyPortfolio
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {menu.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative text-sm font-medium transition duration-300
//                 ${
//                   location.pathname === item.path
//                     ? "text-orange-500"
//                     : "text-gray-700 hover:text-orange-500"
//                 }`}
//               >
//                 {item.name}

//                 {/* Animated Underline */}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300
//                   ${
//                     location.pathname === item.path
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }`}
//                 ></span>
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setIsOpen(true)}
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </header>

//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setIsOpen(false)}
//       ></div>

//       {/* Mobile Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 
//         transform transition-transform duration-500 ease-in-out
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="p-6 flex justify-between items-center border-b">
//           <h2 className="text-xl font-bold text-orange-500">
//             MyPortfolio
//           </h2>
//           <button onClick={() => setIsOpen(false)}>
//             <X size={26} />
//           </button>
//         </div>

//         <nav className="flex flex-col p-6 gap-6">
//           {menu.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsOpen(false)}
//               className={`text-lg transition duration-300 ${
//                 location.pathname === item.path
//                   ? "text-orange-500 font-semibold"
//                   : "text-gray-700 hover:text-orange-500"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </aside>

//       {/* Page Content */}
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default Navbar;