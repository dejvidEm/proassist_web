"use client"
import { motion } from "framer-motion";

const services = [
  "24/7 Roadside Assistance",
  "Towing Service",
  "Battery Jumpstart",
  "Flat Tire Change",
  "Fuel Delivery",
  "Lockout Service",
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
      <ul className="space-y-2">
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