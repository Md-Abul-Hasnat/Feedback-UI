import React, { useContext } from "react";
import { GlobalContext } from "./Context";
import ReviewCard from "./ReviewCard";

const BodyContent = (props) => {
  const contextData = useContext(GlobalContext);
  const data = contextData.data;

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
        <div className="review-card">
          {data.map((review) => (
            <ReviewCard data={review} key={review.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
