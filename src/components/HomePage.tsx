import React from "react";
import { Spinner } from "reactstrap";
import "../styles/homepage.scss";
import { useHighlightQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

export default function HomePage() {
  const objectList = useHighlightQuery();

  if (objectList.isLoading) {
    return <Spinner>Loading...</Spinner>;
  }

  if (objectList.error || !objectList.data) {
    return <p>Error</p>;
  }

  return (
    <>
      <h1>Les oeuvres en lumière</h1>
      <div className="main-container">
        {objectList.data.objectIDs.map((object) => (
          <ObjectCard key={object} id={String(object)} />
        ))}
      </div>
    </>
  );
}
