import { Link, useLocation } from "react-router-dom";
import logo from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/data/logo.jpg";
import "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/header.css";

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
