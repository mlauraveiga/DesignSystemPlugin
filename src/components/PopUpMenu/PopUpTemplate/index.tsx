import React, { useRef, useEffect } from "react";
import { useState } from "react";
import IconButton from "../../Buttons/Icon";
import './popup.sass';
import Toggle from "../../Toggle";
import { useNavigate } from "react-router-dom";

interface option {
  id: string;
  title: string;
  toggle?: boolean;
  path?: string;
}

const PopUp = ({ option, icon, place }: { option: option[], icon: JSX.Element, place: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
    // Set focus to the popup when it opens
    popRef.current?.focus();

  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(popRef.current, event.target, !popRef.current?.contains(event.target as Node));
      if (!popRef.current.contains(event.target as Node)) {
        console.log("click outside");
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  console.log(option);

  return (
    <div className={"buttonpopup " + place} ref={popRef} >

      <div >
        <IconButton icon={icon}
          onClick={!isOpen ? handleOpen : handleClose}
        />
        <div
          className="popover"
          style={{
            opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "all" : "none",
            visibility: isOpen ? "visible" : "hidden"
          }}
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
    </div>
  );
};

export default PopUp;