import React, { useState, useRef } from 'react';
import './dropdown.sass';
import ArrowLineDown from '../../assets/icons/arrows/arrow-line-down';
import ArrowLineUp from '../../assets/icons/arrows/arrow-line-up';

const Dropdown = ({ option, handleSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);
    let selectedOption = option.find((option) => option.selected);

    const firstOption = option.slice(0, 1);
    const [name, setName] = useState(null);

    type option = {
        id: string;
        label: string;
        selected?: boolean;
    }

    const handleOpenDropdown = () => {
        setIsOpen(true);
    };

    const handleCloseDropdown = () => {
        setIsOpen(false);
        selectedOption(option.find((option) => !option.selected));
    };

    const handleSelectOption = (option) => {
        handleSelect(option);
        if (!isOpen) {
            handleCloseDropdown();
        }
        setName(option.label);
    };

    return (
        <div className="dropdown-container">
            <button
                className="dropdown-button"
                onClick={isOpen ? handleCloseDropdown : handleOpenDropdown}
            >
                <div className='dropdown-button-text'>
                    {name || firstOption[0].label}
                </div>
                <div className='dropdown-button-arrow'>
                    {isOpen ? <ArrowLineUp /> : <ArrowLineDown />}
                </div>
            </button>
            <div
                className={isOpen ? 'dropdown-open' : 'dropdown-closed'}
                ref={dropDownRef}
                onClick={isOpen ? handleCloseDropdown : handleOpenDropdown}
            >
                {option.map((option) => (
                    <div
                        className={`dropdown-option ${option.selected ? 'selected' : ''}`}
                        key={option.value}
                        onClick={() => handleSelectOption(option)}
                    >
                        {option.label}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;