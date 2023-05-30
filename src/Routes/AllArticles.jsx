import { useEffect, useState } from "react";
import getArticles from "../../utils";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.data.articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading</p>;
  return (
    <>
      {articles.map((element) => {
        const newArr = element.body.split(" ", 10);
        const joinedArr = newArr.join(" ");
        return (
          <section>
            <ul>
              <li>
                <ul element id="Tittle">
                  {element.title}
                </ul>
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
          </section>
        );
      })}
    </>
  );
};
export default AllArticles;
