import React from "react";
import "./style.sass";
import Background from "../../assets/background";
import { useNavigate } from "react-router-dom";


export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="background">
            <Background />
            <div className="content">
                <div className="content_text">
                    <h1>Nebula.</h1>
                    <h2>Design Systems Manager</h2>
                </div>
                <div className="content_button">
                    <button onClick={() => {
                        navigate("/ds-menu-active");
                    }}>Start</button>
                </div>
            </div>
        </div>
    );
};
