"use client";
import React from 'react'
import { motion } from 'framer-motion';

import { CheckIcon, ChevronRightIcon } from "lucide-react";

import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';


export default function Contact() {
  return (
    <section id='contact' className='py-28 text-center mb-20 sm:mb-28 w-[min(100% ,38rem)] '>
      <h1 className='text-3xl sm:text-4xl font-bold pb-4'>Kontaktujte Nás</h1>
      <p className='text-gray-700 -mt-3 mb-8 mx-4'>Prosím kontaktujte Nás prostredníctvom formuláru nižšie alebo nám zavolajte na <a className='underline font-bold' href="tel:+421911551556">0911551556</a></p>
      <form>
        <input name='name' type="name" required maxLength={500} placeholder='Meno Priezvisko' className='mx-8 px-4 w-[345px] sm:w-[400px] md:w-[800px] h-14 rounded-lg borderBlack dark:bg-white/80 focus:dark:bg-white/100 transition-all dark:outline-none border-2 mb-3'/>
        <input name='mobile' type="tel" required maxLength={500} placeholder='Telefónne číslo' className='mx-8 px-4 w-[345px] sm:w-[400px] md:w-[800px] h-14 rounded-lg borderBlack dark:bg-white/80 focus:dark:bg-white/100 transition-all dark:outline-none border-2 mb-3'/>
        <input name='email' type="email" required maxLength={500} placeholder='Váš email' className='mx-8 px-4 w-[345px] sm:w-[400px] md:w-[800px] h-14 rounded-lg borderBlack dark:bg-white/80 focus:dark:bg-white/100 transition-all dark:outline-none border-2'/>
        <textarea name='message' placeholder='Vaša správa' className='h-52 mx-8 w-[345px] sm:w-[400px] md:w-[800px] my-3 rounded-lg borderBlack p-4 dark:bg-white/80 focus:dark:bg-white/100 transition-all dark:outline-none border-2' required maxLength={5000}></textarea>
      </form>
      <button className="rounded-full bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-gray-800 bg-gray-900 ">
    Odoslať správu
    </button>
    </section>
  )
}