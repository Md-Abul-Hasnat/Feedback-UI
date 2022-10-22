import React, { createContext, useState } from "react";
import reviewData from "../assets/ReviewData";

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState(reviewData);

  function removeReview(id) {
    const removeReview = data.filter((review) => review.id !== id);
    setData(removeReview);
  }

  function newReview(review) {
    setData([review, ...data]);
  }

  return (
    <GlobalContext.Provider value={{ data, removeReview, newReview }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
