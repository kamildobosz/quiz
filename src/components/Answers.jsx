import { useEffect, useState} from "react";
import { data } from "../data";

const Answers = (props) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState('answer')

    const handleSelectAnswer = (answer)=>{
        setSelectedAnswer(answer);
        setClassName('answer active')
        setTimeout(()=> {
            if(answer.correct){
                setClassName('answer correct')
            } else {
                setClassName('answer wrong')
            }
        },2000);
        setTimeout(()=>{
            if(answer.correct){
                props.setQuestionNumber((prev) =>prev + 1)
                setSelectedAnswer(null)
            } else {
                props.setTime(false)
            }
        },
         4000)

    }

    return ( <div className="answers">
      {props.question?.answers.map((answer) =>(
          <div key={answer.txt} className={selectedAnswer ===answer ? className : "answer"} onClick={()=>handleSelectAnswer(answer)}>{answer.txt}</div>
      ))}
    </div>  );
}
 
export default Answers;