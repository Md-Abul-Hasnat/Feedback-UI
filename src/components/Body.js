import React, { useState } from "react";
import BodyContent from "./BodyContent";
import BodyHeader from "./BodyHeader";
import reviewData from "../assets/ReviewData";

const Body = () => {
  const [data, setData] = useState(reviewData);

  function removeReview(id) {
    const removeReview = data.filter((review) => review.id !== id);
    setData(removeReview);
  }

  function newReview(review) {
    setData([review, ...data]);
  }

  return (
    <section className="body">
      <BodyHeader onReviewSubmit={newReview} />
      <BodyContent onRemove={removeReview} reviewData={data} />
    </section>
  );
};

export default Body;
