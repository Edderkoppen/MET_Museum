import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

import { useSearchQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

export default function QuickSearchPage() {
  const { terme } = useParams() as { terme: string };
  const objectList = useSearchQuery(terme);

  if (objectList.isLoading) {
    return <Spinner>Loading...</Spinner>;
  }

  if (objectList.error || !objectList.data) {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="main-container">
        {objectList.data.objectIDs.map((object) => (
          <ObjectCard key={object} id={String(object)} />
        ))}
      </div>
    </>
  );
}
