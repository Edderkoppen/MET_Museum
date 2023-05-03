import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

import { useDetailQuery } from "@/api-queries";

import "../styles/detail.scss";

export default function ObjectDetailPage() {
  const { objectId } = useParams() as { objectId: string };
  const query = useDetailQuery(objectId);

  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <Spinner>Loading...</Spinner>;

  const object = query.data;

  if (object != undefined && !object.message)
    return (
      <main className="main--bloc">
        <div className="main--container">
          <div className="main-img-container">
            <img
              className="main-img-size"
              src={object.primaryImageSmall}
              alt={object.title}
            />
          </div>
          <div className="main-text-container">
            <h2>{object.title}</h2>
            <p>
              <strong>{object.artistDisplayName || "NAN"} </strong>
              {object.artistNationality || "NAN"}
            </p>
            <p>{object.objectDate}</p>
            <p>{object.dimensions}</p>
            <p>Can be found in department :</p>
            <p>{object.department}</p>
          </div>
        </div>
      </main>
    );

  return <p>OBJET InTROUVABLE PUTAIN</p>;
}
