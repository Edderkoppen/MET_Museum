import { useDetailQuery } from "@/api-queries";

import "../styles/detail.scss";

export default function RightDetail() {
  const query = useDetailQuery();

  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

  const object = query.data;

  return (
    <div className="content-right">
      <div className="entete">
        <p>{object.objectID}</p>
        <h1 className="title">{object.title}</h1>
        <p>
          <strong>{object.artistDisplayName} </strong>
          {object.artistNationality}
        </p>
        <p>{object.objectDate}</p>
      </div>
      <p>{object.dimensions}</p>
      <p>Can be found in department :</p>
      <p>{object.department}</p>
    </div>
  );
}
