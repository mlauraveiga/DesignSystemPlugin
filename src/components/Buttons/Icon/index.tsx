import React from "react";
import "./iconButton.sass";

const IconButton = (props) => {
  if(props.onClick === undefined) return (
    <button>
      {props.icon}
    </button>
  )

    return (  
        <button onClick={props.onClick}>
          {props.icon}
        </button>
    );
}
 
export default IconButton;