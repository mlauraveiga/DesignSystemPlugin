import React, { useRef } from "react";
import { useState } from "react";

const IconPopUpButton = ({ options, onClick: customOnClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popRef = useRef<HTMLDivElement>(null);

    customOnClick = () => {
      setIsOpen(true);
      popRef.current.focus(); // Focus the pop-up to prevent accidental closing
    };
  
    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== popRef.current) {
        // Close the pop-up if the click isn't on the pop-up
        setIsOpen(false);
      } else {
        event.stopPropagation(); // Prevent the event from bubbling up
      }
    };
  
    return (
      <div>
        <button onClick={customOnClick}>Open Popup</button>
  
        {isOpen && (
          <div
            className="popover"
            ref={popRef}
            onClick={handleClose}
          >
            {options.map((option) => (
              <div key={option.id}>
                <h3>{option.title}</h3>
                {option.description}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default IconPopUpButton;