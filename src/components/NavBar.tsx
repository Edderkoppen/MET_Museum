import "../styles/navbar.scss";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className="nav-link-from">
      <a className="nav-link-left" href="https://google.com">
        <img
          className="nav-link-img"
          src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/02/20100425/WO_Met_Wired_21816_2.jpg"
          alt=""
        />
        <h1>Encyclopediæ</h1>
      </a>
      <form className="nav-from-right">
      </form>
    </nav>
  );
}
