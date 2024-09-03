"use client"
import React from 'react';
import { motion } from 'framer-motion';

const vehiclesData = [
  {
    name: "Audi A4",
    image: "https://via.placeholder.com/400x300",
    params: "Benzín, Automat, 5 miest",
    price: "50€/deň",
    availability: "Dostupné",
  },
  {
    name: "BMW 3",
    image: "https://via.placeholder.com/400x300",
    params: "Diesel, Manuál, 5 miest",
    price: "60€/deň",
    availability: "Nedostupné",
  },
  {
    name: "Škoda Octavia",
    image: "https://via.placeholder.com/400x300",
    params: "Benzín, Manuál, 5 miest",
    price: "40€/deň",
    availability: "Dostupné",
  },
];

const Vehicles: React.FC = () => {
  // Definícia animácií pre nadpis, text a karty
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container mx-auto">
        {/* Nadpis */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          Náhradné vozidlá
        </motion.h1>

        {/* Krátky text */}
        <motion.p
          className="text-lg text-gray-700 mb-8 text-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={textVariants}
        >
          Ponúkame široký výber náhradných vozidiel pre vaše pohodlie a komfort počas opravy vášho auta.
        </motion.p>

        {/* Karty s vozidlami */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehiclesData.map((vehicle, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              variants={cardVariants}
            >
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{vehicle.name}</h2>
              <p className="text-gray-600 mb-2">{vehicle.params}</p>
              <p className="text-gray-800 font-bold mb-2">{vehicle.price}</p>
              <p className={`font-semibold ${vehicle.availability === "Dostupné" ? "text-green-500" : "text-red-500"}`}>
                {vehicle.availability}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;