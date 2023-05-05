import React from "react";

import "../styles/error.scss";

const Error404: React.FC = () => {
  return (
    <div className="conteneur-page">
      <div className="main-txt-size">
        <div className="main--container">
          <h1>Rien à voir ici ...</h1>
          <img
            className="img-size-t"
            src="https://img.freepik.com/vecteurs-libre/oops-erreur-404-illustration-concept-robot-casse_114360-5529.jpg?w=2000"
            alt="robot 404"
          />
        </div>
      </div>
    </div>
  );
};

export default Error404;
