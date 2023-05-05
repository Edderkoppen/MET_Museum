import "../styles/HomePage.scss"

export default function ViewMorePagination({
  setLimit,
}: {
  setLimit: () => void;
}) {
  return (
    <button
      className="btn btn-secondary main-button"
      onClick={() => {
        setLimit();
      }}
    >
      View More
    </button>
  );
}