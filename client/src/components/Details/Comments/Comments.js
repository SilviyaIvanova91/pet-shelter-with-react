import { useAuthContext } from "../../../context/AuthContext";
import { useForm } from "../../../hooks/useForm";
import style from "./Comments.Module.css";

export const Comments = ({ onCommentSubmit }) => {
  const { userEmail } = useAuthContext();

  const { values, changeHandler, onSubmit } = useForm(
    {
      _id: new Date(),
      author: userEmail,
      comment: "",
    },
    onCommentSubmit
  );

  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="formComments" onSubmit={onSubmit}>
        <textarea
          className="textareaComments"
          name="comment"
          placeholder="Comment......"
          value={values.comment}
          onChange={changeHandler}
        ></textarea>
        <input className="btnComments" type="submit" value="Add Comment" />
      </form>
    </article>
  );
};
