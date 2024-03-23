// DropdownButton.js
import React, { useState } from "react";
import arrow from "../../assets/images/up-and-down-arrow.png";

const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="w-[174px] h-[50px] rounded-3xl border border-solid border-black-900_87 flex flex-row pt-3 mr-4"
        onClick={handleToggle}
      >
        <img src={arrow} alt="" className="w-[11px] h-[20px]  ml-5" />
        <p className="w-[65%]">{props.text}</p>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div
            className="dropdown-item"
            onClick={() => handleItemClick("Option 1")}
          >
            Option 1
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleItemClick("Option 2")}
          >
            Option 2
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleItemClick("Option 3")}
          >
            Option 3
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
