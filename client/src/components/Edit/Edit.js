import style from "./Edit.Module.css";

export const EditPet = () => {
  return (
    <div className="editPage">
      <form className="edit-form">
        <h2>Edit Pet</h2>
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
          Edit Pet
        </button>
      </form>
    </div>
  );
};
