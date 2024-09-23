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

        <div className="w-full max-w-4xl mx-auto">
          {news.map(({ id, title, description, date, image, fullText }) => (
            <motion.div
              key={id}
              className={`flex flex-col sm:flex-row items-start p-4 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out mb-4 ${
                expandedCard === id ? 'h-auto' : 'h-32 overflow-hidden'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {(expandedCard === id || isWideScreen) ? ( // Zobrazí obrázok, ak je karta rozšírená alebo na väčšej obrazovke
                <img src={image} alt={title} className={`w-full sm:w-1/4 h-auto mb-4 sm:mb-0 rounded-lg ${expandedCard === id ? '' : 'object-cover h-full'}`} />
              ) : null}
              <div className="flex-grow px-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-700">{expandedCard === id ? fullText : description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-500 text-sm">{date}</span>
                  <button
                    onClick={() => toggleExpand(id)}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    {expandedCard === id ? 'Zbaliť' : 'Čítať viac'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aktuality;