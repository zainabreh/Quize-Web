import React from 'react'
import QuesAnsContainer from './Components/QuesAnsContainer'
import PricesContainer from './Components/PricesContainer'
import './App.css'

const App = () => {
  return (
    <>
    <div className="mainBody">

      <div className="left">
       <QuesAnsContainer/>
      </div>

      <div className="right">
       <PricesContainer/>
      </div>

    </div>
    </>
  )
}

export default App
