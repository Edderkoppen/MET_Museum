import React, { useState } from "react";
import { Card, Collapse } from "reactstrap";

import AdvancedSearchBar from "./AdvancedSearchBar";

import "../styles/navbar.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };
  const toggle = () => setIsOpen(!isOpen);

  const disabled = message.length > 0;
  const searchLink = `/search/${message}`;

  return (
    <>
      <React.StrictMode>
        <nav className="nav-link-from" id="haut-de-page">
          <div className="nav-container-left">
            <img
              className="nav-link-img"
              src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/02/20100425/WO_Met_Wired_21816_2.jpg"
              alt=""
            />
            <h1 className="h1-color">Encyclopediæ</h1>
            <div className="link-spacing">
              <a className="link-hover" href="/"> Home</a>
              <button className="button-style link-hover" onClick={toggle}>
                {" "}
                Advanced search
              </button>
            </div>
          </div>
          <form className="nav-from-right" action={searchLink}>
            <input
              className="nav-from-input"
              type="search"
              placeholder="Rechercher"
              aria-label="Search"
              onChange={handleChange}
            />
            <button
              className="nav-from-button"
              type="submit"
              disabled={!disabled}
            >
              Rechercher
            </button>
          </form>
        </nav>
        <Collapse isOpen={isOpen}>
          <Card className="style">
            <AdvancedSearchBar />
          </Card>
        </Collapse>
      </React.StrictMode>
    </>
  );
}
