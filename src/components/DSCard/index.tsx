import React from "react";
import "./DSCard.sass";
//import AtlassianDS from "../../assets/images/AtlassianDS.png";
//import BaseUIDS from "../../assets/images/BaseUIDS.png";
//import CarbonDS from "../../assets/images/CarbonDS.png";
import PopUp from "../PopUpMenu/PopUpTemplate";
import ThreeDots from "../../assets/icons/threeDots";

//const AtlassianDS = require("../../assets/images/AtlassianDS.png");
//const BaseUIDS = require("../../assets/images/BaseUIDS.png");
//const CarbonDS = require("../../assets/images/CarbonDS.png");


const DSCard = ({ cards }) => {
    /*type card = {
        id: string;
        title: string;
        image: string;
        descritpion: string;
        dateOfCreation: string;
        teamMembers: string[];
        active: boolean;
    }*/

    const options = [
        {
            id: 'option1',
            title: 'Open',
        },
        {
            id: 'option2',
            title: 'Details',
        },
        {
            id: 'option3',
            title: 'Archive',
        }
    ]

    return (
        <div className="cards-div" >
            {cards.map((card) => (
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
            ))}
        </div>
    );
}

export default DSCard;