import React, { useEffect, useState } from "react";
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

const archiveDS = async (cards: card[], id: string) => {
    try {
        const response = await fetch(`http://localhost:8000/designSystems/${id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ active: false }),
        });

        const updatedCard: card = await response.json();
        const updatedCards = cards.map((card) => (card.id === id ? updatedCard : card));
        console.log("Updated Cards: " + updatedCards);
        return updatedCards;
    }
    catch (error) {
        console.error('Error archiving design system:', error);
        return cards;
    }
};

const restoreDS = async (cards: card[], id: string) => {
    try {
        const response = await fetch(`http://localhost:8000/designSystems/${id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ active: true }),
        });

        const updatedCard: card = await response.json();
        const updatedCards = cards.map((card) => (card.id === id ? updatedCard : card));
        console.log("Updated Cards: " + updatedCards);
        return updatedCards;
    }
    catch (error) {
        console.error('Error archiving design system:', error);
        return cards;
    }
};

const deleteDS = async (id: string) => {
    try {
        await fetch(`http://localhost:8000/designSystems/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log("Card deleted successfully.");
        // You might want to indicate success or handle it in your UI
    } catch (error) {
        console.error('Error deleting design system:', error);
        // Handle errors or display an error message in your UI
    }
};

const DSCard = ({ cards: initialCards, isActive, options, sortOption, searchQuery }: { cards: card[], isActive: boolean, options: any, sortOption: string | null, searchQuery: string }) => {
    const [sortedCards, setSortedCards] = useState(sortCards(initialCards, sortOption));

    useEffect(() => {
        setSortedCards(sortCards(initialCards, sortOption));
    }, [initialCards, sortOption]);

    const handleAction = async (cardId: string, selectedOptionId: string) => {
        const selectedOption = selectedOptionId;
        console.log(selectedOption);
      
        switch (selectedOption) {
            case 'archive':
              const updatedCardsArchive = await archiveDS(sortedCards, cardId);
              setSortedCards(updatedCardsArchive);
              break;
      
            case 'restore':
              const updatedCardsRestore = await restoreDS(sortedCards, cardId);
              setSortedCards(updatedCardsRestore);
              break;
      
            case 'delete':
              await deleteDS(cardId);
              const updatedCardsDelete = sortedCards.filter((card) => card.id !== cardId);
              setSortedCards(updatedCardsDelete);
              break;
      
            default:
              break;
          }
      };
      


    //console.log("Cards: " + sortedCards.map((card) => card.active));
    //console.log("Action: " + options[0].action);
    //console.log("Action: " + options[1].action);
   // console.log("ActionFind: " + options.find((option) => option.action === 'restore'));
    //console.log("ActionMap: " + options.map((option) => option.action === 'restore'));


    const renderCard = (card: card) => (
        <div className="card" key={card.id}>

            <div className="card-image">
                <img src={card.image} alt={card.title} />
            </div>
            <div className="card-content">
                <p className="card-title">{card.title}</p>
                <div className="card-button">
                    <PopUp
                        option={options}
                        icon={<ThreeDots />}
                        place="down left"
                        optionAction={(selectedOption) => {
                            console.log(selectedOption);
                            handleAction(card.id, selectedOption)
                        }}
                    />
                </div>
            </div>
        </div>
    );

    const filteredCards = isActive
        ? sortedCards.filter((card) => card.active && card.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : sortedCards.filter((card) => !card.active && card.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="cards-div">
            {filteredCards.length > 0 ? (
                filteredCards.map((card) => renderCard(card))
            ) : (
                <p className="noMatch">No results found.</p>
            )}
        </div>
    );
};

export default DSCard;
