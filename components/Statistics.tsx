"use client";
import React from 'react';
import CountUp from 'react-countup';

interface StatisticItem {
  title: string;
  value: number;
  isCustomers?: boolean;
}

const Statistics: React.FC = () => {
  const data: StatisticItem[] = [
    { title: 'Počet spokojných zákazníkov', value: 500, isCustomers: true },
    { title: 'Počet úspešných výjazdov', value: 700, isCustomers: true },
    { title: 'Počet dostupných automobilov', value: 18 },
    { title: 'Rokov skúseností', value: 15 },
  ];

  return (
    <div className='flex flex-col bg-blue-100 sm:flex-row justify-around p-6 rounded-lg my-20'>
      {data.map((item, index) => (
        <div key={index} className='text-center mb-6 sm:mb-0'>
          <h2 className='text-2xl sm:text-4xl font-bold text-gray-800'>
            <CountUp start={0} end={item.value} duration={3.5} />{item.isCustomers ? '+' : ''}
          </h2>
          <p className='text-md sm:text-lg text-gray-600 font-bold'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;