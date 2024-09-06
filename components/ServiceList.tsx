"use client"
import { motion } from "framer-motion";

const services = [
  "Asistenčná výjazdová služba priamo na mieste udalosti(nehoda, porucha)",
  "Odťahovacia služba",
  "Správa vozového parku",
  "Flat Tire Change",
  "Náhradné vozidlá",
  "Poistenie vozidiel",
];

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.3, // delay each item by 0.3s multiplied by its index
    },
  }),
};

const ServiceList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="space-y-2 list-disc mx-4">
        {services.map((service, index) => (
          <motion.li
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={listItemVariants}
            className="text-gray-700"
          >
            {service}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;