import { posix } from "path";
import React from "react";

export const links = [
    {
      name: "O nás",
      hash: "/About",
    },
    {
      name: "Náhradné vozidlá",
      hash: "/Vehicles",
    },
    {
      name: "Správa o nehode",
      hash: "/Report",
    },
    {
      name: "Čísla poisťovní",
      hash: "/Numbers",
      },
  ] as const;

  export const cards = [
    {
      image: "https://via.placeholder.com/400x300",
      title: "Nadpis 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Nadpis 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Nadpis 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
    },
  ] as const;

  export const reviews = [
    {
      name: "Jan Novotny",
      rating: 5,
      text: "Tuto službu som využil a bola skvelá!",
    },
    {
      name: "Marta Kováčová",
      rating: 4,
      text: "Veľmi spokojná s asistenciou. Rýchla a profesionálna služba.",
    },
    {
      name: "Peter Novák",
      rating: 3,
      text: "Bolo to v poriadku, ale čakal som lepšiu komunikáciu.",
    },
  ] as const;