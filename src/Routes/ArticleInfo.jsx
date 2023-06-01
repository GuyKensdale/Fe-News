import { useParams } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../utils";
import ArticleComments from "./ArticleComments";
const ArticleInfo = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams();

  useEffect(() => {
    getArticleById(id.article_id).then((res) => {
      setSingleArticle(res.data.articles[0]);
      setIsLoading(false);
    });
  }, []);
  if (isLoading)
    return (
      <div className="loader-container">
        <p>Loading</p>
      </div>
    );
  return (
    <>
      {
        <section>
          <div className="body">
            <Link to="/">Home</Link>
            <h1>{singleArticle.title}</h1>
            <br></br>
            <p>{singleArticle.body}</p>
            <br></br>
            <br></br>
            <p>{singleArticle.comments}</p>
            <ArticleComments id="articleComments" />
          </div>
        </section>
      }
    </>
  );
};

export default ArticleInfo;
