import { useEffect, useState } from "react";
const Timer = (props) => {

    const[timer, setTimer]= useState(30)

useEffect(()=>{
    if(timer ===0){
        props.setTime(false)
        props.setFullWidth(true)
    }
    const interval = setInterval(() => {
       setTimer(prev=>prev-1) 
    }, 1000);
     if(props.countingDown === false){
         clearInterval(interval)
     }
    return () =>clearInterval(interval)
});

useEffect(()=>{
setTimer(30)
}, [props.questionNumber])

    return (
        <div className="timer">{timer}</div>
      );
}
 
export default Timer;