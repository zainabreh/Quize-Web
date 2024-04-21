import React, { useState } from "react";
import QuesAnsContainer from "./Components/QuesAnsContainer";
import PricesContainer from "./Components/PricesContainer";
import "./App.css";

const App = () => {
  const [qsNumber, setQsNumber] = useState(1);
  const [time,setTime] = useState(false);

  const QuestionsData = [
    {
      id: 1,
      question: "What is thought to be the world’s oldest volcano?",
      answers: [
        {
          ans: "Mauna Loa",
          correct: false,
        },
        {
          ans: "Mount Etna",
          correct: true,
        },
        {
          ans: "Krakatoa",
          correct: false,
        },
        {
          ans: "Mount Unzen",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of these countries is the most densely populated?",
      answers: [
        {
          ans: "Hong Kong",
          correct: false,
        },
        {
          ans: "Japan",
          correct: false,
        },
        {
          ans: "Singapore",
          correct: false,
        },
        {
          ans: "Monaco",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "What is the chemical symbol for Gold?",
      answers: [
        {
          ans: "Au",
          correct: true,
        },
        {
          ans: "Gd",
          correct: false,
        },
        {
          ans: "Go",
          correct: false,
        },
        {
          ans: "Ag",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who painted the 'Mona Lisa'?",
      answers: [
        {
          ans: "Michelangelo",
          correct: false,
        },
        {
          ans: "eonardo da Vinci",
          correct: true,
        },
        {
          ans: "Raphael",
          correct: false,
        },
        {
          ans: "Caravaggio",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who invented the lightbulb?",
      answers: [
        {
          ans: "Albert Einstein",
          correct: false,
        },
        {
          ans: " Nikola Tesla",
          correct: false,
        },
        {
          ans: "Thomas Edison",
          correct: true,
        },
        {
          ans: "Alexander Graham Bell",
          correct: false,
        },
      ],
    },
  ];

  const Prices = [
    {
      id: 1,
      price: "$ 100",
    },
    {
      id: 2,
      price: "$ 200",
    },
    {
      id: 3,
      price: "$ 300",
    },
    {
      id: 4,
      price: "$ 500",
    },
    {
      id: 5,
      price: "$ 1000",
    },
    {
      id: 6,
      price: "$ 2000",
    },
    {
      id: 7,
      price: "$ 4000",
    },
    {
      id: 8,
      price: "$ 8000",
    },
    {
      id: 9,
      price: "$ 16000",
    },
    {
      id: 10,
      price: "$ 32000",
    },
    {
      id: 11,
      price: "$ 64000",
    },
    {
      id: 12,
      price: "$ 125000",
    },
    {
      id: 13,
      price: "$ 250000",
    },
    {
      id: 14,
      price: "$ 500000",
    },
    {
      id: 15,
      price: "$ 1000000",
    },
  ].reverse();

  return (
    <>
      <div className="mainBody">
        
        <div className="left">
          <QuesAnsContainer
          QuestionsData={QuestionsData} 
          qsNumber={qsNumber}
          setQsNumber={setQsNumber}
          time={time}
          setTime={setTime}
          Prices={Prices}
          />
        </div>

        <div className="right">
          <PricesContainer Prices={Prices} qsNumber={qsNumber}/>
        </div>
      </div>
    </>
  );
};

export default App;
