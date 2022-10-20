import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = (props) => {
  const { id, text, rating } = props.data;

  function handleRemove(id) {
    props.onRemoveReview(id);
  }

  return (
    <article>
      <div className="head">
        <h2>{rating}</h2>
        <p onClick={() => handleRemove(id)}>
          <FontAwesomeIcon icon={faXmark} />
        </p>
      </div>
      <div className="text">
        <p> {text} </p>
      </div>
    </article>
  );
};

export default ReviewCard;
