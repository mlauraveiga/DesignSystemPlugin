import React from "react";
import "./style.sass";
import Background from "../../assets/background";
import { useNavigate } from "react-router-dom";


export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="box">
            <Background />
            <button onClick={ () => {
                    navigate("/ds-menu-active");
                }
            } >Start</button>
        </div>
    );
};
