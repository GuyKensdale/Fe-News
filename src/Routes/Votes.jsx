import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { voteForArticle } from "../../utils";
const Votes = (singleArticle) => {
  const [votes, setVotes] = useState(singleArticle.singleArticle);

  const { article_id } = useParams();
  console.log(singleArticle);
  const handleArticleVote = () => {
    setVotes((curVotes) => {
      return Number(curVotes + 1);
    });
    voteForArticle(article_id).catch(err);
    if (err) {
      return (
        <>
          <p>You are offline, Vote was not submitted!</p>
          <p>Please try again later!</p>
        </>
      );
    }
  };
  return (
    <>
      <div>{votes}</div>
      <button id="button" onClick={handleArticleVote}>
        +1
      </button>
    </>
  );
};

export default Votes;
