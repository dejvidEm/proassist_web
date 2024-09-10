"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Dáta pre náhradné vozidlá
const vehiclesData = [
  {
    name: "Audi A4",
    image: "img/audi_a4.jpg",
    params: "Benzín, Automat, 5 miest",
    price: "50€/deň",
    availability: "Dostupné",
  },
  {
    name: "BMW 3",
    image: "img/audi_a4.jpg",
    params: "Diesel, Manuál, 5 miest",
    price: "60€/deň",
    availability: "Nedostupné",
  },
  {
    name: "Škoda Octavia",
    image: "img/audi_a4.jpg",
    params: "Benzín, Manuál, 5 miest",
    price: "40€/deň",
    availability: "Dostupné",
  },
];

// Komponent pre stránku s náhradnými vozidlami
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 pt-28">
      <div className="container mx-auto">
        {/* Sekcia o odťahovej službe */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold mb-4">Odťahová služba</h1>
          <p className="text-lg text-gray-700 mb-4 md:mb-8">
            V prípade potreby odťahovky nás neváhajte kontaktovať. Sme tu pre vás 24/7, pripravení vám pomôcť.
          </p>
          <a
            href="tel:+421900000000"
            className="rounded-full bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-gray-500 bg-gray-800 "
          >
            Zavolať odťahovku
          </a>
        </motion.div>

        {/* Nadpis pre náhradné vozidlá */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          Náhradné vozidlá
        </motion.h1>

        {/* Krátky text o náhradných vozidlách */}
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
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover rounded-t-lg mb-4" loading="lazy"/>
              <h2 className="text-xl font-semibold mb-2">{vehicle.name}</h2>
              <p className="text-gray-600 mb-2">{vehicle.params}</p>
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