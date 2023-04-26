import React from "react";
import useSWR from "swr";

import { useTestquery } from "@/api-queries";

import { fetcher } from "../api";

// function fetcher(...args: Parameters<typeof fetch>) {
//   return fetch(...args).then((res) => res.json());
// }

export default function TestComponent() {
  // const query = useSWR(
  //   "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
  //     props.id,
  //   fetcher
  // );

  const query = useTestquery();
  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>{query.data.objectID}</p>
      <p>{query.data.objectName}</p>
      <img src={query.data.primaryImageSmall} alt={query.data.title} />
    </div>
  );
}
