import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePetContext } from "../../context/petContext";
import { useService } from "../../hooks/useService";
import { petServiceFactory } from "../../services/petServices";
import styles from "./Details.Module.css";
import style from "./Comments/Comments.Module.css";
import { Comments } from "./Comments/Comments";

export const DetailsPet = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState({});
  const petService = useService(petServiceFactory);

  useEffect(() => {
    petService.getOne(petId).then((result) => {
      setPet(result);
    });
  }, [petId]);

  return (
    <section id="detailsPage">
      <div className="details">
        <div className="pet-img">
          <img src={pet.imageUrl} />
        </div>
        <div>
          <div className="pet-info">
            <h1>Name: {pet.name} </h1>
            <h3>Breed: {pet.breed}</h3>
            <h4>Age: {pet.age} years</h4>
            <h4>Location: {pet.location} </h4>
            <h4>Description: {pet.description} </h4>
          </div>
          <div className="actionBtn">
            <Link to={`/catalog/${petId}/edit`} className="edit">
              Edit
            </Link>
            {/* <Link className="remove" onClick={onDeleteClick}>
              Delete
            </Link> */}
            <Link to={`/catalog/${petId}/delete`} className="remove">
              Delete
            </Link>
          </div>
        </div>
      </div>
      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {pet.comments &&
            pet.comments.map((x) => (
              <li key={x._id} className="comment">
                <p>
                  {x.author.email}: {x.comment}
                </p>
              </li>
            ))}
        </ul>

        {!pet.comments?.length && <p className="no-comment">No comments.</p>}
        {<Comments />}
      </div>
    </section>
  );
};
