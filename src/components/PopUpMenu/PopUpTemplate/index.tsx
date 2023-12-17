import React, { useRef } from "react";
import { useState } from "react";
import IconButton from "../../Buttons/Icon";
import './popup.sass';
import Toggle from "../../Toggle";
import { useNavigate } from "react-router-dom";

const PopUp = ({ option, icon, place }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
    popRef.current.focus();
  };

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as Node) !== popRef.current && !popRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    } else {
      event.stopPropagation();
    }
  };

  type option = {
    id: string;
    title: string;
    toggle?: boolean;
    path?: string;
  }

  if (option.toggle === true) {
    <Toggle />
  } else {
  }

  option.toggle = false;

  return (
    <div className={"buttonpopup " + place}>
      {isOpen && (
        <div onClick={handleClose}>
          <IconButton onClick={handleClose} icon={icon} />
          <div
            className="popover"
            ref={popRef}
          >
            {option.map((option) => (
              <div className="popover-box">
                {!option.toggle && (
                  <div className="popover-option" key={option.id} onClick={() => { navigate("/" + option.path); }} >
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
        </div>
      )}

      {!isOpen && (
        <div>
          <IconButton onClick={handleOpen} icon={icon} />
        </div>
      )}
    </div>
  );
};

export default PopUp;