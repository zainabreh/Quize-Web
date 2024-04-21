import React, { useEffect, useState } from 'react'

const Questions = ({QuestionsData,qsNumber,setQsNumber,setTime}) => {

  const [Question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [ansBlinking,setAnsBlinking] = useState('option')

  useEffect(()=>{
    setQuestion(QuestionsData[qsNumber-1])
  },[QuestionsData,qsNumber])

  const handleClick = (a) => {
    setSelectedAnswer(a);

    setTimeout(()=>{
      setAnsBlinking(a.correct ? 'option correct' : 'option wrong')
    },3000)

    setTimeout(()=>{
      if(a.correct){
        setQsNumber((p)=>p+1);
        setSelectedAnswer(null);
      }
      else{
        setTime(true);
      }
    },6000)
  }

  return (
    <div className='qsBox'>

    <div className="questionBox">
        <p>{Question?.question}</p>
    </div>

    <div className="answerBox">
      {
        Question?.answers.map((a)=>(
          <span className={selectedAnswer === a ? ansBlinking : "option"} onClick={()=>handleClick(a)}>{a.ans}</span>
        ))
      }
        {/* <span className='option'>India</span>
        <span className='option'>America</span>
        <span className='option'>Iran</span> */}
    </div>

    </div>
  )
}

export default Questions
