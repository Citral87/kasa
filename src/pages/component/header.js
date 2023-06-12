import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/data/logo.jpg";
import "../../assets/css/header.css";

function Header() {
  const location = useLocation();

  return (
    <header>
      <img src={logo} alt="Logo" />
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
