"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Report: React.FC = () => {
  // Definícia animácií pre nadpis, text a tlačidlo
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Nadpis */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          Správa o nehode
        </motion.h1>

        {/* Krátky text */}
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={textVariants}
        >
          V prípade nehody je dôležité mať pripravenú správu. Stiahnite si ju pomocou tlačidla nižšie.
        </motion.p>

        {/* Tlačidlo na stiahnutie */}
        <motion.a
          href="/documents/sprava_o_nehode.pdf"  // predpokladáme, že dokument je v priečinku public/documents
          download
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={buttonVariants}
        >
          Stiahnuť správu o nehode
        </motion.a>
      </div>
    </div>
  );
};

export default Report;