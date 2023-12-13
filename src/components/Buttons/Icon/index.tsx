import React from "react";
import "./iconButton.sass";

const IconButton = ({onClick, icon}) => {
    return (  
        <button onClick={onClick}>
          {icon}
        </button>
    );
}
 
export default IconButton;