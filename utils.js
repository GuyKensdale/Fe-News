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
function voteForArticle(id) {
  return axios
    .patch(`https://guys-nc-news.onrender.com/api/articles/${id}`, {
      inc_votes: 1,
    })
    .then((res) => {
      return res.data.article.votes;
    });
}

export { getArticles, getArticleById, getArticleComments, voteForArticle };
