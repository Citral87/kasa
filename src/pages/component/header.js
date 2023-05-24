import { Link } from 'react-router-dom';
import logo from '/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/data/logo.jpg';  
import '/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/assets/css/header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </header>
  );
}

export default Header;

