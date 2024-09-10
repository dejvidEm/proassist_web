"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const services = [
  "Asistenčná výjazdová služba priamo na mieste udalosti(nehoda, porucha)",
  "Odťahovacia služba",
  "Správa vozového parku",
  "Náhradné vozidlá",
  "Poistenie vozidiel",
];

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.3,
    },
  }),
};

const ServiceList: React.FC = () => {
  const [inView, setInView] = useState<boolean[]>(new Array(services.length).fill(false));
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemsRef.current.indexOf(entry.target as HTMLLIElement);
          if (index !== -1) {
            setInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
          }
        }
      });
    }, { threshold: 0.1 });

    itemsRef.current.forEach((item) => item && observer.observe(item));

    return () => {
      itemsRef.current.forEach((item) => item && observer.unobserve(item));
    };
  }, [services.length]);

  return (
    <div className="bg-white p-10 mb-10 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Naše služby</h2>
      <ul className="space-y-2 list-disc mx-4">
        {services.map((service, index) => (
          <motion.li
            key={index}
            ref={(el) => {
              if (el) {
                itemsRef.current[index] = el;
              }
            }}
            custom={index}
            initial="hidden"
            animate={inView[index] ? "visible" : "hidden"}
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