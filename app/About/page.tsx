"use client"
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Nadpis */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          O Nás
        </motion.h1>

        {/* Fotka */}
        <motion.img
          src="https://via.placeholder.com/600x400"
          alt="O nás"
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={imageVariants}
        />

        {/* Text */}
        <motion.p
          className="text-lg text-gray-700 max-w-md text-center md:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={textVariants}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          Cras venenatis euismod malesuada. Nam a dolor quis orci sodales suscipit. Sed euismod orci ut lectus tempor, 
          a pretium magna congue.
        </motion.p>
      </div>
    </div>
  );
};

export default About;