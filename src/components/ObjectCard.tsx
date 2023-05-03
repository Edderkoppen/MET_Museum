import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Spinner,
} from "reactstrap";

import { useDetailQuery } from "@/api-queries";

export default function ObjectCard(props: { id: string }) {
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
    <Card
      style={{
        width: "18rem",
        transition: "background-color 0.2s ease-in-out",
        backgroundColor: isHovered ? "pink" : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img alt={object.title} src={object.primaryImageSmall || "./src/assets/met-logo.jpeg"} />
      <CardBody>
        <CardTitle tag="h5">{object.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {object.department}
        </CardSubtitle>
        <CardText>{object.objectName}</CardText>
        <a href={link}>
          <Button>Voir Plus</Button>
        </a>
      </CardBody>
    </Card>
  );
}
