import "../styles/home_page.scss";

export default function ViewMoreButton({ setLimit }: { setLimit: () => void }) {
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
