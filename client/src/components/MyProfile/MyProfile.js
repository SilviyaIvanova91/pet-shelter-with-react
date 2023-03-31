import { useEffect, useState } from "react";
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

  return (
    <>
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
              <span className="my-profile-span">Username:</span>
            </li>
            <li>
              <span className="my-profile-span">Email: </span>
              {userEmail}
            </li>
            <li>
              <span className="my-profile-span">Phone Number: </span>
            </li>
            <li>
              <span className="my-profile-span">Adress: </span>
            </li>
            <li>
              <button className="my-profile-info-btn">Add Information</button>
            </li>
          </ul>
        </div>
      </section>
      <section id="catalog">
        <div className="pets-catalog">
          {pets.map((x) => (
            <CatalogItem key={x._id} {...x} />
          ))}
          {/*If there is no pets in dashboard*/}

          {pets.length === 0 && (
            <div>
              <p className="no-pets">No pets in dashboard</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
