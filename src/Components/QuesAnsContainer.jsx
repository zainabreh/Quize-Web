import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Questions from "./Questions";

const QuesAnsContainer = ({
  QuestionsData,
  qsNumber,
  setQsNumber,
  time,
  setTime,
  Prices,
}) => {
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    qsNumber > 1 && setEarned(Prices.find((m) => m.id === qsNumber - 1).price);
  }, [qsNumber, Prices]);

  return (
    <div className="QsContainer">
      {time ? (
        <h1 className="finishmsg">You Earned: {earned} Amount </h1>
      ) : (
        <>
          <div className="count">
            <div className="counter">
              <h1><Counter setTime={setTime} qsNumber={qsNumber} /></h1>
            </div>
            
          </div>

          <div className="qs">
            <Questions
              QuestionsData={QuestionsData}
              qsNumber={qsNumber}
              setQsNumber={setQsNumber}
              setTime={setTime}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default QuesAnsContainer;
