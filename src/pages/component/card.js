import { Link } from 'react-router-dom';

function Logement({ id, title, cover }) {
  return (
    <div className="logement">
      <Link to={`/location/${id}`}>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default Logement;


