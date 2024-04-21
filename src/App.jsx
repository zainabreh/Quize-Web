import React from 'react'
import QuesAnsContainer from './Components/QuesAnsContainer'
import PricesContainer from './Components/PricesContainer'
import './App.css'

const App = () => {

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
       <QuesAnsContainer/>
      </div>

      <div className="right">
       <PricesContainer Prices={Prices}/>
      </div>

    </div>
    </>
  )
}

export default App
