import React from "react";
import { Spinner } from "reactstrap";
import "../styles/Homepage.scss";
import { useHighlightQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

import ViewMorePagination from "./ViewMorePagination";
import Footer from "./Footer";

import "../styles/homepage.scss";

export default function HomePage() {
  const [limit, setLimit] = React.useState(20);
  const objectList = useHighlightQuery();

  if (objectList.isLoading) {
    return <Spinner>Loading...</Spinner>;
  }

  if (objectList.error || !objectList.data) {
    return <p>Error</p>;
  }

  const total = objectList.data.total;
  return (
    <>
      <div className="main-container" id="haut-de-page">
        <div className="title">
          <h1>Les oeuvres en lumière</h1>
        </div>
        {objectList.data.objectIDs.slice(0, limit).map((object) => (
          <ObjectCard key={object} id={String(object)} />
        ))}
      </div>
      <a
        href="#haut-de-page"
        className="bouton-haut-de-page"
        id="bouton-haut-de-page"
      >
        <img
          className="icon-size"
          src="https://img2.freepng.fr/20180419/pwq/kisspng-computer-icons-up-arrow-clip-art-straight-arrow-5ad925dadf5102.8619577815241804429147.jpg"
          alt=""
        />
      </a>

      <ViewMorePagination
        setLimit={() => {
          setLimit(limit >= total ? limit : limit + 20);
        }}
      />
    </>
  );

}
