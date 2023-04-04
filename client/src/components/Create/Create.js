import { useState } from "react";
import { usePetContext } from "../../context/petContext";
import { useForm } from "../../hooks/useForm";
import style from "./Create.Module.css";

export const CreatePet = () => {
  const { onCreatePetSubmit } = usePetContext();
  const [errors, setErrors] = useState({});
  const { values, changeHandler, onSubmit } = useForm(
    {
      name: "",
      breed: "",
      age: "",
      location: "",
      imageUrl: "",
      description: "",
    },
    onCreatePetSubmit
  );

  const minLength = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < bound,
    }));
  };
  const isPositive = (e) => {
    let number = Number(e.target.value);

    setErrors((state) => ({
      ...state,
      [e.target.name]: number < 0,
    }));
  };
  const isFormValid = !Object.values(errors).some((x) => x);

  return (
    <div className="createPage">
      <form className="create-form" onSubmit={onSubmit}>
        <h2>Add Pet</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 4)}
          />
        </p>
        {errors.name && (
          <p className="create-error">
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
            onBlur={(e) => minLength(e, 4)}
          />
        </p>
        {errors.breed && (
          <p className="create-error">
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
          <p className="create-error">Age should be a positive number!</p>
        )}
        <p>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={values.location}
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 4)}
          />
        </p>
        {errors.location && (
          <p className="create-error">
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
            onBlur={(e) => minLength(e, 1)}
          />
        </p>
        {errors.imageUrl && <p className="create-error">Image is required!</p>}
        <p>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 5)}
          />
        </p>
        {errors.description && (
          <p className="create-error">
            Description should be at least 5 characters long!
          </p>
        )}
        <button className="add-btn" type="submit" disabled={!isFormValid}>
          Add Pet
        </button>
      </form>
    </div>
  );
};
