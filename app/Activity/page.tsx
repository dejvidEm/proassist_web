"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Aktuality = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(true);

  const news = [
    {
      id: 1,
      title: 'Nový príspevok',
      description: 'Krátky popis nového príspevku...',
      date: '22. september 2024',
      image: '/img/audi_a4.jpg',
      fullText: 'Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku Tu je celý text nového príspevku',
    },
    {
      id: 2,
      title: 'Druhý príspevok',
      description: 'Krátky popis druhého príspevku...',
      date: '21. september 2024',
      image: '/img/audi_a4.jpg',
      fullText: 'Tu je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku u je celý text druhého príspevku',
    },
  ];

  const toggleExpand = (id: any) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 640);
    };

    handleResize(); // Inicializuj šírku pri načítaní
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aktuality
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Tu nájdete najnovšie aktuality a správy.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Pripravuje sa..
        </motion.p>
      </div>
    </div>
  );
};

export default Aktuality;