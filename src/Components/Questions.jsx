import React, { useEffect, useState } from 'react'
import Answercorrect from "../Assets/correct.mp3";
import Answerwrong from "../Assets/wrong.mp3";
import PlaySound from "../Assets/play.mp3";
import useSound from "use-sound";

const Questions = ({QuestionsData,qsNumber,setQsNumber,setTime}) => {

  const [Question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [ansBlinking,setAnsBlinking] = useState('option')
  const[playCorrectSound] = useSound(Answercorrect);
  const[playWrongSound] = useSound(Answerwrong)
  const[play] = useSound(PlaySound)

  useEffect(()=>{
    play();
  },[play])

  useEffect(()=>{
    setQuestion(QuestionsData[qsNumber-1])
  },[QuestionsData,qsNumber])

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setAnsBlinking(a.correct ? 'option correct' : 'option wrong');
    setTimeout(()=>{
      if(a.correct){
        playCorrectSound()
        setTimeout(()=>{
          setQsNumber((p)=>p+1);
          setSelectedAnswer(null);
          setAnsBlinking('option');
        },2000)
      }
      else{
        playWrongSound();
        setTimeout(()=>{
          setTime(true);
        },2000)
      }
    },3000)
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
    </div>

    </div>
  )
}

export default Questions
