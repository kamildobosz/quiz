import { useState} from "react";

const Answers = (props) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState('answer')

    const handleSelectAnswer = (answer)=>{
        setSelectedAnswer(answer);
        props.setCountingDown(false)
        setClassName('answer active')
        setTimeout(()=> {
            if(answer.correct){
                setClassName('answer correct')
            } else {
                setClassName('answer wrong');
                props.question?.answers.map((answer) =>(
                    answer.correct === true ? console.log(this): console.log(this)
                ))
            }
        },2000);
        setTimeout(()=>{
            props.setCountingDown(true);
            if(answer.correct){
                props.setQuestionNumber((prev) =>prev + 1)
                setSelectedAnswer(null)
                
            } else {
                props.setTime(false)
                props.setFullWidth(true)
            }
        },
         4000)
    }

    return ( <div className="answers">
      {props.question?.answers.map((answer) =>(
          <div key={answer.txt} className={selectedAnswer ===answer ? className : "answer"} onClick={selectedAnswer ? null : ()=>handleSelectAnswer(answer) }>{answer.txt}</div>
      ))}
    </div>  );
}
 
export default Answers;