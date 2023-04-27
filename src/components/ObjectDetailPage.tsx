import { useParams } from "react-router-dom";

import { useDetailQuery } from "@/api-queries";

import "../styles/detail.scss";

export default function ObjectDetailPage() {
  const { objectId } = useParams<{ objectId: string }>();
  const query = useDetailQuery(objectId);

  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

  const object = query.data;

  return (
    <div>
      <img src={object.primaryImageSmall} alt={object.title} />
        <p>{object.objectID}</p>
          <h1 className="title">{object.title}</h1>
          <p>
            <strong>{object.artistDisplayName || "NAN"} </strong>
            {object.artistNationality || "NAN"} 
          </p>
          <p>{object.objectDate}</p>
        <p>{object.dimensions}</p>
        <p>Can be found in department :</p>
        <p>{object.department}</p>
    </div>
  );
}
