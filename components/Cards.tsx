// pages/cards.tsx
import Card from "../components/Card";

type CardData = {
  image: string;
  title: string;
  text: string;
};

const cardsData: CardData[] = [
  {
    image: "https://via.placeholder.com/400x300",
    title: "Card 1",
    text: "This is a short description for card 1.",
  },
  {
    image: "https://via.placeholder.com/400x300",
    title: "Card 2",
    text: "This is a short description for card 2.",
  },
  {
    image: "https://via.placeholder.com/400x300",
    title: "Card 3",
    text: "This is a short description for card 3.",
  },
];

const CardsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Cards Page</h1>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            delay={index * 0.2} // Incremental delay
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;