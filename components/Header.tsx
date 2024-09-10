"use client"
import React, { useState } from 'react';
import { links } from '../lib/data';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full z-[9999] top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
                <img src="/img/logo_new.png" className="h-7 md:h-8" alt="Logo" />
            </Link>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="tel:+421911551556">
            <button type="button" className="rounded-full bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-gray-500 bg-gray-800 ">Zavolajte Nám</button>
          </a>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.hash}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700"
                  onClick={closeNavbar}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:+421911551556">
            <button type="button" className="text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 md:py-2.5 mt-4 text-center me-2 mb-2 block md:hidden dark:border-gray-600">Zavolajte Nám</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;