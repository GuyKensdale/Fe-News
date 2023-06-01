import { getArticleComments } from "../../utils";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleComments = () => {
  const [comments, setComments] = useState([]);
  const id = useParams();
  useEffect(() => {
    getArticleComments(id.article_id).then((res) => {
      setComments(res.data.comments);
    });
  }, []);
  return (
    <>
      {comments.map((element) => {
        return (
          <section>
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
