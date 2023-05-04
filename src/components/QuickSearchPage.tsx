import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

import { useSearchQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

import ViewMorePagination from "./ViewMorePagination";

export default function QuickSearchPage() {
  const [limit, setLimit] = React.useState(20);
  const { terme } = useParams() as { terme: string };
  const objectList = useSearchQuery(terme);
  if (objectList.isLoading) {
    return <Spinner>Loading...</Spinner>;
  }

  if (objectList.error || !objectList.data) {
    return <p>Error</p>;
  }

  const total = objectList.data.total;

  if (total > 0)
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
          {objectList.data.objectIDs.slice(0, limit).map((object) => (
            <ObjectCard key={object} id={String(object)} />
          ))}
        </div>
        <ViewMorePagination
          setLimit={() => {
            setLimit(limit >= total ? limit : limit + 20);
          }}
        />
      </>
    );

  return <p>{objectList.data.total} resultat pour cette recherche</p>;
}

// .slice(0, 3)
