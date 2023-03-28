import { usePetContext } from "../../context/petContext";
import { useForm } from "../../hooks/useForm";
import style from "./Create.Module.css";

export const CreatePet = () => {
  const { onCreatePetSubmit } = usePetContext();
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
          Add Pet
        </button>
      </form>
    </div>
  );
};
