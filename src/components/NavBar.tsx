
import "../compoments.scss/NavBar.scss"


export default function NavBar() {
  return (
    <nav className="nav-link-from">
        <h1><a className="nav-link-left" href="#">Navbar</a></h1>
        <form className="nav-from-right">
            <input className="nav-from-input" type="search" placeholder="Rechercher" aria-label="Search"/>
            <button className="nav-from-button" type="submit">Rechercher</button>
        </form>
    </nav>

    

  );
}