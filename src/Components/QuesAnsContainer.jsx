import React from "react";
import Counter from "./Counter";
import Questions from "./Questions";

const QuesAnsContainer = () => {
  return <div className="QsContainer">

    <div className="count">
    <Counter/>
    </div>

    <div className="qs">
    <Questions/>
    </div>
  </div>;
};

export default QuesAnsContainer;
