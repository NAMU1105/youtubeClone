import React, { useState } from "react";
import Logo from "./logo";
import styles from "./search_header.module.css";

function Header(props) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    // alert(inputText);
    setInputText("");
    props.onSearch(inputText);
  };

  const submitSearchByEnter = (event) => {
    if (event.keyCode === 13) {
      submitSearch(event);
    }
  };

  return (
    <header className={styles.Header}>
      {/* <header className="header"> */}
      <Logo />
      <input
        type="text"
        // className="header__input"
        onChange={handleInputChange}
        value={inputText}
        placeholder="search"
        onKeyDown={submitSearchByEnter}
      />
      <button
        // className="header__btn"
        placeholder="search"
        onClick={submitSearch}
      >
        search
      </button>
    </header>
  );
}

export default Header;
