import React from "react";
import useSWR from "swr";

function fetcher(...args: Parameters<typeof fetch>) {
    return fetch(...args).then((res) => res.json());
}

export default function TestComponent(props : {id : number}) {
  const query = useSWR(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.id,
    fetcher
  );

  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>{query.data.objectName}</p>
      <img src={query.data.primaryImageSmall} alt={query.data.title}/>
      <p>{query.data.isHighlight === true && "true"}</p>
    </div>
  );
}
