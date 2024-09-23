"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Vehicles: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 pt-28">
      <div className="container mx-auto pb-28">

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

        {/* Sekcia o vypožičaní vozidla */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Ako funguje vypožičanie vozidla</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Pri dopravnej nehode je pre Vás kľúčové, aby ste sa mohli čo najrýchlejšie vrátiť k bežnému životu a povinnostiam. Preto vám asistenčná služba Proassist ponúka bezplatné zapožičanie náhradného vozidla.
          </p>

          <div className="text-left">
            <p className="text-lg text-gray-700 mb-4">
              <strong>1. Nahlásenie nehody:</strong><br />
              Po nahlásení udalosti príslušnej poisťovni nás neváhajte kontaktovať ☎️18001
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>2. Rýchle riešenie:</strong><br />
              Naši odborníci zabezpečia promptnú analýzu situácie a poskytnú Vám vhodné riešenie.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>3. Bezplatné zapožičanie:</strong><br />
              Náhradné vozidlo vám poskytneme úplne zadarmo, pokiaľ je známy vinník nehody, počas doby nevyhnutnej na opravu.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-4 text-left">
            Naším cieľom je uľahčiť vám riešenie následkov nečakanej udalosti a poskytnúť komfort a bezpečnosť aj v takejto nepríjemnej situácii. V asistenčnej službe Proassist veríme, že rýchla a efektívna pomoc je kľúčová, aby ste mohli bez zbytočných starostí pokračovať vo svojich denných aktivitách.
          </p>

          <p className="text-lg text-gray-700 mb-4 text-left">
            V prípade potreby náhradného vozidla nás neváhajte kontaktovať. Sme tu pre vás!
          </p>

          <p className="text-lg text-gray-700 text-left">
            👉🏻Pokiaľ ste vinníkom nehody, informujte sa taktiež na možný benefit zapožičania náhradného vozidla, ktorý vieme individuálne zabezpečiť.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vehicles;