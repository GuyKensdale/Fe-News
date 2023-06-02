import { postComment } from "../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const AddCom = () => {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
    postComment(article_id, newComment).then(() => {
      setConfirmationMessage(`Your Comment "${newComment}" has been added`);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          onChange={(event) => setNewComment(event.target.value)}
          id="comment"
          name="new_comment"
          placeholder="Add a new comment!"
          value={newComment}
        />
        <button>Submit</button>
        <p>{confirmationMessage}</p>
      </form>
    </>
  );
};

export default AddCom;
