import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePetContext } from "../../context/petContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { petServiceFactory } from "../../services/petServices";
import style from "./Edit.Module.css";
import { useErrorContext } from "../../context/ErroroContext";

export const EditPet = () => {
  const { petId } = useParams();
  const { onEditPetSubmit } = usePetContext();
  const { errors, minLength, isPositive, isFormValid, validateImage } =
    useErrorContext();

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
            onBlur={(e) => minLength(e, 4, values.name)}
          />
        </p>
        {errors.name && (
          <p className="edit-error">
            Name should be at least 4 characters long!
          </p>
        )}
        <p>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={values.breed}
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 4, values.breed)}
          />
        </p>
        {errors.breed && (
          <p className="edit-error">
            Breed should be at least 4 characters long!
          </p>
        )}
        <p>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={values.age}
            onChange={changeHandler}
            onBlur={isPositive}
          />
        </p>
        {errors.age && (
          <p className="edit-error">Age should be a positive number!</p>
        )}
        <p>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={values.location}
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 4, values.location)}
          />
        </p>
        {errors.location && (
          <p className="edit-error">
            Location should be at least 4 characters long!
          </p>
        )}
        <p>
          <input
            type="text"
            name="imageUrl"
            placeholder="Link to image"
            value={values.imageUrl}
            onChange={changeHandler}
            onBlur={(e) => validateImage(e, values.imageUrl)}
          />
        </p>
        {errors.imageUrl && (
          <p className="edit-error">Image must be a valid URL!</p>
        )}
        <p>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 5, values.description)}
          />
        </p>
        {errors.description && (
          <p className="edit-error">
            Description should be at least 5 characters long!
          </p>
        )}
        <button className="add-btn" type="submit" disabled={!isFormValid}>
          Edit Pet
        </button>
      </form>
    </div>
  );
};
