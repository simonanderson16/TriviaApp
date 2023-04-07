import { ToggleButton, Checkbox, Button } from "@mui/material";
import "./styles.css";
import { useState } from "react";

export default function AnswerChoice({singleAnswer, correctAnswer, currentCorrect, handleCorrectAnswer}) {

    //console.log("correct answer: " + correctAnswer);

    const [isCorrect, setIsCorrect] = useState(null);
    const [alreadyAnswered, setAlreadyAnswered] = useState(false);

    // function handleCorrect() {
    //     return currentCorrect+1;
    // }
    
    function handleAnswerSelection(answer) {
        //console.log("answer: " + answer);
        if (!alreadyAnswered) {
            setAlreadyAnswered(true);
            if (answer === correctAnswer) {
                console.log("Correct!")
                setIsCorrect(true);
                handleCorrectAnswer(currentCorrect+1);
                return true;
            }
            else {
                console.log("Incorrect :(")
                setIsCorrect(false);
                return false;
            }
        }   
    }


    return(
        <div className="answer_choice">
            {<button className="answer-select" onClick={() => handleAnswerSelection(singleAnswer)}></button>}
            <p className={isCorrect===null ? "" : isCorrect?  "correct" : "incorrect"}>{singleAnswer}</p>
            {/*<p>Correct Answer: {correctAnswer}</p>*/}
        </div>
    );
}