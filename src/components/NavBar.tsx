import { useState } from "react";

import "../styles/navbar.scss";

export default function NavBar() {
  const [message, setMessage] = useState("");
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const searchLink = `/search/${message}`;

  return (
    <nav className="nav-link-from">
      <a className="nav-link-left" href="/">
        <img
          className="nav-link-img"
          src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/02/20100425/WO_Met_Wired_21816_2.jpg"
          alt=""
        />
        <h1>Encyclopediæ</h1>
      </a>
      <a href="/"> Home</a>
      <a href="/search"> Advanced search</a>
      <form className="nav-from-right" action={searchLink}>
        <input
          className="nav-from-input"
          type="search"
          placeholder="Rechercher"
          aria-label="Search"
          onChange={handleChange}
        />
        <button className="nav-from-button" type="submit">
          Rechercher
        </button>
      </form>
    </nav>
  );
}
