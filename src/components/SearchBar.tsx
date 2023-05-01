import React, { useState } from "react";
import "../styles/SearchBar.scss";

type Art = {
  objectID: number;
  title: string;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [Art, setArt] = useState<Art | null>(null);

  const handleSearch = async () => {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${inputValue}`
    );
    const data = await response.json();
    setArt({
      objectID: data.objectID,
      title: data.title,
    });
  };

  return (
    <div>
      <input
        className="nav-from-input"
        placeholder="Rechercher"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="nav-from-button"
        onClick={handleSearch}>
        Search
      </button>
      <div className="title-center-container">
        {Art && <h2 className="title-container">{Art.title}</h2>}
      </div>
    </div>
  );
};

export default SearchBar;