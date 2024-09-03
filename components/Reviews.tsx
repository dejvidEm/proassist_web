"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '../lib/data';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, rating, text } = reviews[currentIndex];
  const transition = { duration: 0.5 };

  return (
    <div className="relative w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          className="w-full"
        >
          <div className="text-center mb-4">
            <div className="flex justify-center items-center mb-2">
              {[...Array(rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.448a1 1 0 00-1.175 0l-3.367 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.17 9.384c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="font-semibold">{name}</p>
          </div>
          <p className="text-gray-600 text-center">{text}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between w-full mt-6">
        <button
          onClick={handlePrevClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        >
          {"<"}
        </button>
        <button
          onClick={handleNextClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Reviews;