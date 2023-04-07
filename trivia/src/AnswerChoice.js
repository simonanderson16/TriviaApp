import { ToggleButton, Checkbox } from "@mui/material";
import "./styles.css";

export default function AnswerChoice({allAnswers, correctAnswer}) {

    return(
        <div className="answer_choice">
            <Checkbox/>
            <p>{allAnswers}</p>
            {/*<p>Correct Answer: {correctAnswer}</p>*/}
        </div>
    );
}