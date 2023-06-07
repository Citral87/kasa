import { Link } from "react-router-dom";

function Logement({ id, title, cover }) {
  return (
    <Link to={`/location/${id}`}>
      <div className="logement" style={{ backgroundImage: `url(${cover})` }}>
        <div className="img-shadow"></div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Logement;


