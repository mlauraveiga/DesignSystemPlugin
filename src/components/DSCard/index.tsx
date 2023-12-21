import React from "react";
import "./DSCard.sass";
import PopUp from "../PopUpMenu/PopUpTemplate";
import ThreeDots from "../../assets/icons/threeDots";

interface card {
    id: string;
    title: string;
    image: string;
    description: string;
    dateOfCreation: string;
    teamMembers: string[];
    active: boolean;
}

const sortAlphabetically = (cards: card[]) => {
    return cards.slice().sort((a, b) => a.title.localeCompare(b.title));
};

const sortCards = (cards: card[], sortOption: string | null) => {
    switch (sortOption) {
        case 'Alphabetical':
            return sortAlphabetically(cards);
        // Add other cases for different sorting options

        default:
            return cards;
    }
};

const DSCard = ({ cards, isActive, options, sortOption, searchQuery }: { cards: card[], isActive: boolean, options: any, sortOption: string | null, searchQuery: string }) => {
  const sortedCards = sortCards(cards, sortOption);

  const renderCard = (card: card) => (
    <div className="card" key={card.id}>
      <div className="card-image">
        <img src={card.image} alt={card.title} />
      </div>
      <div className="card-content">
        <p className="card-title">{card.title}</p>
        <div className="card-button">
          <PopUp option={options} icon={<ThreeDots />} place="down left" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="cards-div">
      {isActive
        ? sortedCards
          .filter(
            (card) =>
              card.active && card.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((card) => renderCard(card))
        : sortedCards
          .filter(
            (card) =>
              !card.active && card.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((card) => renderCard(card))}
    </div>
  );
};

export default DSCard;
