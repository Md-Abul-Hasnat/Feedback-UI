import React from "react";
import BodyContent from "./BodyContent";
import BodyHeader from "./BodyHeader";

const Body = () => {
  return (
    <section className="body">
      <BodyHeader />
      <BodyContent />
    </section>
  );
};

export default Body;
