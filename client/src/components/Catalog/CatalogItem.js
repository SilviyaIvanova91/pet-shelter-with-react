import { Link } from "react-router-dom";

export const CatalogItem = ({ _id, imageUrl, name, location }) => {
  return (
    <div className="pet-card">
      <article>
        <img className="pet-image" src={imageUrl} />
      </article>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <div className="action">
        <Link className="btn" to={`/catalog/${_id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};
