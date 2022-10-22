import React, { useContext } from "react";
import { GlobalContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ReviewCard = (props) => {
  const contextData = useContext(GlobalContext);
  const { id, text, rating } = props.data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <article>
        <div className="head">
          <h2>{rating}</h2>
          <p onClick={() => contextData.removeReview(id)}>
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
