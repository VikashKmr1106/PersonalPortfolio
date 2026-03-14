import React, { useEffect, useRef, useState } from "react";

const AdvancedCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    const speed = 0.15;

    const mouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posX}px, ${posY}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", mouseMove);
    animate();

    const hoverElements = document.querySelectorAll("a,button,.hover-target");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] 
      rounded-full transition-all duration-300
      ${hovering ? "w-16 h-16 bg-indigo-500/30" : "w-6 h-6 bg-indigo-500/70"}
      backdrop-blur-md`}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default AdvancedCursor;