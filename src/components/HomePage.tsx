import React from "react";

import { useHighlightQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

export default function HomePage() {
  const objectList = useHighlightQuery();

  if (objectList.isLoading) {
    return <p>Loading</p>;
  }

  if (objectList.error || !objectList.data) {
    return <p>Error</p>;
  }

  console.log("ici");
  console.log(objectList.data);

  return (
    <>
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "1rem 0",
        }}
      >
        {objectList.data.objectIDs.map((object) => (
          <ObjectCard key={object} id={object} />
        ))}
      </div>
    </>
  );
}
