import { useForm } from "../../../hooks/useForm";
import style from "./Comments.Module.css";

export const Comments = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
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
