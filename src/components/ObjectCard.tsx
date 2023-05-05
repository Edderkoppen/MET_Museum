import React from "react";
import { Button, Spinner } from "reactstrap";

import { useDetailQuery } from "@/api-queries";

import "../styles/ObjectCard.scss";

export default function Objectdiv(props: { id: string }) {
  const query = useDetailQuery(props.id);
  const [isHovered, setIsHovered] = React.useState(false);
  const link = `/object/search/${props.id}`;

  if (query.isLoading) {
    return <Spinner>Loading...</Spinner>;
  }

  if (query.error || !query.data) {
    return <p>Error</p>;
  }

  const object = query.data;

  return (
    <div
      className="object-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="img-container">
        <img
          className="img-size"
          alt={object.title}
          src={object.primaryImageSmall || "../src/assets/met-logo.jpeg"}
        />
      </div>
      <div className="main-txt-container">
        <h1>{object.title}</h1>
        <h3 className="">{object.department}</h3>
        <div>{object.objectName}</div>
        <a href={link}>
          <Button>More details</Button>
        </a>
      </div>
    </div>
  );
}
