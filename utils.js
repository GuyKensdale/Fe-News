import axios from "axios";

function getArticles() {
  return axios.get("https://guys-nc-news.onrender.com/api/articles");
}

function getArticleById(id) {
  return axios.get(`https://guys-nc-news.onrender.com/api/articles/${id}`);
}

function getArticleComments(id) {
  return axios.get(
    `https://guys-nc-news.onrender.com/api/articles/${id}/comments`
  );
}

export { getArticles, getArticleById, getArticleComments };
