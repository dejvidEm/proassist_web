"use client"
import { motion } from 'framer-motion';
import React from 'react'

const Homepage = () => {
    return (
        <div>
            <div className="flex justify-center items-center  pt-40">
                <div className="relative flex items-center">
                    <div className="car-image">
                        <img src="img/skoda.png" alt="Car" className="max-w-full h-auto" />
                    </div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3 }}
                    className="glass-panel flex flex-col gap-8 absolute top-1/4 -left-56 transform -translate-y-1/4 bg-white bg-opacity-20 rounded-2xl p-8 w-96 h-4/5 backdrop-blur-md shadow-lg text-gray-800">
                        <h1 className="text-2xl font-semibold">Spoľahlivá <span className='text-blue-600'>asistenčná</span> <span className='text-red-500'>služba</span> pri dopravnej nehode</h1>
                        <p>Každá situácia je jedinečná a preto poskytujeme riešenia šité na mieru Vašim potrebám.</p>
                        <a href="#contact">
                            <button type="button" className="text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 mb-8">Zavolajte Nám</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
      );
}

export default Homepage