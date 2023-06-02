import { getArticleComments } from "../../utils";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCom from "./Addcom.jsx";

const ArticleComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const id = useParams();
  useEffect(() => {
    getArticleComments(id.article_id).then((res) => {
      setComments(res.data.comments);
      setIsLoading(false);
    });
  }, []);
  if (isLoading)
    return (
      <div className="loader-container">
        <p>Comments Loading...</p>
      </div>
    );
  if (comments.length === 0) {
    return (
      <section>
        <div className="comments">
          <h3>Looks quite over hear!</h3>
          <h4>Be the first to leave a comment!</h4>
        </div>
      </section>
    );
  }
  return (
    <>
      <AddCom />
      {comments.map((element) => {
        return (
          <section key={element.created_at}>
            <div className="comments">
              <h3 className="body">{element.author}</h3>
              <br></br>
              <h4 className="comments">{element.body}</h4>
              <h5 className="comments">{element.created_at}</h5>
              <br></br>
              <br></br>
            </div>
          </section>
        );
      })}
    </>
  );
};
export default ArticleComments;
