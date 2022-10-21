import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ReviewCard = (props) => {
  const { id, text, rating } = props.data;

  function handleRemove(id) {
    props.onRemoveReview(id);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
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
    </motion.div>
  );
};

export default ReviewCard;
