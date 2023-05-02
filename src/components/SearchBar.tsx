import React, { useState } from "react";
import "../styles/SearchBar.scss";

type Art = {
  objectID: number;
  title: string;
  primaryImage : string;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [art, setArt] = useState<Art | null>(null);
  const [artImage, setArtImage] = useState("");

  const handleSearch = async () => {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${inputValue}`
    );
    const data = await response.json();
    setArt({
      objectID: data.objectID,
      title: data.title,
      primaryImage: data.primaryImage,
    });
    setArtImage(data.primaryImage);
  };

  return (
    <div className="main--bg">
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
      <div className="art-center-container">
        <div className="art-img-center">
          {art && <h2 className="art-container">{art.title}</h2>}
          {art && <img className="art--img" src={artImage} alt={art.title} />}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;