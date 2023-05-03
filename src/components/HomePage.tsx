import React from "react";
import { Spinner } from "reactstrap";

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
      <h2>Les oeuvres en lumière</h2>
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "1rem 0",
        }}
      >
        {objectList.data.objectIDs.map((object) => (
          <ObjectCard key={object} id={String(object)} />
        ))}
      </div>
    </>
  );
}
