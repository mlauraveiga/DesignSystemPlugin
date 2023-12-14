import React, { useRef } from "react";
import { useState } from "react";
import IconButton from "../Buttons/Icon";
import './popup.sass';
import Toggle from "../Toggle";

const PopUp = ({ option, onClick: customOnClick, icon }) => {
  const [isOpen, setIsOpen] = useState(true);
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

  type option = {
    id: string;
    title: string;
    toggle?: boolean;
  }

  if (option.toggle === true) {
    <Toggle />
  } else {
  }

  option.toggle = false;

  return (
    <div>
      <IconButton onClick={customOnClick} icon={icon} />

      {isOpen && (
        <div
          className="popover"
          ref={popRef}
          onClick={handleClose}
        >
          {option.map((option) => (
            <div className="popover-box">
              {!option.toggle && (
                <div className="popover-option" key={option.id}>
                  <p className="option" >
                    {option.title}
                  </p>
                </div>
              )}
              {option.toggle && (
                <div className="popover-option toggletrue" key={option.id}>
                  <p className="option" >
                    <p className="option-title">{option.title}</p>
                    <div className="toggle" ><Toggle /></div>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopUp;