import { useEffect, useState } from "react";
const Timer = (props) => {

    const[timer, setTimer]= useState(30)

useEffect(()=>{
    if(timer ===0){
        props.setTime(false)
    }
    const interval = setInterval(() => {
       setTimer(prev=>prev-1) 
    }, 1000);
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