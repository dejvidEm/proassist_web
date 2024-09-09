"use client"
import React from 'react';
import { motion } from 'framer-motion';

const insuranceData = [
  { name: "Allianz", phone: "+421 123 456 789", icon: "/img/po/alianz.png" },
  { name: "Axa", phone: "+421 555 123 456", icon: "/img/po/axa.png" },
  { name: "Uniqua", phone: "+421 555 123 456", icon: "/img/po/uniqua.png" },
  { name: "Groupama", phone: "+421 555 123 456", icon: "/img/po/neviem.png" },
  { name: "Generali", phone: "+421 987 654 321", icon: "/img/po/generali.png" },
  { name: "Kooperativa", phone: "+421 555 123 456", icon: "/img/po/zelena.png" },
  { name: "ČSOB", phone: "+421 555 123 456", icon: "/img/po/csob.png" },
  { name: "Generali", phone: "+421 555 123 456", icon: "/img/po/generali.png" },
  { name: "Genertel", phone: "+421 555 123 456", icon: "/img/po/g.png" },
  { name: "Komunálna", phone: "+421 555 123 456", icon: "/img/po/koop.png" },
  { name: "Union", phone: "+421 555 123 456", icon: "/img/po/union.png" },
  { name: "Wustenrot", phone: "+421 555 123 456", icon: "/img/po/wu.png" },
];

const Insurance: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 pt-28 pb-20">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          Kontakty na poisťovne
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={textVariants}
        >
          Tu nájdete kontaktné čísla na poisťovne v prípade potreby. Kliknutím na číslo sa priamo spojíte s poisťovňou.
        </motion.p>

        {/* Zoznam poisťovní v dvoch stĺpcoch */}
        <motion.div
          className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={listVariants}
        >
          {insuranceData.map((insurance, index) => (
            <a
              key={index}
              href={`tel:${insurance.phone}`}
              className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            >
              <img src={insurance.icon} alt={`${insurance.name} logo`} className="w-10 h-10 rounded-full mr-4" />
              <div className="text-left">
                <h2 className="text-xl font-semibold">{insurance.name}</h2>
                <p className="text-gray-600">{insurance.phone}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Insurance;