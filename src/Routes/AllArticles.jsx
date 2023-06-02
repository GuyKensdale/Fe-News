import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { getArticles } from "../../utils";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.data.articles);
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
      {articles.map((element) => {
        const newArr = element.body.split(" ", 10);
        const joinedArr = newArr.join(" ");
        return (
          <section>
            <div className="body">
              <div class="text-container">
                <ul>
                  <li className="body">
                    <Link
                      to={`/article/${element.article_id}`}
                      element
                      id="Tittle"
                    >
                      {element.title}
                    </Link>
                    <img id="Photo" src={element.article_img_url} />

                    <br></br>
                    <ul element id="snippet">
                      {joinedArr}...
                    </ul>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};
export default AllArticles;
