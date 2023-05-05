import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

import { useDetailQuery } from "@/api-queries";

import NotFound from "./NotFound";

import "../styles/detail.scss";

export default function ObjectDetailPage() {
  const { objectId } = useParams() as { objectId: string };
  const query = useDetailQuery(objectId);

  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <Spinner>Loading...</Spinner>;

  const object = query.data;

  if (object != undefined && !object.message)
    return (
      <div className="conteneur-page">
        <div className="main-container-detail">
          <div className="main-img-container">
            <img
              className="main-img-size"
              alt={object.title}
              src={object.primaryImageSmall || "../../src/assets/met-logo.jpeg"}
            />
          </div>
          <div className="txt-container">
            <h2>{object.title}</h2>
            <p>
              <strong>{object.artistDisplayName || "No data"} </strong>
              {object.artistNationality || "No data"}
            </p>
            <p>{object.objectName}</p>
            <p>
              {object.objectBeginDate} - {object.objectEndDate}
            </p>
            <p>{object.dimensions}</p>
            <p>{object.culture}</p>
            <p>Can be found in department :</p>
            <p>{object.department}</p>
          </div>
        </div>
      </div>
    );

  return <NotFound />;
}
