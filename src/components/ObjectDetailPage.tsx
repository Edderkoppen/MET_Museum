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
            <h1>Artwork Details</h1>
            <p><strong>Title : </strong>{object.title}</p>
            <p><strong>Authors : </strong>{object.artistDisplayName || "No data"}</p>
            <p><strong>Nationality : </strong>{object.artistNationality || "No data"}</p>
            <p><strong>Object Name : </strong>{object.objectName}</p>
            <p><strong>Dates : </strong>{object.objectBeginDate} - {object.objectEndDate}</p>
            <p><strong>Dimensions : </strong>{object.dimensions}</p>
            <p><strong>Culture : </strong>{object.culture}</p>
            <p><strong>Departments : </strong>{object.department}</p>
          </div>
        </div>
      </div>
    );

  return <NotFound />;
}
