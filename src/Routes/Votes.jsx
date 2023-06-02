import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { voteForArticle } from "../../utils";
const Votes = (singleArticle) => {
  const [votes, setVotes] = useState(singleArticle.singleArticle);
  const [commentNoPost, setCommentNoPost] = useState(false);

  const { article_id } = useParams();
  const handleArticleVote = () => {
    setVotes((curVotes) => {
      return Number(curVotes + 1);
    });
    voteForArticle(article_id).catch((err) => {
      if (err) {
        setCommentNoPost(true);
      }
    });
  };
  if (commentNoPost) {
    return (
      <>
        <p>You are offline, Vote was not submitted!</p>
        <p>Please try again later!</p>
      </>
    );
  }
  return (
    <>
      <div>This article has {votes} votes!</div>
      <button id="button" onClick={handleArticleVote}>
        👍
      </button>
    </>
  );
};

export default Votes;
