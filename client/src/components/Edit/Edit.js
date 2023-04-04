import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePetContext } from "../../context/petContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { petServiceFactory } from "../../services/petServices";
import style from "./Edit.Module.css";

export const EditPet = () => {
  const { petId } = useParams();
  const { onEditPetSubmit } = usePetContext();
  const petSercise = useService(petServiceFactory);
  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      name: "",
      breed: "",
      age: "",
      location: "",
      imageUrl: "",
      description: "",
    },
    onEditPetSubmit
  );

  useEffect(() => {
    petSercise.getOne(petId).then((result) => {
      changeValues(result);
    });
  }, [petId]);

  return (
    <div className="editPage">
      <form className="edit-form" onSubmit={onSubmit}>
        <h2>Edit Pet</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={changeHandler}
          />
        </p>
        <p>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={values.breed}
            onChange={changeHandler}
          />
        </p>
        <p>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={values.age}
            onChange={changeHandler}
          />
        </p>
        <p>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={values.location}
            onChange={changeHandler}
          />
        </p>
        <p>
          <input
            type="text"
            name="imageUrl"
            placeholder="Link to image"
            value={values.imageUrl}
            onChange={changeHandler}
          />
        </p>
        <p>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={changeHandler}
          />
        </p>
        <button className="add-btn" type="submit">
          Edit Pet
        </button>
      </form>
    </div>
  );
};
