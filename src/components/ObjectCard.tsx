import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import { useDetailQuery } from "@/api-queries";
import { ObjectDetailType } from "@/object";

export default function ObjectCard(props: { id: number }) {
  const query = useDetailQuery(props.id);
  const [isHovered, setIsHovered] = React.useState(false);
  const link = `object/search/${props.id}`;

  if (query.isLoading) {
    return <p>Loading</p>;
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
      <img alt={object.title} src={object.primaryImageSmall} />
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
// function PokemonCard(props: { pokemon: PokemonDetail }) {
//   const { pokemon } = props;
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div
//       className={styles.pokemonCard}
//       style={{
//         transition: "background-color 0.2s ease-in-out",
//         backgroundColor: isHovered ? "green" : undefined,
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div>{pokemon.name}</div>
//       <img src={pokemon.image} alt={pokemon.name} height={64} />
//       <div>
//         {pokemon.types.map((type) => (
//           <span key={type} className={styles.pokemonType}>
//             {type}
//           </span>
//         ))}
//       </div>
//       <Link to={`/pokemon/${pokemon.id}`}>Voir</Link>
//     </div>
//   );
// }
