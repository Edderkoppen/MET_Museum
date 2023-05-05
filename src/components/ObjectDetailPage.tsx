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
      <div className="conteneur-page">
        <div className="main-container-detail">
          <div className="main-img-container">
            <img
              className="main-img-size"
              src={object.primaryImageSmall}
              alt={object.title}
            />
          </div>
          <div className="txt-container">
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
      </div>
    );

  return (
    <div className="conteneur-page">
      <h1 className="h1-top-padding">No results found</h1>
      <img
        className="img-size-result"
        src="https://static.vecteezy.com/system/resources/previews/004/968/529/original/search-no-results-found-concept-illustration-flat-design-eps10-simple-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-with-editable-stroke-line-outline-linear-vector.jpg"
        alt="not found magnifier"
      />
    </div>
  );
}
