"use client"
import React from 'react';
import CountUp from 'react-countup';

interface StatisticItem {
  title: string;
  value: number;
}

const Statistics: React.FC = () => {
  const data: StatisticItem[] = [
    { title: 'Počet spokojných zákazníkov', value: 1030 },
    { title: 'Počet úspešných výjazdov', value: 560 },
    { title: 'Počet dostupných automobilov', value: 18 },
    { title: 'Roky skúseností', value: 15 },
  ];

  return (
    <div style={styles.container} className='my-20'>
      {data.map((item, index) => (
        <div key={index}>
          <h2 style={styles.number}>
            <CountUp start={0} end={item.value} duration={3.5} />
          </h2>
          <p style={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  },
  card: {
    textAlign: 'center',
    padding: '10px',
  },
  number: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default Statistics;