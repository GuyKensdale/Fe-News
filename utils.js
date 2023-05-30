import axios from "axios";
function getArticles() {
  return axios.get("https://guys-nc-news.onrender.com/api/articles");
}
export default getArticles;
