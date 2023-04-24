import React from "react";
import useSWR from "swr";

function fetcher(...args: Parameters<typeof fetch>) {
    return fetch(...args).then((res) => res.json());
  }

export default function TestComponent() {
    const query = useSWR(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/1",
      fetcher
    );
    if (query.error) return <div>failed to load</div>;
    if (query.isLoading) return <div>Loading...</div>;

    return (
        <p>{query.data.objectName}</p>
    )
}