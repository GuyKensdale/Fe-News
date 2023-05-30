import { useEffect, useState } from "react";
import getArticles from "../../utils";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.data.articles);
    });
  }, []);
  return (
    <>
      {articles.map((element) => {
        const newArr = element.body.split(" ", 10);
        const joinedArr = newArr.join(" ");
        console.log(element.article_img_url);
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
