import React from "react";
import { Spinner } from "reactstrap";

import { useHighlightQuery } from "@/api-queries";
import ObjectCard from "@/components/ObjectCard";

import ViewMorePagination from "./ViewMorePagination";

export default function HomePage() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);
  const offset = 20 * (page - 1);
  const objectList = useHighlightQuery();

  if (objectList.isLoading) {
    return <Spinner>Loading...</Spinner>;
  }

  if (objectList.error || !objectList.data) {
    return <p>Error</p>;
  }

  const total = objectList.data.total;
  return (
    <>
      <h2>Les oeuvres en lumière</h2>
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "1rem 0",
        }}
      >
        {objectList.data.objectIDs.slice(offset, limit).map((object) => (
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
}

// const [page, setPage] = React.useState(1);
//   const offset = 10 * (page - 1);
//   const pokemonsList = usePokemonListQuery({ offset });

//   if (pokemonsList.isLoading) {
//     return <p>Loading</p>;
//   }

//   if (pokemonsList.error || !pokemonsList.data) {
//     return <p>Error</p>;
//   }

//   const lastPage = Math.ceil(pokemonsList.data.count / 10);

//   return (
//     <>
//       <PaginationList
//         goToPage={(page) => setPage(page)}
//         currentPage={page}
//         lastPage={lastPage}
//       />
//       <button onClick={() => setPage(page + 1)}>Next</button>
//       <div
//         style={{
//           display: "grid",
//           gap: 10,
//           gridTemplateColumns: "repeat(4, 1fr)",
//           margin: "1rem 0",
//         }}
//       >
//         {pokemonsList.data.results.map((pokemon) => (
//           <PokemonCard key={pokemon.id} pokemon={pokemon} />
//         ))}
//       </div>
//     </>
//   );
// }
