import React from "react";
import { Spinner } from "reactstrap";

import { useSearchQuery } from "@/api-queries";

import ObjectCard from "./ObjectCard";
import ViewMorePagination from "./ViewMorePagination";

export default function TestComp(props: { request: string }) {
  const [limit, setLimit] = React.useState(20);

  const objectList = useSearchQuery(props.request);

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
        <div className="main-container">
          {objectList.data.objectIDs.slice(0, limit).map((object) => (
            <ObjectCard key={object} id={String(object)} />
          ))}
        </div>
        {total > 10 ? (
          <ViewMorePagination
            setLimit={() => {
              setLimit(limit >= total ? limit : limit + 20);
            }}
          />
        ) : null}
      </>
    );
    
  return <p>Aucun resultat pour cette recherche</p>;
}
