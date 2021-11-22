import { useEffect } from "react";
import { useState } from "react"
import { data } from "../data";

const Question = (props) => {   

    return ( <div className="question">{props.question?.question}</div> );
}
 
export default Question;