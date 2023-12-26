import React, { useEffect, useState } from "react";
import "./feedbackMessage.sass";
import IconButton from "../Buttons/Icon";
import Cross from "../../assets/icons/cross";
import Success from "../../assets/icons/feedbackMessage/success";
import Error from "../../assets/icons/feedbackMessage/error";
import Warning from "../../assets/icons/feedbackMessage/warning";

const FeedbackMessage = ({ title, text, type }: { title: string, text: string, type: string }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [shouldClose, setShouldClose] = useState(false);
    const [animationClass, setAnimationClass] = useState("");
    let boxStyle = "";
    let icon;

    switch (type) {
        case "Success":
            boxStyle = "success";
            icon = <Success />;
            break;
        case "Error":
            boxStyle = "error";
            icon = <Error />;
            break;
        case "Warning":
            boxStyle = "warning";
            icon = <Warning />;
            break;
        default:
            boxStyle = "success";
            icon = <Success />;
            break;
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationClass("animation");
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldClose(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (shouldClose) {
            setIsOpen(false);
        }
    }, [shouldClose]);

    const handleClose = () => {
        setShouldClose(true);
    };

    return (
        <div
        className={`feedbackMessage ${boxStyle} ${animationClass}`}
            style={{
                display: isOpen ? "block" : "none",
            }}
        >
            <div className="feedbackMessage_content">
                <div className="feedbackMessage_icon">
                    {icon}
                </div>
                <div className="feedbackMessage_text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
            <div className="feedbackMessage_cross">
                <IconButton
                    icon={<Cross />}
                    onClick={handleClose}
                />
            </div>
        </div>
    );
}

export default FeedbackMessage;