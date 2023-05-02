import React from "react";

import { useTestquery } from "@/api-queries";

export default function TestComponent() {
  const query = useTestquery();

  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>{query.data.objectID}</p>
      <p>{query.data.objectName}</p>
      <img src={query.data.primaryImageSmall} alt={query.data.title} />
      <p>{query.data.isHighlight === true && "true"}</p>
    </div>
  );
}
