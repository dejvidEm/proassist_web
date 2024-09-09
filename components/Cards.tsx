// pages/cards.tsx
import Card from "../components/Card";

type CardData = {
  image: string;
  title: string;
  text: string;
};

const cardsData: CardData[] = [
  {
    image: "/img/fotka_jedna.jpg",
    title: "Spokojnosť klientov",
    text: "Vaša spokojnosť je vždy našou prioritou",
  },
  {
    image: "/img/photo_2.jpg",
    title: "Odborné riešenia",
    text: "Každá situácia si vyžaduje svoje vlastné riešenie",
  },
  {
    image: "/img/photo_3.jpg",
    title: "Rýchla pomoc",
    text: "Okamžite dostupný v prípade dopravnej nehody",
  },
];

const CardsPage: React.FC = () => {
  return (
    <div className="h-auto pb-28 bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Naše priority</h1>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            delay={index * 0.3} // Incremental delay
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;