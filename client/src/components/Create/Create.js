import style from "./Create.Module.css";

export const CreatePet = () => {
  return (
    <div className="createPage">
      <form className="create-form">
        <h2>Add Pet</h2>
        <p>
          <input type="text" name="name" placeholder="Name" />
        </p>
        <p>
          <input type="text" name="breed" placeholder="Breed" />
        </p>
        <p>
          <input type="number" name="age" placeholder="Age" />
        </p>
        <p>
          <input type="text" name="location" placeholder="Location" />
        </p>
        <p>
          <input type="text" name="imageUrl" placeholder="Link to image" />
        </p>
        <p>
          <textarea type="text" name="description" placeholder="Description" />
        </p>
        <button className="add-btn" type="submit">
          Add Pet
        </button>
      </form>
    </div>
  );
};
