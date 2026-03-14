import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 220);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed z-50 bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTop;