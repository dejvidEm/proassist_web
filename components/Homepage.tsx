"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Homepage = () => {
    return (
        <div>
            <div className="flex justify-center items-center py-40 sm:py-28">
                <div className="relative flex items-center">
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}  // Začína vpravo mimo obrazovku
                        animate={{ x: 0, opacity: 1 }}   // Posunie sa do pozície
                        transition={{ type: "spring", bounce: 0.3, duration: 1.2 }}  // Definovanie animácie
                        className="car-image"
                    >
                        <img src="img/skoda.png" alt="Car" className="max-w-full h-auto" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3 }}
                        className="glass-panel flex flex-col gap-8 absolute top-1/4 lg:-left-56 transform -translate-y-1/4 bg-white bg-opacity-20 rounded-2xl p-8 lg:w-96 lg:h-4/5 w-72 h-auto backdrop-blur-md shadow-lg text-gray-800"
                    >
                        <h1 className="text-xl lg:text-2xl font-semibold">
                            Spoľahlivá <span className='text-blue-600'>asistenčná</span> <span className='text-red-500'>služba</span> pri dopravnej nehode
                        </h1>
                        <p className="text-sm lg:text-base">
                            Každá situácia je jedinečná a preto poskytujeme riešenia šité na mieru Vašim potrebám.
                        </p>
                        <a href="#contact">
                            <button
                                type="button"
                                className="text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600"
                            >
                                Zavolajte Nám hneď
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className='w-full h-auto'>
                <p className='italic underline-offset-1 font-light text-md md:text-xl px-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400'>„Každý dobrý servis zameraný na spokojnosť klienta, ponúkne vždy viac ako ostatní.“</p>
            </div>
        </div>
    );
}

export default Homepage;