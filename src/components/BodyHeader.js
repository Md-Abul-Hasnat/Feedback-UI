import React, { useState } from "react";

const BodyHeader = (props) => {
  const [reviewText, setReviewText] = useState("");
  const [reviewPoint, setReviewPoint] = useState(10);

  function handleSubmit(e) {
    e.preventDefault();
    if (reviewText.length > 10) {
      const newReview = {
        id: Math.random(),
        text: reviewText,
        rating: reviewPoint,
      };
      props.onReviewSubmit(newReview);
      setReviewText("");
    }
  }

  function handleTextChange(e) {
    setReviewText(e.target.value);
  }

  function handleRatingPointClick(e) {
    if (e.target.classList.contains("rating")) {
      const p = document.querySelectorAll(".rating-points p");
      p.forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      setReviewPoint(e.target.innerText);
    }
  }

  return (
    <section className="body-header">
      <div className="body-header-wrapper">
        <h2>How would you rate your service with us ?</h2>
        <div onClick={handleRatingPointClick} className="rating-points">
          <p className="rating">1</p>
          <p className="rating">2</p>
          <p className="rating">3</p>
          <p className="rating">4</p>
          <p className="rating">5</p>
          <p className="rating">6</p>
          <p className="rating">7</p>
          <p className="rating">8</p>
          <p className="rating">9</p>
          <p className="rating active">10</p>
        </div>

        <div className="review-text-area">
          <input
            value={reviewText}
            onChange={handleTextChange}
            type="text"
            placeholder="Write your review"
            required
          />
          <button onClick={handleSubmit} className="btn">
            Submit
          </button>
        </div>
        {reviewText.length > 0 && reviewText.length < 10 ? (
          <p>Write atleast 10 charecters</p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default BodyHeader;
