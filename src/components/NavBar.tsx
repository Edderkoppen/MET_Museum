import "../styles/navbar.scss";

export default function NavBar() {
  return (
    <nav className="nav-link-from">
      <a className="nav-link-left" href="/">
        <img
          className="nav-link-img"
          src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/02/20100425/WO_Met_Wired_21816_2.jpg"
          alt=""
        />
        <h1>Encyclopediæ</h1>
      </a>
      <a href="/"> Home</a>
      <a href="/recherche"> Advanced search</a>
      <form className="nav-from-right">
        <input
          className="nav-from-input"
          type="search"
          placeholder="Rechercher"
          aria-label="Search"
        />
        <button className="nav-from-button" type="submit">
          Rechercher
        </button>
      </form>
    </nav>
  );
}
