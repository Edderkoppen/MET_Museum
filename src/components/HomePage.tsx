import React from "react";
import { Spinner } from "reactstrap";

import { useHighlightQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

import NotFound from "./NotFound";
import ViewMoreButton from "./ViewMoreButton";

import "../styles/home_page.scss";

export default function HomePage() {
  const [limit, setLimit] = React.useState(20);
  const objectList = useHighlightQuery();

  if (objectList.isLoading) return <Spinner>Loading...</Spinner>;
  if (objectList.error || !objectList.data) return <p>Error</p>;

  const total = objectList.data.total;

  if (total > 0)
    return (
      <>
        <div className="main-container">
          <div className="title">
            <h1>Highlighted work of art</h1>
          </div>
          {objectList.data.objectIDs.slice(0, limit).map((object) => (
            <ObjectCard key={object} id={String(object)} />
          ))}
        </div>
        {total > 20 ? (
          <ViewMoreButton
            setLimit={() => {
              setLimit(limit >= total ? limit : limit + 20);
            }}
          />
        ) : null}
      </>
    );

  return <NotFound />;
}
