// src/components/Particle.js
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Particle = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  
  // Array of possible colors
  const colors = ["#ffffff", "#ffdd57", "#ff6b6b", "#5f9cfe", "#39c5bb", "#ff7eb3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialX = Math.random() * windowDimensions.width;
  const initialY = Math.random() * windowDimensions.height;

  const particleVariants = {
    animate: {
      x: [initialX, initialX + (Math.random() * 20 - 10)],
      y: [initialY, initialY + (Math.random() * 20 - 10)],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full opacity-70"
      style={{ backgroundColor: randomColor }} // Apply the random color
      initial={{ x: initialX, y: initialY }}
      animate="animate"
      variants={particleVariants}
    />
  );
};

export default Particle;
