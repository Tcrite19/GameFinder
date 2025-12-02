import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Header = () => {
 const { setSearchValue } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  let navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchValue(inputValue);
      navigate("/games");
    }
  }; 

  return (
    <div className="container">
      <div className="row header__row">
        <div className="header__text">
          <h1 className="header__title">Game<span className="red-text">Finder</span></h1>
          <h3 className="header__subtitle">Find Any and Every Game</h3>
        </div>
        <div className="header__search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="header__search__icon"
          />
          <input
            type="text"
            className="header__search__input"
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            placeholder="Search for Games"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
