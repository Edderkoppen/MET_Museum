import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

import { useSearchQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

import NotFound from "./NotFound";
import ViewMoreButton from "./ViewMoreButton";

import "../styles/search_bar.scss";

export default function SearchPage() {
  const [limit, setLimit] = React.useState(20);

  const { terme } = useParams() as { terme: string };
  const objectList = useSearchQuery("?q=" + terme);

  if (objectList.isLoading) return <Spinner>Loading...</Spinner>;
  if (objectList.error || !objectList.data) return <p>Error</p>;

  const total = objectList.data.total;

  if (total > 0)
    return (
      <>
        <div className="main-container">
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
