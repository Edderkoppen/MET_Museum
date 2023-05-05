import React from "react";
import { Button, Spinner } from "reactstrap";

import { useDetailQuery } from "@/api-queries";

import "../styles/object_card.scss";

export default function Objectdiv(props: { id: string }) {
  const query = useDetailQuery(props.id);
  const link = `/object/search/${props.id}`;

  if (query.isLoading) return <Spinner>Loading...</Spinner>;
  if (query.error || !query.data) return <p>Error</p>;

  const object = query.data;

  return (
    <div className="object-card">
      <div className="img-container">
        <img
          className="img-size"
          alt={object.title}
          src={object.primaryImageSmall || "../src/assets/met-logo.jpeg"}
        />
      </div>
      <div className="main-txt-container">
        <h1>{object.title || "No data"}</h1>
        <h3 className="">{object.department || "No data"}</h3>
        <h3>{object.objectName || "No data"}</h3>
        <a href={link}>
          <Button className="more-detail">More details</Button>
        </a>
      </div>
    </div>
  );
}
