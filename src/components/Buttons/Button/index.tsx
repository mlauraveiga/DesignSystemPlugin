import React from "react";
import "./button.sass";

const Button = ({ name, priority, type, onClick }: { name: string, priority: string, type: string, onClick: any }) => {
    return (  
        <div>
            <button 
            className={"button" + priority + type} 
            onClick={onClick}>
                <p className={"button_text"}>{name}</p>
            </button>
        </div>
    );
}
 
export default Button;