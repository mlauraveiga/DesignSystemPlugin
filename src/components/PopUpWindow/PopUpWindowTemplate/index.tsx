import React from "react";
import "./PopUpWindow.sass";
import IconButton from "../../Buttons/Icon";
import Cross from "../../../assets/icons/cross";
import Button from "../../Buttons/Button";

const PopUpWindow = ({ isOpen, handleClose, content, secondaryButtonName, primaryButtonName, primaryButtonType, buttonAction }: { isOpen: boolean, handleClose: Function, content: any, secondaryButtonName: string, primaryButtonName: string, primaryButtonType: string, buttonAction: Function }) => {
    return (
        <div
            className="popUpWindow"
            style={{
                display: isOpen ? "block" : "none",
            }}
        >
            <div className="popUp">
                <div className="popUp_cross">
                    <IconButton
                        icon={<Cross />}
                        onClick={handleClose}
                    />
                </div>
                <div className="popUp_content">
                    {content}
                </div>
                <div className="popUp_buttons">
                    <Button name={secondaryButtonName} priority=" secondary" type="" onClick={handleClose} />
                    <Button name={primaryButtonName} priority=" primary" type={primaryButtonType} onClick={buttonAction} />
                </div>
            </div>
        </div>
    );
}

export default PopUpWindow;