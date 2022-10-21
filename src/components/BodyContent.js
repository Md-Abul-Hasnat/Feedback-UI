import React from "react";
import ReviewCard from "./ReviewCard";

const BodyContent = (props) => {
  const data = props.reviewData;
  const averageRating = data.map((review) => review.rating);
  const average = (
    averageRating.reduce((sum, cur) => sum + cur, 0) / averageRating.length
  ).toFixed(1);

  return (
    <section className="body-content">
      <div className="body-content-wrapper">
        <div className="details">
          <p>{data.length} Reviews </p>
          <p>Average rating : {isFinite(average) ? average : 0} </p>
        </div>
        <motion className="review-card">
          {data.map((review) => (
            <ReviewCard
              onRemoveReview={props.onRemove}
              data={review}
              key={review.id}
            />
          ))}
        </motion>
      </div>
    </section>
  );
};

export default BodyContent;
