import React, { useEffect, useState } from "react";
import "./DSCard.sass";
import PopUp from "../PopUpMenu/PopUpTemplate";
import ThreeDots from "../../assets/icons/threeDots";
import PUW_DeleteDS from "../PopUpWindow/DeleteDS";
import FeedbackMessage from "../FeedbackMessage";

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

export const createDesignSystem = async (newDesignSystem) => {
    try {
        const response = await fetch('http://localhost:8000/designSystems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDesignSystem),
        });

        const createdDesignSystem = await response.json();
        return createdDesignSystem;
    } catch (error) {
        console.error('Error creating design system:', error);
        throw error;
    }
};


const DSCard = ({ cards: initialCards, isActive, options, sortOption, searchQuery }: { cards: card[], isActive: boolean, options: any, sortOption: string | null, searchQuery: string }) => {
    const [sortedCards, setSortedCards] = useState(sortCards(initialCards, sortOption));
    const [deletePopup, setDeletePopup] = useState(false);
    const [cardToDelete, setCardToDelete] = useState<string | null>(null);
    const [feedbackMessage, setFeedbackMessage] = useState(null);

    useEffect(() => {
        setSortedCards(sortCards(initialCards, sortOption));
    }, [initialCards, sortOption]);

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
            setFeedbackMessage(<FeedbackMessage title='Design System Archived' text='You have successfully archived the design system.' type='Success' />);
            return updatedCards;
        }
        catch (error) {
            console.error('Error archiving design system:', error);
            setFeedbackMessage(<FeedbackMessage title='Error archiving design system' text='The design system was not archived.' type='Error' />);
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
            setFeedbackMessage(<FeedbackMessage title='Design System Restored' text='You have successfully restored the design system.' type='Success' />);
            return updatedCards;
        }
        catch (error) {
            console.error('Error archiving design system:', error);
            setFeedbackMessage(<FeedbackMessage title='Error restoring design system' text='The design system was not restored.' type='Error' />);
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
            setFeedbackMessage(<FeedbackMessage title='Design System Deleted' text='You have successfully deleted the design system.' type='Success' />);
        } catch (error) {
            console.error('Error deleting design system:', error);
            setFeedbackMessage(<FeedbackMessage title='Error deleting design system' text='The design system was not deleted.' type='Error' />);
        }
    };

    useEffect(() => {
        // Clear the feedback message after 4000 milliseconds (4 seconds)
        const timeoutId = setTimeout(() => {
            setFeedbackMessage(null);
        }, 3000);

        // Clear the timeout when the component unmounts or when the feedbackMessage changes
        return () => clearTimeout(timeoutId);
    }, [feedbackMessage]);

    const handleAction = async (cardId: string, selectedOptionId: string) => {
        const selectedOption = selectedOptionId;
        console.log("Card to delete: " + cardId);

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
                //await deleteDS(cardId);
                //const updatedCardsDelete = sortedCards.filter((card) => card.id !== cardId);
                //setSortedCards(updatedCardsDelete);
                setCardToDelete(cardId);
                setDeletePopup(true);
                break;

            default:
                break;
        }
    };

    const handleDeleteCancel = () => {
        setDeletePopup(false);
    };

    const handleDeleteConfirm = async () => {

        await deleteDS(cardToDelete);
        const updatedCardsDelete = sortedCards.filter((card) => card.id !== cardToDelete);
        setSortedCards(updatedCardsDelete);

        //setCardToDelete(null);

        setDeletePopup(false);
    };

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
                            handleAction(card.id, selectedOption);
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

            {deletePopup && (
                <PUW_DeleteDS
                    isOpen={deletePopup}
                    handleClose={handleDeleteCancel}
                    deleteAction={handleDeleteConfirm}
                />
            )}

            {feedbackMessage}
        </div>
    );
};

export default DSCard;
