import FloatingCard from "./FloatingCard";
import { heroCards } from "./heroCardsData";

export default function FloatingCards() {
  return (
    <>
      {heroCards.map((card) => (
        <FloatingCard
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          x={card.x}
          y={card.y}
        />
      ))}
    </>
  );
}