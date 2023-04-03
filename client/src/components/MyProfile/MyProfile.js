import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { petServiceFactory } from "../../services/petServices";
import { CatalogItem } from "../Catalog/CatalogItem";
import style from "./MyProfile.Module.css";

export const MyProfile = () => {
  const { userEmail, userId } = useAuthContext();
  const [pets, setPets] = useState([]);
  const petService = petServiceFactory();

  useEffect(() => {
    petService.getAll().then((result) => {
      const myPet = result.filter((x) => x._ownerId === userId);
      setPets(myPet);
    });
  }, []);

  const allMyPets = pets.map((x) => x.name);

  return (
    <div className="my-profile">
      <section className="my-profile-container">
        <div className="profile-div-image">
          <img
            className="my-rofile-image"
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            alt="..."
          />
        </div>
        <div className="my-profile-info">
          <ul className="my-prifile-info-ul">
            <li>
              <span className="my-profile-span">Email: </span>
              {userEmail}
            </li>
            <li>
              <span className="my-profile-span">My Pets: </span>
              {allMyPets.join(", ")}
            </li>
          </ul>
        </div>
      </section>
      <h2 className="my-profile-h">My Pet:</h2>
      <section id="catalog">
        <div className="pets-catalog">
          {pets.map((x) => (
            <CatalogItem key={x._id} {...x} />
          ))}
          {/*If there is no pets in dashboard*/}

          {pets.length === 0 && (
            <div>
              <p className="no-pets">
                You don't have any pets, yet. You wanna{" "}
                <Link to="/create" className="my-profile-add">
                  Add
                </Link>{" "}
                ?
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
