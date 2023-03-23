import { Link } from "react-router-dom";
import styles from "./Details.Module.css";

export const DetailsPet = () => {
  return (
    <section id="detailsPage">
      <div className="details">
        <div className="pet-img">
          <img src="https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228__340.jpg" />
        </div>
        <div>
          <div className="pet-info">
            <h1>Name: Max</h1>
            <h3>Breed: Shiba Inu</h3>
            <h4>Age: 2 years</h4>
            <h4>Location: Sofia</h4>
            <h4>Description: This is the cutiest pet in the world!</h4>
          </div>
          <div className="actionBtn">
            <Link to={`/edit/petId`} className="edit">
              Edit
            </Link>
            <Link to={`/delete/petId`} className="remove">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
