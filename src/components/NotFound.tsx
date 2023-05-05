import "../styles/not_found.scss";

export default function NotFound() {
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
