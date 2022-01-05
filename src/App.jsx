import { useState, useEffect } from "react";
import Question from "./components/Questions";
import Answers from "./components/Answers";
import Timer from "./components/Timer"
import { data } from "./data";

import "./styles/app.css";


function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [time, setTime] = useState(true)
  const [question, setQuestion] = useState(null)
  const [earnedMoney, setEarnedMoney] = useState(0)
  const [start, setStart] = useState(false)
  const [countingDown, setCountingDown] = useState(true)
  const [fullWidth, setFullWidth] = useState(false)

  
  


  let number = questionNumber

  useEffect(()=>{
      setQuestion(data[number-1])

  },[number])

  

const questionNumbers = [
  {id: 1, number: 1, amount: 100},
  {id: 2, number: 2, amount: 200},
  {id: 3, number: 3, amount: 500},
  {id: 4, number: 4, amount: 1000},
  {id: 5, number: 5, amount: 2000},
  {id: 6, number: 6, amount: 5000},
  {id: 7, number: 7, amount: 10000},
  {id: 8, number: 8, amount: 20000},
  {id: 9, number: 9, amount: 40000},
  {id: 10, number: 10, amount: 75000},
  {id: 11, number: 11, amount: 100000},
  {id: 12, number: 12, amount: 250000},
]


const handleButton= ()=>{
  setStart(!start)
}
useEffect(()=>{
questionNumber > 1&& 
setEarnedMoney(questionNumbers.find((item) => item.id === questionNumber-1).amount)
},[questionNumbers, questionNumber])

const handleReplayButton = () =>{
  setTime(true)
  setQuestionNumber(1)
}


  return start ?  <div className="app">
    
    <div className="left" style={ time === false ? {width: "100%"} : {color: 'white'}}>
    {time === false ?
    <>
     <div className="endGame">Wygrałeś: {earnedMoney}zł</div> 
     <button className="replay" onClick = {handleReplayButton}>Zagraj ponownie</button>
     </>
     :

    <>
        <Timer setTime={setTime} questionNumber={questionNumber} start = {start} setStart={setStart} countingDown={countingDown} setCountingDown={setCountingDown} setFullWidth={setFullWidth}/>
      <div className="question-container">
          <Question questionNumber= {questionNumber} question={question} setQuestion={setQuestion}/>
      </div>
     <Answers questionNumber={questionNumber} setQuestionNumber = {setQuestionNumber} setTime ={setTime} question={question} setQuestion={setQuestion}
     start={start} setStart={setStart} time={time} countingDown={countingDown} setCountingDown={setCountingDown} setFullWidth={setFullWidth}/>
     </>

}

    </div>
    <div className="right"style={ time === false ? {display: "none"} : {display:"flex"}}>
       <div className="sum">Grasz o: {questionNumbers[questionNumber - 1].amount}zł</div>
      <div className="questions-list" >
        {questionNumbers.map(number=>(
          <p className={questionNumber === number.id ? "questions-list-number active" : "questions-list-number"}key={number.id}>{number.number}</p>
        ))}
      </div>
      
      </div>
  </div>
 : <div className="app"> <button className="start" onClick={handleButton}>Zagraj</button></div>  
}

export default App;
