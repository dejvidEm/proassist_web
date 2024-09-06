"use client"
import { motion } from "framer-motion";

type CardProps = {
  image: string;
  title: string;
  text: string;
  delay?: number;
};

const Card: React.FC<CardProps> = ({ image, title, text, delay = 0}) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-6 m-4 max-w-[300px] flex flex-col items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay}}
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-gray-600 text-center mt-2">{text}</p>
    </motion.div>
  );
};

export default Card;