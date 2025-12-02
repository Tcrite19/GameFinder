import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../assets/nav-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";
const Nav = () => {
  const focusRef = useRef();

  const toggleFocus = () => {
    focusRef.current.focus();
  };

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
    <>
      <nav className="navbar">
        <div className="nav__container">
          <div className="nav__left">
            <Link to="/">
              <img src={NavLogo} alt="" className="nav__logo" />
            </Link>
            <h2 className="nav__left__title">Game<span className="red-text">Finder</span></h2>
          </div>
          <nav className="nav__right">
            <Link className="nav__right__btn" to={"/games"}>Games</Link>
            <div className="nav__search">
              <input
                type="text"
                className="nav__searchBar"
                placeholder="Search Movies"
                ref={focusRef}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="nav__search__icon nav__right__btn"
                onClick={toggleFocus}
              />
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Nav;
